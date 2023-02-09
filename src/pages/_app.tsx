import "@styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "@components/Layout";
import { useEffect } from "react";
import { useAuthStore } from "@store/index";

export default function App({ Component, pageProps }: AppProps) {
  const getUserData = useAuthStore(state=>state.getUserData)
  useEffect(()=>{
    if(localStorage.getItem('w3Token')){
      getUserData()
    }
  },[])
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
