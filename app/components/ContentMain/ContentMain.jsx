import Cards from "../Cards/Cards";
import Transactions from "../Transactions/Transactions";
import Report from "../Report/Report";
import Budget from "../Budget/Budget";
import Subscriptions from "../Subscriptions/Subscriptions";
import Savings from "../Savings/Savings";
import Loans from "../Loans/Loans";
import Financial from "../Financial/Financial";

const ContentMain = () => {
  return (
    <div className="grid gap-y-[20px] lg:gap-y-[16px]">
      <div
        className="
        grid 
        lg:grid-cols-3 
        lg:gap-x-[16px]
        md:gap-x-[12px]
        md:grid-cols-2
        grid-cols-1
        gap-x-0
        gap-y-[12px]
        
        "
      >
        <Cards />
        <Transactions />
        <Report />
      </div>
      <div
        className="
      grid
      lg:grid-cols-3 
      md:gap-x-[16px]
      md:grid-cols-2
      grid-cols-1
      gap-y-[16px]
      "
      >
        <Budget />

        <div>
          <div
            className="
          grid gap lg:gap-y-[20px]
          md:grid
          gap-y-[12px]
          h-[100%]
          "
          >
            <Subscriptions />
            <Savings />
          </div>
        </div>

        <div>
          <div
            className="
          grid grid-cols-1 h-auto gap-y-[12px]
          lg:gap-y-[20px]
          "
          >
            <Loans />
            <Financial />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentMain;
