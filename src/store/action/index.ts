import { API } from "@api/index";
import Router from "next/router";
import { toast } from "react-hot-toast";
import {
  ActivityItem,
  EducationItem,
  EndorseItem,
  MessageItem,
  Socials,
  UpdateUserProps,
  WorkExperienceItem,
} from "./actions.types";
import { ZAuthSetFunction } from "..";

const getUserData = async (set: ZAuthSetFunction) => {
  try {
    const userDataResponse = await API.get("/user");
    if (userDataResponse?.status === 200) {
      set({
        isLoggedIn: true,
        error: "",
        userId: userDataResponse?.data.profile?.user?._id,
        user: userDataResponse?.data,
      });
    }
  } catch (err) {
    console.log("getUserData", err);
  }
};

export const updateUserDetail = async (
  set: ZAuthSetFunction,
  data: Partial<UpdateUserProps>
) => {
  try {
    const updateRes = await API.put("/user", data);
    if (updateRes?.status === 200) {
      getUserData(set).then(() => toast.success("Saved !"));
    }
  } catch (err: any) {
    console.log("updateUserDetails", err);
  }
};

export const loginWithEmail = async (
  set: ZAuthSetFunction,
  email: string,
  password: string
) => {
  try {
    if (!email || !password) throw new Error("Email or password found!");
    const res = await API.post("/auth/login", { email, password });

    // if user logged in successfully -> set AccessToken -> get user data -> save to state
    if (res?.status === 200) {
      localStorage.setItem("w3Token", res?.data?.accessToken);
      toast.success(res?.data?.msg);
      getUserData(set).then(() => {
        toast.success("Logged In Successfully");
        Router.push("/");
      });
    }
  } catch (err: any) {
    const errResponse = err?.response;
    // failed to login -> set error
    if (errResponse?.status === 400) {
      const errMessage = errResponse?.data?.msg;
      toast.error(errMessage);
      set({ isLoggedIn: false, error: errMessage, userId: "", user: null });
    }
    console.log("loginWithEmail", err);
  }
};

export const logout = async (set: ZAuthSetFunction) => {
  try {
    const response = await API.post("/auth/logout");
    set({ isLoggedIn: false, userId: "" });
    Router.push("/");
  } catch (err) {
    console.log("logout", err);
  }
};

export const addWorkExperience = async (
  set: ZAuthSetFunction,
  data: WorkExperienceItem
) => {
  const response = await API.post("/user/experience", data);
  if (response.status === 200) {
    getUserData(set).then(() => {
      toast.success("Saved!");
    });
  }
};

export const addEducation = async (
  set: ZAuthSetFunction,
  data: EducationItem
) => {
  const response = await API.post("/user/education", data);
  if (response.status === 200) {
    getUserData(set).then(() => {
      toast.success("Saved!");
    });
  }
};

export const addSocials = async (set: ZAuthSetFunction, data: Socials) => {
  try {
    const updateRes = await API.post("/user/social", data);
    if (updateRes.status === 200) {
      getUserData(set).then(() => {
        toast.success("Saved!");
      });
    }
  } catch (err) {
    console.log(err);
  }
};

export const addActivity = async (set: ZAuthSetFunction, data: ActivityItem) => {
  try {
    const updateRes = await API.post("/user/activity", data);
    if (updateRes.status === 200) {
      getUserData(set).then(() => {
        toast.success("Saved!");
      });
    }
  } catch (err) {
    console.log(err);
  }
};

export const deleteEducation = async (set:ZAuthSetFunction,id:string) => {
  try{
    const delResponse = await API.delete("/user/education/"+id);
    if(delResponse?.status === 200){
      getUserData(set).then(() => {
        toast.success("Saved!");
      });
    }
  }catch(err){
    console.log(err)
  }
}

export const deleteExperience= async (set:ZAuthSetFunction,id:string) => {
  try{
    const delResponse = await API.delete("/user/experience/"+id);
    if(delResponse?.status === 200){
      getUserData(set).then(() => {
        toast.success("Saved!");
      });
    }
  }catch(err){
    console.log(err)
  }
}

export const deleteActivity = async (set:ZAuthSetFunction,id:string) => {
  try{
    const delResponse = await API.delete("/user/activity/"+id);
    if(delResponse?.status === 200){
      getUserData(set).then(() => {
        toast.success("Saved!");
      });
    }
  }catch(err){
    console.log(err)
  }
}

export const endorseUser = async(set:ZAuthSetFunction,data:EndorseItem)=>{
  try{
    const response = await API.post("/user/endorse",data);
    if(response.status === 200){
      getUserData(set).then(() => {
        toast.success("Saved!");
      });
    }
  } catch(err){
    console.log(err)
  }
}

export const getAllMessages= async (set:ZAuthSetFunction,data:MessageItem[]) => {

}

export const getAllMessagesByUser = async(set:ZAuthSetFunction,data:MessageItem[]) => {
  
}