import { API } from "@api/index";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Loader from "@components/Loader";
import { BiErrorAlt } from "react-icons/bi";
type Props = {};

const VerifyToken = (props: Props) => {
  const [err, setErr] = useState<string>("");
  const router = useRouter();
  const token = router.query.verifyToken as string;

  const verifyEmailLogin = async () => {
    try {
      const res = await API.post("/auth/verify", { token });
      if (res.data) {
        if (res.data?.success) router.push("/");
        console.log(res.data);
      }
    } catch (err) {
      //@ts-ignore
      setErr(err?.message);
      console.log(err);
    }
  };

  useEffect(() => {
    if (token) {
      verifyEmailLogin();
    }
  }, [token]);

  return (
    <section className="section__height flex flex-col md:flex-row  font-bold text-xl gap-4 items-center justify-center text-gray-800">
      {!err ? (
        <Loader h="h-20" w="h-20" col="black" />
      ) : (
        <BiErrorAlt className="text-red-600 h-12 w-12" />
      )}
      {err ? (
        <span className="text-red-500"> {err} </span>
      ) : (
        "Verifying Email..."
      )}
    </section>
  );
};

export default VerifyToken;
