import { savings } from "../data/data";
import { iconsImgs, personsImgs } from "../../utils/images";

const Savings = () => {
  return (
    <div className="grid-common">
      <div className="grid-c-title">
        <h3 className="grid-c-title-text">Savings</h3>
        <button className="grid-c-title-icon">
          <img src={iconsImgs.plus} />
        </button>
      </div>

      <div className="grid-c6-content">
        <div className="grid-items">
          {savings.map((saving) => (
            <div className="" key={saving.id}>
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <div className="w-[40px] h-[40px] overflow-hidden rounded-full  img-fit-cover">
                    <img src={personsImgs.person_one} />
                  </div>
                  <p className="text text-silver-v1">{saving.title}</p>
                </div>
                <div className="font-bold">
                  <span className="text-silver-v1">
                    $ {saving.saving_amount}
                  </span>
                </div>
              </div>

              <div className="grid-item-bottom">
                <div className="flex flex-wrap">
                  <span className="text-[#8a8587] bg-jet inline-block rounded-lg mt-2 m-6 text-sm px-2 py-4 mr-2">
                    Date taken {saving.date_taken}
                  </span>
                  <span className="text-[#8a8587] bg-jet inline-block rounded-lg mt-2 m-6 text-sm px-2 py-4 mr-2">
                    Amount left $ {saving.amount_left}
                  </span>
                </div>

                <div className="bg-primaryLight h-[10px] rounded-full mt-4">
                  <div className="w-[60%] h-[10px] bg-pumpkin rounded-full"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Savings;
