import ProductAdminNav from "../components/products/ProductAdminNav";

export const metadata = {
  title: "Dashboard Manager",
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
