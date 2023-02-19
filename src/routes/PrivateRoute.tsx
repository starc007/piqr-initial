import React from "react";
import { useAuthStore } from "@store/index";
import { FC } from "react";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Loader from "@components/Loader";

interface PrivateRouteProps {
  children: React.ReactNode;
}

const PrivateRoute: FC<PrivateRouteProps> = ({ children }) => {
  const router = useRouter();
  const isLoggedIn = useAuthStore((state) => state.isLoggedIn);
  const user = useAuthStore((state) => state.user);
  const isLoading = useAuthStore((state) => state.loading);

  useEffect(() => {
    if (!isLoading && isLoggedIn && !user?.profile.username) {
      // if the user has no username send them to onboard page
      router.push("/onboard");
    }
    if (!isLoading && !isLoggedIn) {
      router.push("/login");
    }
  }, [isLoggedIn, user, isLoading]);

  if (isLoading && isLoggedIn) {
    return (
      <div className="section__height grid place-items-center">
        <Loader col="text-black" />
      </div>
    );
  }

  // if (!isLoading && !isLoggedIn) {
  //   return (
  //     <div className="section__height grid place-items-center">
  //       Unauthenticated
  //     </div>
  //   );
  // }

  return <>{children}</>;
};

export default PrivateRoute;
