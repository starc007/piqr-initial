import { create } from "zustand";
import { UserResponse, loginWithEmail, logout } from "./action";
import Router from "next/router";
import { PassThrough } from "stream";

export interface AuthState {
  isLoggedIn: boolean;
  userId: string;
  user:UserResponse | null
  error: string 
}

export interface AuthActions {
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
}

export type ZAuthSetFunction = (state:Partial<AuthState>) => void;

const initialState:AuthState = {
  isLoggedIn: false,
  userId: "",
  user:null,
  error:""
};


export const useAuthStore = create<AuthState & AuthActions>((set) => ({
  ...initialState,
  login: async (email:string,password:string) => await loginWithEmail(set,email,password),
  logout: async ()=> {
    await logout().then(() => {
      set({ isLoggedIn: false, userId: "" });
      Router.push("/");
    });
  },
}));
