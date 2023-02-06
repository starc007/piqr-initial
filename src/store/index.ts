import { create } from "zustand";
import {
  addEducation,
  addWorkExperience,
  loginWithEmail,
  logout,
  updateUserDetail,
} from "./action";
import {
  UpdateUserProps,
  WorkExperienceItem,
  EducationItem,
  UserResponse,
} from "./action/actions.types";

export interface AuthState {
  isLoggedIn: boolean;
  userId: string;
  user: UserResponse | null;
  error: string;
}

export interface AuthActions {
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  updateUserDetail: (data: Partial<UpdateUserProps>) => Promise<void>;
  addWorkExp: (data: WorkExperienceItem) => Promise<void>;
  addEducation: (data: EducationItem) => Promise<void>;
}

export type ZAuthSetFunction = (partial: (AuthState & AuthActions) | Partial<AuthState & AuthActions> | ((state: AuthState & AuthActions) => (AuthState & AuthActions) | Partial<AuthActions & AuthState>), replace?: boolean | undefined) => void


const initialState: AuthState = {
  isLoggedIn: false,
  userId: "",
  user: null,
  error: "",
};

export const useAuthStore = create<AuthState & AuthActions>((set) => ({
  ...initialState,
  login: async (email, password) => await loginWithEmail(set, email, password),
  logout: async () => logout(set),
  updateUserDetail: async (data) => await updateUserDetail(set, data),
  addWorkExp: async (data) => await addWorkExperience(set, data),
  addEducation: async (data) => await addEducation(set, data),
}));
