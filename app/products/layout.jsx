import AdminNav from "../components/products/ProductManagementNav";

export const metadata = {
  title: "E-shop Admin",
  description: "E-shop Admin Dashboard",
};

const Products = ({ children }) => {
  return (
    <div>
      <div>
        <AdminNav />
      </div>
      {children}
    </div>
  );
};

export default Products;
