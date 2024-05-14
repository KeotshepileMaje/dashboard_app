"use client";
import Heading from "@/app/components/Heading";
import CategoryInput from "@/app/components/form/CategoryLabel";
import CheckBox from "@/app/components/form/CheckBox";
import SelectColor from "@/app/components/form/SelectColor";
import TextArea from "@/app/components/form/TextArea";
import Input from "@/app/components/form/input";
import { categories } from "@/utils/category";
import { colors } from "@/utils/colors";
import { useCallback, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { getDownloadURL, getStorage, ref, uploadBytesResumable } from 'firebase/storage'
import firebaseapp from "@/libs/firebase";
import axios from "axios";
import { useRouter } from "next/navigation";
import Button from "@/app/components/ui/Button";
import { Loader2 } from "lucide-react";
import { toast } from "@/app/components/ui/use-toast";
import { ToastAction } from "@/app/components/ui/toast";

const AddProductForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [images, setImages] = useState();
  const [isProductCreated, setIsProductCreated] = useState(false);
  const router = useRouter()

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      description: "",
      price: "",
      brand: "",
      category: "",
      inStock: false,
      images: [],
    }
  });

  useEffect(()=>{
    setCustomValue('images', images)
  },[images])

  useEffect(()=> {
    if (isProductCreated) {
      reset();
      setImages(null);
      setIsProductCreated(false);
    };
  },[isProductCreated]);

  const category = watch("category");
  const setCustomValue = (id, value) => {
    setValue(id, value, {
      shouldValidate: true,
      shouldDirty: true,
      shouldTouch: true,
    });
  };

  const addImageToState = useCallback((value)=> {
    setImages((prev) => {
      if (!prev) {
        return [value]
      }
      return [...prev, value]
    })
  },[])
  const removeImageToState = useCallback((value) => {
    setImages((prev) => {
      if (prev) {
        const filteredImages = prev.filter(
          (item) => item.color !== value.color
        )
        return filteredImages
      }
    });
  }, []);

  const onSubmit = async (data) => {
    console.log('Product Data', data);
    // upload images to firebse
    // save product to mongodb

    setIsLoading(true); 
    let uploadedImages = [];

    if (!data.category) {
      setIsLoading(false)
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: "Category is not selected",
        action: <ToastAction altText="Try again">Try again</ToastAction>,
      });
    };
    if (!data.images || data.images.length === 0) {
      setIsLoading(false)
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: "No image is selected",
        action: <ToastAction altText="Try again">Try again</ToastAction>,
      });
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: "Category is not selected",
        action: <ToastAction altText="Try again">Try again</ToastAction>,
      });
    };

    const handleImageUploads = async () => {
      toast({
        description: "Creating product, please wait...",
      });
      try {
        for (const item of data.images) {
          if (item.image) {
            const fileName = new Date().getTime() + '-' + item.image.name
            const storage = getStorage(firebaseapp)
            const storageRef = ref(storage, `products/${fileName}`)
            const uploadTask = uploadBytesResumable(storageRef,  item.image)


            await new Promise ((resolve, reject) =>{
              uploadTask.on(
                "state_changed",
                (snapshot) => {
                  // Observe state change events such as progress, pause, and resume
                  // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
                  const progress =
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                  console.log("Upload is " + progress + "% done");
                  switch (snapshot.state) {
                    case "paused":
                      console.log("Upload is paused");
                      break;
                    case "running":
                      console.log("Upload is running");
                      break;
                  }
                },
                (error) => {
                  // Handle unsuccessful uploads
                  console.log('Error uploading image', error)
                  reject(error)
                },
                () => {
                  // Handle successful uploads on complete
                  // For instance, get the download URL: https://firebasestorage.googleapis.com/...
                  getDownloadURL(uploadTask.snapshot.ref).then(
                    (downloadURL) => {  
                      uploadedImages.push({
                        ...item,
                        image: downloadURL
                      })
                      console.log("File available at", downloadURL);
                      resolve()
                    }
                  ).catch(
                    (error) => {
                    console.log('Error getting the download URL', error)
                  })
                }
              );
            })

          }
        }
      } catch (error) {
        setIsLoading(false)
        console.error('Error handling image uploads', error)
        toast({
          variant: "destructive",
          title: "Uh oh! Something went wrong.",
          description: "Error handling image uploads",
          action: <ToastAction altText="Try again">Try again</ToastAction>,
        });
      }
    };

    await handleImageUploads();
    const productData = {...data, image:uploadedImages}

    console.log('productData', productData)
    
    axios.post('/api/product', productData)
      .then(()=>{
        toast({
          variant: "success",
          title: "Uh oh! Something went wrong.",
          description: "Something went wrong when saving the product",
          action: <ToastAction altText="Try again">Try again</ToastAction>,
        });
        setIsProductCreated(true);
        router.refresh();
      })
      .catch((error) => {
        toast({
          variant: "destructive",
          title: "Uh oh! Something went wrong.",
          description: "Something went wrong when saving the product",
          action: <ToastAction altText="Try again">Try again</ToastAction>,
        });
      })
      .finally(()=> {
        setIsLoading(false)
      })
  }

  return (
    <div className="grid-common">
      <Heading title="Add a Product" center />
      <Input
        id="name"
        label="name"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
      <Input
        id="price"
        label="price"
        disabled={isLoading}
        register={register}
        errors={errors}
        type="number"
        required
      />
      <Input
        id="brand"
        label="brand"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
      <TextArea
        id="description"
        label="description"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
      <CheckBox
        id="inStock"
        register={register}
        label="This is product is in stock"
      />

      <div className="w-full font-medium">
        <div className="mb-2 font-semibold">Select a Category</div>
        <div
          className="
            grid grid-cols-2 
            md:grid-cols-3 
            max-h-[50vh] 
            overflow-y-auto
            gap-3
        "
        >
          {categories.map((item) => {
            if (item.label === "All") {
              return null;
            }
            return (
              <div key={item.label} className="col-span gap-2">
                <CategoryInput
                  onClick={(category) => setCustomValue("category", category)}
                  selected={category === item.label}
                  label={item.label}
                  icon={item.icon}
                />
              </div>
            );
          })}
        </div>

        <div className="w-full flex flex-col flex-wrap gap-4">
          <div>
            <div className="font-bold">
              Select the available product colors and upload their image
            </div>
            <div className="text0-sm">
              You must upload an image for each of the color selected otherwise
              your color selection will be ignored.
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {colors.map((item, index) => {
              return (
                <SelectColor
                  key={index}
                  item={item}
                  addImageToState={addImageToState}
                  removeImageFromState={removeImageToState}
                  isProductCreated={isProductCreated}
                />
              );
            })}
          </div>
        </div>
      </div>

      <div className="p-4">
        <Button
          label={
            isLoading
              ? `${(<Loader2 className="mr-2 h-4 w-4 animate-spin" />)} Loading`
              : "Add Product"
          }
          onClick={handleSubmit(onSubmit)}
        />
      </div>
    </div>
  );
};

export default AddProductForm;
