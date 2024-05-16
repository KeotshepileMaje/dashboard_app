import Container from "@/app/components/Container";
import NullData from "@/app/components/NullData";
import ManageProducts from "./ManageProducts";
import getProducts from "@/actions/getProducts";

const ManageProductsPage = async () => {
  const products = await getProducts({category: null})

  const currentUser = {
    role: 'ADMIN'
  }

  if (!currentUser || currentUser.role !== "ADMIN") {
    return <NullData title="Opps! Access denied" />;
  }

  return (
    <div className="pt-8">
      <Container>
        <ManageProducts products={products} />
      </Container>
    </div>
  );
};

export default ManageProductsPage;
