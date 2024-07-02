"use client";

import ActionBtn from "@/app/components/ActionBtn";
import Heading from "@/app/components/Heading";
import Status from "@/app/components/Status";
import { ToastAction } from "@/app/components/ui/toast";
import { toast } from "@/libs/use-toast";
import { formatPrice } from "@/utils/formatPrice";
import { DataGrid } from "@mui/x-data-grid";
import axios from "axios";
import moment from "moment";
import { useRouter } from "next/navigation";
import { useCallback } from "react";

import {
  MdAccessTimeFilled,
  MdDeliveryDining,
  MdDone,
  MdRemoveRedEye,
} from "react-icons/md";

const ManageOrders = ({ orders }) => {
  const router = useRouter();

  let rows = [];

  if (orders) {
    rows = orders.map((order) => {
      return {
        id: order.id,
        customer: order.name,
        amount: formatPrice(order.amount),
        paymentStatus: order.status,
        date: moment(order.createdAt).fromNow(),
        deliverStatus: order.deliveryStatus,
      };
    });
  }

  const columns = [
    { field: "id", headerName: "ID", width: 220 },
    { field: "customer", headerName: "Customer Name", width: 130 },
    {
      field: "amount",
      headerName: "Amount(USD)",
      width: 130,
      renderCell: (params) => {
        return (
          <div className="font-bold text-slate-800">{params.row.amount}</div>
        );
      },
    },
    {
      field: "date",
      headerName: "Date",
      width: 140,
    },
    {
      field: "paymentStatus",
      headerName: "Payment Status",
      width: 100,
      renderCell: (params) => {
        return (
          <div>
            {params.row.deliverStatus === "pending" ? (
              <Status
                text="pending"
                icon={MdAccessTimeFilled}
                bg="bg-slate-200"
                color="text-slate-700"
              />
            ) : params.row.deliverStatus === "complete" ? (
              <Status
                text="completed"
                icon={MdDone}
                bg="bg-emerald-200"
                color="text-emerald-700"
              />
            ) : (
              <></>
            )}
          </div>
        );
      },
    },

    {
      field: "deliverStatus",
      headerName: "Deliver Status",
      width: 130,
      renderCell: (params) => {
        return (
          <div>
            {params.row.deliverStatus === "pending" ? (
              <Status
                text="pending"
                icon={MdAccessTimeFilled}
                bg="bg-slate-200"
                color="text-slate-700"
              />
            ) : params.row.deliverStatus === "dispatched" ? (
              <Status
                text="dispatched"
                icon={MdDeliveryDining}
                bg="bg-purple-200"
                color="text-purple-700"
              />
            ) : params.row.deliverStatus === "delivered" ? (
              <Status
                text="delivered"
                icon={MdDone}
                bg="bg-emerald-200"
                color="text-emerald-700"
              />
            ) : (
              <></>
            )}
          </div>
        );
      },
    },
    {
      field: "action",
      headerName: "Actions",
      width: 150,
      renderCell: (params) => {
        return (
          <div className="flex justify-between items-center  gap-4 mt-2 px-4 w-full">
            <ActionBtn
              icon={MdDeliveryDining}
              onClick={() => handleDispatch(params.row.id, params.row.inStock)}
            />
            <ActionBtn
              icon={MdDone}
              onClick={() => handleDelivery(params.row.id, params.row.images)}
            />
            <ActionBtn
              icon={MdRemoveRedEye}
              onClick={() => {
                router.push(`/transactions/order-details/${params.row.id}`);
              }}
            />
          </div>
        );
      },
    },
  ];

  const handleDispatch = useCallback(
    (id) => {
      axios
        .put("/api/orders", {
          id,
          deliveryStatus: "dispatched",
        })
        .then((res) => {
          toast({
            description: "Order Dispatched",
          });
          router.refresh();
        })
        .catch((error) => {
          toast({
            variant: "destructive",
            title: "Uh oh! Something went wrong.",
            description: error.message,
            action: <ToastAction altText="Try again">Try again</ToastAction>,
          });
        });
    },
    [router]
  );

  const handleDelivery = useCallback(
    (id) => {
      axios
        .put("/api/orders", {
          id,
          deliveryStatus: "delivered",
        })
        .then((res) => {
          toast({
            description: "Order Delivered",
          });
          router.refresh();
        })
        .catch((error) => {
          toast({
            variant: "destructive",
            title: "Uh oh! Something went wrong.",
            description: error.message,
            action: <ToastAction altText="Try again">Try again</ToastAction>,
          });
        });
    },
    [router]
  );

  return (
    <div
      className="
        max-w-[1150px]
        m-auto
        text-xl
        
        "
    >
      <div className="mb-4 mt-8">
        <Heading title="Manage Orders" center />
      </div>
      <div style={{ height: 600, width: "100%" }}>
        <DataGrid
          className="bg-cloudGray"
          rows={rows}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 9 },
            },
          }}
          pageSizeOptions={[9, 20]}
          checkboxSelection
          disableRowSelectionOnClick
        />
      </div>
    </div>
  );
};

export default ManageOrders;
