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
      <Link href="/products">
        <AdminNavItem
          label="All Order"
          icon={MdDashboard}
          selected={pathname === "/products"}
        />
      </Link>
      <Link href="/products/add-products">
        <AdminNavItem
          label="Pending Order"
          icon={MdLibraryAdd}
          selected={pathname === "/add-products"}
        />
      </Link>
      <Link href="/products/manage-products">
        <AdminNavItem
          label="Waiting for Delivery"
          icon={MdDns}
          selected={pathname === "/"}
        />
      </Link>
    </AdminNav>
  );
}

export default OrdersAdminNav;