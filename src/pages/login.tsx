import React, { useEffect, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import Input from "@components/UI/Input";
import Button from "@components/UI/Button";
import Image from "next/image";
import { SubmitHandler, useForm } from "react-hook-form";
import { useAuthStore } from "@store/index";
import { useRouter } from "next/router";
import { API } from "@api/index";
import { BiError, BiErrorAlt, BiErrorCircle } from "react-icons/bi";

interface FormData {
  email: string;
  password: string;
}

const Login = () => {
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(false);
  const { register, handleSubmit,setValue } = useForm<FormData>();
  const { login,isLoggedIn,error} = useAuthStore();


  useEffect(()=>{
    // if error occurs , refresh password to empty
    if(error){
      setValue("password","")
    }
  },[error,setValue])

  const handleEmailPasswordLogin: SubmitHandler<FormData> = async (data) => {
    setLoading(true);
    await login(data?.email,data?.password)
    setLoading(false);
  };

  if ((router.query.sent as string) == "true") {
    return (
      <section className="section__height flex flex-col items-center justify-center text-4xl text-center font-bold text-primary   sm:p-16 p-6">
        Verification Email Sent 🎉 <br />
        <p className="text-lg text-gray-400 mt-1">
          Follow the link in the email to complete signup process.
        </p>
      </section>
    );
  }

  if(isLoggedIn){
    router.push("/")
  }

  return (
    <section className="section__height grid lg:grid-cols-2">
      <div className="flex sm:p-16 p-6">
        <div className="flex flex-col justify-center w-full ">
          <h1 className="text-4xl font-bold">Login</h1>
          <form onSubmit={handleSubmit(handleEmailPasswordLogin)}>
            <div className="mt-6">
              <label className="text-base font-medium text-gray-900">
                {" "}
                Email address{" "}
              </label>
              <div className="mt-2.5 relative text-gray-400 focus-within:text-gray-600">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg
                    className="w-5 h-5"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                    />
                  </svg>
                </div>
                <Input
                  type="email"
                  {...register("email")}
                  required
                  placeholder="Enter email to get started"
                  cls="w-full h-14 pl-10 pr-4"
                />
              </div>
            </div>
            <div className="mt-4">
              <label className="text-base font-medium text-gray-900">
                {" "}
                Password{" "}
              </label>
              <div className="mt-2.5 relative text-gray-400 focus-within:text-gray-600">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg
                    className="w-5 h-5"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4"
                    />
                  </svg>
                </div>

                <Input
                  type="password"
                  required
                  {...register("password")}
                  placeholder="Enter password"
                  cls="w-full h-14 pl-10 pr-4"
                />
                
              </div>

             {error && <div className="mt-4 border flex items-start gap-2 border-red-500 bg-red-50 text-red-500 p-4 rounded-md font-medium">
                <BiErrorCircle className="h-6 w-6 "/> ERROR : {error}
              </div>}
            </div>

            <Button
              type="submit"
              isLoading={loading}
              cls="h-14 w-full bg-primary text-white rounded-md mt-6 font-semibold"
            >
              Login
            </Button>
          </form>
          <Button cls="mt-10 relative w-full px-4 py-4 text-base font-semibold text-primary transition duration-200 bg-white border rounded-md hover:bg-gray-100 focus:bg-gray-100 focus:outline-none">
            <div className="absolute inset-y-0 left-0 p-4">
              <FcGoogle className="h-6 w-6" />
            </div>
            Sign in with Google
          </Button>
        </div>
      </div>
      <div className="p-16 lg:block hidden">
        <Image
          src="./login.svg"
          alt="login"
          className="w-full h-full object-cover"
          width={500}
          height={500}
        />
      </div>
    </section>
  );
};

export default Login;
