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
  const userId = useAuthStore((state) => state.userId);

  useEffect(() => {
    if (!isLoggedIn && !userId) {
      router.push("/login");
    }
  }, [isLoggedIn, userId]);

  return <>{children}</>;
};

export default PrivateRoute;
