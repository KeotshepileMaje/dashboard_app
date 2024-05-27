import { transactions } from "../data/data";
import { iconsImgs } from "../../utils/images";
import { FaPlus } from "react-icons/fa6";

const Transactions = () => {
  return (
    <div className="grid-common">
      <div className="grid-c-title">
        <h3 className="grid-c-title-text">All Transactions</h3>
        <button className="grid-c-title-icon">
          <FaPlus />
        </button>
      </div>

      <div className="grid-content">
        <div className="flex flex-col">
          {transactions.map((transaction) => (
            <div
              className="grid-item flex justify-between items-center mb-6"
              key={transaction.id}
            >
              <div className=" flex items-center gap-x-4">
                <div className="w-[40px] h-[40px] rounded-full overflow-hidden img-fit-cover">
                  <img src={transaction.image} alt="" />
                </div>
                <p className="font-semibold">
                  {transaction.name} <span>{transaction.date}</span>
                </p>
              </div>
              <div className="font-semibold">
                <span className="text-scarlet font-light mt-2 text-base">
                  $ {transaction.amount}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Transactions;
