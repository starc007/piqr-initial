import "@styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "@components/Layout";
import { useEffect } from "react";
import { useAuthStore } from "@store/index";
import { GoogleOAuthProvider } from "@react-oauth/google";

const GOOGLE_CLIENT_ID = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID || " ";

export default function App({ Component, pageProps }: AppProps) {
  const getUserData = useAuthStore(state=>state.getUserData)
  
  useEffect(()=>{
    if(localStorage.getItem('w3Token')){
      getUserData()
    }
  },[])
  
  return (
    <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
    <Layout>
      <Component {...pageProps} />
    </Layout>
    </GoogleOAuthProvider>
  );
}
