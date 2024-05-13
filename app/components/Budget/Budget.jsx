import { iconsImgs } from "../../../utils/images";
import { budget } from "../../data/data";

const Budget = () => {
  return (
    <div className="grid-two-item grid-common">
      <div className="grid-c-title">
        <h3 className="grid-c-title-text">Budget</h3>
        <button className="grid-c-title-icon">
          <img src={iconsImgs.plus} />
        </button>
      </div>

      <div className="grid-c-top flex justify-between items-center text-silver-v1">
        <h2 className="lg-value">Cash</h2>
        <span className="lg-value">$ 100,000</span>
      </div>

      <div className="p-4 mt-4 rounded-lg bg-jet">
        <div className=" flex flex-col">
          {budget.map((budget) => (
            <div
              className="flex justify-between items-start mb-4"
              key={budget.id}
            >
              <div className="flex items-center gap-2">
                <div>
                  <img className="w-[20px]" src={iconsImgs.check} />
                </div>
                <p className="text text-silver-v1">
                  <span className="font-semibold">{budget.title} </span>
                  <span className="opacity-75">{budget.type}</span>
                </p>
              </div>
              <div className="grid-item-r">
                <span className="text-silver-v1">$ {budget.amount}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Budget;
