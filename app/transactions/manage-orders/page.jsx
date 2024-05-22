import getOrders from "@/actions/getOrders";
import ManageOrders from "./ManageOrders";

const Transactions = async () => {
  const orders = await getOrders()

  return (
    <div>
      <ManageOrders orders={orders}/>
    </div>
  );
}
 
export default Transactions;