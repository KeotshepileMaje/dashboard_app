"use client"

import { MdDashboard, MdDns, MdLibraryAdd } from "react-icons/md";
import AdminNav from "../admin/AdminNav";
import AdminNavItem from "../admin/AdminNavItem";
import Link from "next/link";
import { usePathname } from "next/navigation";

const OrdersAdminNav = () => {
  const pathname = usePathname();

  return (
    <AdminNav>
      <Link href="/transactions">
        <AdminNavItem
          label="Orders Summary"
          icon={MdDashboard}
          selected={pathname === "/transactions"}
        />
      </Link>
      <Link href="/transactions/manage-orders">
        <AdminNavItem
          label="Manage Orders"
          icon={MdLibraryAdd}
          selected={pathname === "/transactions/manage-orders"}
        />
      </Link>
      {pathname.startsWith("/transactions/order-details/") && (
        <AdminNavItem label="Order Details" icon={MdDns} selected={true} />
      )}
    </AdminNav>
  );
}

export default OrdersAdminNav;