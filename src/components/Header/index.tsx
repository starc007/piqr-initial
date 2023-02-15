import Link from "next/link";
import { useAuthStore } from "@store/index";
import UserMenu from "./UserMenu";

const Header = () => {
  const { isLoggedIn, logout,user } = useAuthStore();
  return (
    <div className="px-4 h-16 py-3 border sticky top-0 z-20 bg-white/60 backdrop-blur-xl">
      <div className="flex justify-between items-center container mx-auto">
        <Link href="/">W3b Bharat</Link>
        <div className="flex items-center space-x-2">
          {isLoggedIn ? (
            <>
            <Link href="/explore" className="border-r-2 pr-4 hover:underline border-gray-200">
              Explore
            </Link>
          <UserMenu/>
            </>
          ) : (
            <Link
              href="/login"
              className="flex justify-center items-center border border-primary px-4 h-10 text-sm font-semibold rounded-full bg-primary text-white transition duration-300"
              >
              Join us
            </Link>
          )}

      
        {/* <Button cls="hover:bg-gray-100 rounded-full p-2 text-primary transition duration-300">
          <MdEmail size={25} />
        </Button> */}
        </div>
      </div>
    </div>
  );
};

export default Header;
