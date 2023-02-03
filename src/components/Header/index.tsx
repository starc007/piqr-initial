import React from "react";
import Link from "next/link";
import { MdEmail } from "react-icons/md";
import Button from "@components/UI/Button";

const Header = () => {
  return (
    <div className="px-4 h-16 py-3 border sticky top-0 z-20 bg-white/60 backdrop-blur-xl">
      <div className="flex justify-between items-center container mx-auto">
        <Link href="/">W3b Bharat</Link>
        <div className="flex items-center space-x-2">
          <Link
            href="/login"
            className="flex justify-center items-center border border-primary px-4 h-10 text-sm font-semibold rounded-full bg-primary text-white transition duration-300"
          >
            Join us
          </Link>
          <Button cls="hover:bg-gray-100 rounded-full p-2 text-primary transition duration-300">
            <MdEmail size={25} />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Header;
