import { subscriptions } from "../../data/data";
import { iconsImgs } from "../../../utils/images";

const Subscriptions = () => {
  return (
    <div className="h-[220px] grid-common">
      <div className="grid-c-title">
        <h3 className="grid-c-title-text">Subscriptions</h3>
        <button className="grid-c-title-icon">
          <img src={iconsImgs.plus} />
        </button>
      </div>
      <div>
        <div className="flex flex-col justify-between last:mb-0 ">
          {subscriptions.map((subscription) => (
            <div
              className="flex justify-between items-center mb-[16px]"
              key={subscription.id}
            >
              <div className="flex items-center gap-x-2">
                <div className="bg-red-900/50 w-[32px] h-[32px] rounded-full flex justify-center items-center">
                  <img className="w-[16px]" src={iconsImgs.alert} />
                </div>
                <p className="text-silver-v1">
                  {subscription.title}{" "}
                  <span className="text-[#8a8587]">
                    due {subscription.due_date}
                  </span>
                </p>
              </div>
              <div className="grid-item-r">
                <span className="text-silver-v1">$ {subscription.amount}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Subscriptions;
