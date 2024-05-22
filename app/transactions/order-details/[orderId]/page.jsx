import getOrderById from "@/actions/getOrderById";
import Container from "@/app/components/Container";
import NullData from "@/app/components/NullData";
import OrderDetails from "./OrderDetails";

const Order = async ({ params }) => {
  const order = await getOrderById(params)

  if (!order) return <NullData title='No order' />

  console.log(order)
  
  return (
    <div className="p-8">
      <Container>
        <OrderDetails order={order} />
      </Container>
    </div>
  );
};

export default Order;
