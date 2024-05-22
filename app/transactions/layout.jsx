import OrdersAdminNav from "../components/orders/OrdersAdminNav";

const ManageOrders = ({children}) => {
  return (
      <div className="bg-white">
        <div>
          <OrdersAdminNav />
        </div>
        {children}
      </div>

  );
}
 
export default ManageOrders;