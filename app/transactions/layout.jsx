import OrdersAdminNav from "../components/orders/OrdersAdminNav";

const ManageOrders = ({children}) => {
  return (
      <div>
        <div>
          <OrdersAdminNav />
        </div>
        {children}
      </div>

  );
}
 
export default ManageOrders;