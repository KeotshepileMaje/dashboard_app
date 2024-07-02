import { FaPlus } from "react-icons/fa6";

const Financial = () => {
  return (
    <div className="h-[220px] grid-common grid-c8">
      <div className="grid-c-title">
        <h3 className="grid-c-title-text">Financial Advice</h3>
        <button className="grid-c-title-icon">
          <FaPlus />
        </button>
      </div>
      <div className="grid-c8-content">
        <p className="text text-silver-v1">
          Ipsum dolor sit amet consectetur, adipisicing elit. Iste, vitae.....
        </p>
      </div>
    </div>
  );
};

export default Financial;
