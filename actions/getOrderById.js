import prisma from '@/libs/prismadb'

export default async function getOrderById(params) {
  try {
    const { orderId } = params
    const order = await prisma.order.findUnique({
      where: {
        id: orderId
      }
    })
    if (!order) return null
    return order

  } catch (error) {
    throw new Error(error)
  }
}