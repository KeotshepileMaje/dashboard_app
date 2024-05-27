import { FaPlus } from "react-icons/fa6";

const Loans = () => {
  return (
    <div className="h-[220px] grid-common ">
      <div className="grid-c-title">
        <h3 className="grid-c-title-text">Loans</h3>
        <button className="grid-c-title-icon">
          <FaPlus />
        </button>
      </div>

      <div className="grid-c7-content flex justify-around items-center mt-[-42px] mb-[-128px]">
        <div className="progress-bar flex justify-center items-center ml-[-46px]">
          <div className="relative">
            <svg className="relative w-[210px] h-[210px] rotate-90">
              <circle
                cx="105"
                cy="105"
                r="50"
                style={{
                  width: "100%",
                  height: "100%",
                  fill: "none",
                  stroke: "var(--clr-jet)",
                  strokeWidth: 20,
                  strokeLinecap: "round",
                  stroke: "var(--clr-pumpkin)",
                }}
              ></circle>
            </svg>

            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <h3 className="text-lg">
                50<span>%</span>
              </h3>
            </div>
          </div>
        </div>

        <ul>
          <li className="flex flex-col gap-1 mb-2 text-silver-v1">
            <span>Savings Target</span>
            <span className="font-semibold">$ 500,000</span>
          </li>
          <li className="flex flex-col gap-1 text-silver-v1">
            <span>Target Reached</span>
            <span className="font-semibold">$ 250,000</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Loans;
