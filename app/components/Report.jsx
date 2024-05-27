import { FaPlus } from "react-icons/fa6";
import { reportData } from "../data/data";

const Report = () => {
  return (
    <div
      className=" grid-common 
    grid col-start-1 col-end-3 h-[240px]
    lg:flex
    lg:flex-col
    lg:col-start-3
    lg:col-end-3
    lg:h-full
    "
    >
      <div className="grid-c-title">
        <h3 className="grid-c-title-text">Report</h3>
        <button className="grid-c-title-icon">
          <FaPlus />
        </button>
      </div>

      <div className="flex-1">
        <div className="grid grid-cols-6 items-stretch h-[100%]">
          <div className="flex flex-col justify-between p-b-[28px]">
            <span>100</span>
            <span>75</span>
            <span>50</span>
            <span>25</span>
            <span>0</span>
          </div>
          {reportData.map((report) => (
            <div className="flex flex-col text-center" key={report.id}>
              <div
                className="
              flex-1 w-[32px] mr-auto mf-auto rounded-lg bg-primaryLight relative overflow-hidden
              "
              >
                <div
                  className="absolute bottom-0 left-0 w-full h-0 rounded-lg  bg-slate-400"
                  style={{ height: `${report.value1 !== null ? "40%" : ""}` }}
                ></div>
                <div
                  className="absolute bottom-0 left-0 w-full bg-slate-700 rounded-lg"
                  style={{ height: `${report.value2 !== null ? "60%" : ""}` }}
                ></div>
              </div>
              <span className="mt-[12px]">Jan</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Report;
