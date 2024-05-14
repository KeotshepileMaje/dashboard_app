"use client"

import { MdDashboard, MdDns, MdLibraryAdd } from "react-icons/md";
import AdminNav from "../admin/AdminNav";
import AdminNavItem from "../admin/AdminNavItem";
import Link from "next/link";
import { usePathname } from "next/navigation";

const ProductAdminNav = () => {
  const pathname = usePathname();

  return (
    <AdminNav>
      <Link href="/products">
        <AdminNavItem
          label="Summary"
          icon={MdDashboard}
          selected={pathname === "/products"}
        />
      </Link>
      <Link href="/products/add-products">
        <AdminNavItem
          label="Add Products"
          icon={MdLibraryAdd}
          selected={pathname === "/add-products"}
        />
      </Link>
      <Link href="/products/manage-products">
        <AdminNavItem
          label="Manage Products"
          icon={MdDns}
          selected={pathname === "/"}
        />
      </Link>
    </AdminNav>
  );
};

export default ProductAdminNav;
