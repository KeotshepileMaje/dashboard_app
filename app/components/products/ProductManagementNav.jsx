"use client";

import Link from "next/link";
import AdminNavItem from "./ProductsManagementItem";
import { MdDashboard, MdDns, MdFormatListBulleted, MdLibraryAdd } from "react-icons/md";
import { usePathname } from "next/navigation";

const AdminNav = () => {
  const pathname = usePathname();
  return (
    <div
      className="
        w-full
        shadow-sm
        top-20
        border-b-[1px]
        pt-4"
    >
      <div
        className="
                flex
                flex-row
                items-center
                justify-between
                md:justify-center
                gap-8
                md:gap-12
                overflow-x-auto
                flex-nowrap
                "
      >
        <Link href="/products">
          <AdminNavItem
            label="Summary"
            icon={MdDashboard}
            selected={pathname === "/admin"}
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
        {/* <Link href="/admin/manage-orders">
            <AdminNavItem
              label="Manage Orders"
              icon={MdFormatListBulleted}
              selected={pathname === "/manage-orders"}
            />
          </Link> */}
      </div>
    </div>
  );
};

export default AdminNav;
