import ProductAdminNav from "../components/products/ProductAdminNav";

export const metadata = {
  title: "E-shop Admin",
  description: "E-shop Admin Dashboard",
};

const Products = ({ children }) => {
  return (
    <div>
      <div>
        <ProductAdminNav/>
      </div>
      {children}
    </div>
  );
};

export default Products;
