import { API } from "@api/index"
import Router from "next/router"
import { toast } from "react-hot-toast"
import { AuthState, ZAuthSetFunction } from ".."

export type UserResponse = {
  profile: {
    _id:string 
    user: {
      _id:string 
      email:string 
      role:string 
      firstTime:false
    }
    name:string 
    avatar:string 
    skills: string[]
    availableFor:string[]
  }
  education:unknown[]
  experience:unknown[]
  activities:unknown[]
}

const getUserData = async ():Promise<UserResponse> => {
  const res = await API.get("/user");
  return res?.data
}

export const loginWithEmail = async (set:ZAuthSetFunction,email:string,password:string) => {
  try{  
    if(!email || !password) throw new Error("Email or password found!") 
    const res = await API.post("/auth/login",{email,password})
  
    // if user logged in successfully -> set AccessToken -> get user data -> save to state
    if(res?.status === 200){
      localStorage.setItem("w3Token",res?.data?.accessToken)
      toast.success(res?.data?.msg)
      const userData = await getUserData()
      set({isLoggedIn:true,error:"",userId:userData?.profile?.user?._id,user:userData})        
    }
    
    // failed to login -> set error 
    if(res?.status === 400){
      toast.error(res?.data?.msg)
      set({isLoggedIn:false,error:res?.data?.msg,userId:"",user: null})
    }

  }catch(err){
    console.log("loginWithEmail",err)
  }
}

export const logout = async ()=>{
  try{
    const response = await API.post("/auth/logout")
    return response
  } catch(err){
    console.log("logout",err)
  }
}

