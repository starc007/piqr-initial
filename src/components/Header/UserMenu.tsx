import React, { useContext } from "react";
import { TbChevronDown, TbMessage, TbUserCircle } from "react-icons/tb";

import Link from "next/link";
import { useAuthStore } from "@store/index";
import { Dropdown, DropdownButton, DropdownContent, DropdownItem } from "@components/UI/Dropdown";
import { HiOutlineUserCircle } from "react-icons/hi2";
import { FiLogOut } from "react-icons/fi";

type Props = {};


const PROFILE_EDIT_ROUTE = "/dashboard/profile"
const INBOX_ROUTE = "/inbox"
const UserMenu = (props: Props) => {
  const { logout,user } = useAuthStore();
  return (
    <Dropdown>
      <DropdownButton>
        <div className="flex items-center hover:bg-gray-100 p-2 rounded-md pl-3 justify-center gap-2">
          {user?.profile?.username}
          <HiOutlineUserCircle className="h-6 w-6" />
          <TbChevronDown className="h-4 w-4" />
        </div>
      </DropdownButton>
      <DropdownContent>
    <Link href={PROFILE_EDIT_ROUTE}>
      <DropdownItem className="flex items-center gap-2 text-gray-600 hover:text-black"><TbUserCircle className="text-xl"/> Profile</DropdownItem>
    </Link>
    <Link href={INBOX_ROUTE}>
          <DropdownItem className="flex items-center gap-2 text-gray-600 hover:text-black"><TbMessage className="text-xl"/> Inbox</DropdownItem>
    </Link>
        <hr />
          <DropdownItem onClick={logout} className="flex hover:text-red-500 gap-2 items-center text-gray-600 "><FiLogOut className="text-xl"/> Logout </DropdownItem>
      </DropdownContent>
    </Dropdown>
  );
};

export default UserMenu;