import { IoBagHandle } from "react-icons/io5";
import { IoIosPie } from "react-icons/io";
import { IoPeopleCircle } from "react-icons/io5";
import { FaCartShopping } from "react-icons/fa6";

const Stats = () => {
  return (
    <div
      className="grid 
        lg:grid-cols-3 
        lg:gap-x-[16px]
        md:gap-x-[12px]
        md:grid-cols-2
        grid-cols-1
        gap-x-0
        gap-y-[12px]
        "
    >
      <BoxWrapper
        icon={IoBagHandle}
        iconColor="bg-sky-500"
        title="Total sales"
        amount="R34525.00"
        performance={+345}
      />
      <BoxWrapper
        icon={IoIosPie}
        iconColor="bg-orange-500"
        title="Total Expenses"
        amount="R1234"
        performance={+343}
      />
      <BoxWrapper
        icon={IoPeopleCircle}
        iconColor="bg-yellow"
        title="Total Customers"
        amount="5678"
        performance={-30}
      />
      <BoxWrapper
        icon={FaCartShopping}
        iconColor="bg-emerald-500"
        title="Total Orders"
        amount="R16493"
        performance={-43}
      />
    </div>
  );
};

export default Stats;

function BoxWrapper({ icon: Icon, iconColor, title, amount, performance }) {
  return (
    <div
      className="
        grid-common
        flex-1 flex items-center
        rounded-xl
        min-w-[250px]
      "
    >
      <div
        className={`rounded-full h-12 w-12 
          flex items-center justify-center 
          ${iconColor} text-white`}
      >
        <Icon size={32} />
      </div>
      <div className="pl-4">
        <span className="text-sm text-gray-500 font-light">{title}</span>
        <div className="flex items-center">
          <span className="font-semibold text-xl text-gray-700  ">
            {amount}
          </span>
          {performance > 0 ? (
            <span className="text-sm text-emerald-700 pl-2">
              + {performance}
            </span>
          ) : (
            <span className="text-sm text-red-700 pl-2">{performance}</span>
          )}
        </div>
      </div>
    </div>
  );
}
