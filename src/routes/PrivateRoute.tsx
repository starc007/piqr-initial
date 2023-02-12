import React from "react";
import { useAuthStore } from "@store/index";
import { FC } from "react";
import { useRouter } from "next/router";
import { useEffect } from "react";

interface PrivateRouteProps {
  children: React.ReactNode;
}

const PrivateRoute: FC<PrivateRouteProps> = ({ children }) => {
  const router = useRouter();
  const isLoggedIn = useAuthStore((state) => state.isLoggedIn);
  const user = useAuthStore((state) => state.user);

  useEffect(() => {
    if(isLoggedIn && !user?.profile.username){
      // if the user has no username send them to onboard page
      router.push("/onboard")
    }
    if (!isLoggedIn) {
      router.push("/login");
    }
  }, [isLoggedIn, user]);

  return <>{children}</>;
};

export default PrivateRoute;
