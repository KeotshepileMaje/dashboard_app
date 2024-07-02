import Link from "next/link";
import { FaPlus } from "react-icons/fa";

const popularProductsData = [
  {
    id: "3432",
    product_name: 'Macbook M1 Pro 14"',
    product_thumbnail:
      "https://m.media-amazon.com/images/I/81OAWVU171L._AC_SX466_.jpg",
    product_price: "$1499.00",
    product_stock: 341,
  },
  {
    id: "7633",
    product_name: "Samsung Galaxy Buds 2",
    product_thumbnail:
      "https://m.media-amazon.com/images/I/51BOYHNPVyL._AC_SY300_SX300_.jpg",
    product_price: "$299.00",
    product_stock: 24,
  },
  {
    id: "6534",
    product_name: "Asus Zenbook Pro",
    product_thumbnail:
      "https://m.media-amazon.com/images/I/510lzmyNBNS._AC_SX355_.jpg",
    product_price: "$779.00",
    product_stock: 56,
  },
  {
    id: "9234",
    product_name: "Acer A315-35-C73P",
    product_thumbnail:
      "https://m.media-amazon.com/images/I/61jbu5LdQ0L._AC_SX355_.jpg",
    product_price: "$350.00",
    product_stock: 98,
  },
  {
    id: "4314",
    product_name: "Apple Magic Keyboard",
    product_thumbnail:
      "https://m.media-amazon.com/images/I/71FCLaGjybL._AC_SX342_SY445_.jpg",
    product_price: "$101.00",
    product_stock: 0,
  },
  {
    id: "4342",
    product_name: "JBL Live Pro 2",
    product_thumbnail:
      "https://m.media-amazon.com/images/I/716qvosJMHL._AC_SY355_.jpg",
    product_price: "$259.00",
    product_stock: 453,
  },
];

const PopularProducts = () => {
  return (
    <div className="grid-two-item grid-common">
      <div className="grid-c-title">
        <h3 className="grid-c-title-text">Popular products</h3>
        <button className="grid-c-title-icon">
          <FaPlus />
        </button>
      </div>

      <div className="mt-4 flex flex-col gap-3">
        <div className="bg-gray-100 px-4 pt-3 pb-4 rounded-xl border border-gray-200">
          <div className="mt-4 flex flex-col gap-3">
            {popularProductsData.map((product) => (
              <Link
                key={product.id}
                legacyBehavior 
                href={`/product/${product.id}`}
                passHref
              >
                <a className="flex hover:no-underline">
                  <div className="w-10 h-10 min-w-10 bg-gray-260 rounded-sm overflow-hidden">
                    <img
                      className="w-full h-full object-cover"
                      src={product.product_thumbnail}
                      alt={product.product_name}
                    />
                  </div>
                  <div className="ml-4 flex-1">
                    <p className="text-sm text-gray-800">
                      {product.product_name}
                    </p>
                    <span
                      className={`text-sm font-medium ${
                        product.product_stock > 0
                          ? "text-emerald-500"
                          : "text-red-500"
                      }`}
                    >
                      {product.product_stock > 0
                        ? `${product.product_stock} in stock`
                        : "Out of stock"}
                    </span>
                  </div>
                  <div className="text-xs text-gray-400 pl-2">
                    {product.product_price}
                  </div>
                </a>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularProducts;
