import Loader from "@components/Loader";
import { useAuthStore } from "@store/index";
import React, { useEffect } from "react";

type Props = {};

const Logout = (props: Props) => {
  const { logout } = useAuthStore();

  useEffect(() => {
    logout();
  }, [logout]);

  return (
    <section className="section__height flex flex-col md:flex-row  font-bold text-xl gap-4 items-center justify-center text-gray-800">
      <Loader h="h-20" w="h-20" col="black" />
      Logging you out...
    </section>
  );
};

export default Logout;
