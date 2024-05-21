"use client";

import ActionBtn from "@/app/components/ActionBtn";
import Heading from "@/app/components/Heading";
import Status from "@/app/components/Status";
import { ToastAction } from "@/app/components/ui/toast";
import { toast } from "@/app/components/ui/use-toast";
import firebaseapp from "@/libs/firebase";
import { formatPrice } from "@/utils/formatPrice";
import { DataGrid } from "@mui/x-data-grid";
import axios from "axios";
import { deleteObject, getStorage, ref } from "firebase/storage";
import { useRouter } from "next/navigation";
import { useCallback } from "react";

import {
  MdCached,
  MdClose,
  MdDelete,
  MdDone,
  // MdRemoveRedEye,
} from "react-icons/md";

const ManageProducts = ({ products }) => {
  const router = useRouter();
  const storage = getStorage(firebaseapp);

  let rows = [];

  if (products) {
    rows = products.map((product) => {
      return {
        id: product.id,
        name: product.name,
        price: formatPrice(product.price),
        category: product.category,
        brand: product.brand,
        inStock: product.inStock,
        images: product.images
      };
    });
  }

  const columns = [
    { field: "id", headerName: "ID", width: 220 },
    { field: "name", headerName: "Name", width: 220 },
    {
      field: "price",
      headerName: "Price(USD)",
      width: 220,
      renderCell: (params) => {
        return (
          <div className="font-bold text-slate-800">{params.row.price}</div>
        );
      },
    },
    { field: "category", headerName: "Category", width: 100 },
    {
      field: "brand",
      headerName: "Brand",
      width: 100,
    },
    {
      field: "inStock",
      headerName: "inStock",
      width: 120,
      renderCell: (params) => {
        return (
          <div>
            {params.row.inStock === true ? (
              <Status
                text="in stock"
                icon={MdDone}
                bg="bg-teal-200"
                color="text-teal-700"
              />
            ) : (
              <Status
                text="out of stock"
                icon={MdClose}
                bg="bg-rose-200"
                color="text-rose-700"
              />
            )}
          </div>
        );
      },
    },
    {
      field: "action",
      headerName: "Actions",
      width: 150,
      renderCell: (params) => {
        return (
          <div className="flex justify-between items-center  gap-4 mt-2 px-4 w-full">
            <ActionBtn
              icon={MdCached}
              onClick={() =>
                handleToggleStock(params.row.id, params.row.inStock)
              }
            />
            <ActionBtn
              icon={MdDelete}
              onClick={() => handleDelete(params.row.id, params.row.images)}
            />
            {/* <ActionBtn 
            icon={MdRemoveRedEye}
            onClick={() => {
              router.push(`product/${params.row.id}`)
            }} 
            /> */}
          </div>
        );
      },
    },
  ];

  const handleToggleStock = useCallback(
    (id, inStock) => {
      axios
        .put("/api/product", {
          id,
          inStock: !inStock,
        })
        .then((res) => {
          toast({
            description: "Product status changed",
          });
          router.refresh();
        })
        .catch((error) => {
          toast({
            variant: "destructive",
            title: "Uh oh! Something went wrong.",
            description: error.message,
            action: <ToastAction altText="Try again">Try again</ToastAction>,
          });
        });
    },
    [router]
  );

  const handleDelete = useCallback(
    async (id, images) => {
      toast({ description: "Deleting product, please wait" });
      console.log('Deleting---', images)
      const handleImageDelete = async () => {
        try {
          if (images && Array.isArray(images)) {
            for (const item of images) {
              if (item.image) {
                const imageRef = ref(storage, item.image);
                await deleteObject(imageRef);
                console.log("image deleted", item.image);
              }
            }
          }
        } catch (error) {
          console.log("Deleting image error", error);
        }
      };

      // Call the function using ()
      await handleImageDelete();

      axios
        .delete(`/api/product/${id}`)
        .then((res) => {
          toast({ description: "Product deleted" });
          router.refresh();
        })
        .catch((error) => {
          console.log(error);
          toast({
            variant: "destructive",
            title: "Uh oh! Something went wrong.",
            description: "Delete failed",
            action: <ToastAction altText="Try again">Try again</ToastAction>,
          });
        });
    },
    [router, storage]
  );

  return (
    <div
      className="
        max-w-[1150px]
        m-auto
        text-xl
        bg-white
        "
    >
      <div className="mb-4 mt-8">
        <Heading title="Manage Products" center />
      </div>
      <div style={{ height: 600, width: "100%" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 9 },
            },
          }}
          pageSizeOptions={[9, 20]}
          checkboxSelection
          disableRowSelectionOnClick
        />
      </div>
    </div>
  );
};

export default ManageProducts;
