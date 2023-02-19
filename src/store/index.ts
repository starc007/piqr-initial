import { create } from "zustand";
import {
  addActivity,
  addEducation,
  addSocials,
  addWorkExperience,
  deleteActivity,
  deleteEducation,
  deleteExperience,
  endorseUser,
  getUserData,
  loginWithEmail,
  loginWithGoogle,
  logout,
  updateUserDetail,
  sendMessage,
  getAllMessagesByUser,
  getAllMessages,
} from "./action";
import {
  UpdateUserProps,
  WorkExperienceItem,
  EducationItem,
  UserResponse,
  Socials,
  ActivityItem,
  EndorseItem,
} from "./action/actions.types";

export interface AuthState {
  isLoggedIn: boolean;
  userId: string;
  user: UserResponse | null;
  error: string;
  loading: boolean;
}

export interface AuthActions {
  login: (email: string, password: string) => Promise<void>;
  loginWithGoogle: (code: string) => Promise<void>;
  logout: () => Promise<void>;
  getUserData: () => Promise<void>;
  updateUserDetail: (data: Partial<UpdateUserProps>) => Promise<void>;
  addWorkExp: (data: WorkExperienceItem) => Promise<void>;
  addEducation: (data: EducationItem) => Promise<void>;
  addSocials: (data: Socials) => Promise<void>;
  addActivity: (data: ActivityItem) => Promise<void>;
  deleteEducation: (id: string) => Promise<void>;
  deleteExperience: (id: string) => Promise<void>;
  deleteActivity: (id: string) => Promise<void>;
  endorseUser: (data: EndorseItem) => Promise<void>;
  sendMessage: (data: { uid: string; message: string }) => Promise<void>;
  getAllMessages: () => Promise<any>;
  getAllMessagesByUser: (userId: string) => Promise<any>;
}

export type ZAuthSetFunction = (
  partial:
    | (AuthState & AuthActions)
    | Partial<AuthState & AuthActions>
    | ((
        state: AuthState & AuthActions
      ) => (AuthState & AuthActions) | Partial<AuthActions & AuthState>),
  replace?: boolean | undefined
) => void;

const initialState: AuthState = {
  isLoggedIn: false,
  userId: "",
  user: null,
  error: "",
  loading: true,
};

export const useAuthStore = create<AuthState & AuthActions>((set) => ({
  ...initialState,
  login: (email, password) => loginWithEmail(set, email, password),
  loginWithGoogle: (code: string) => loginWithGoogle(set, code),
  logout: () => logout(set),
  getUserData: () => getUserData(set),
  updateUserDetail: (data) => updateUserDetail(set, data),
  addWorkExp: (data) => addWorkExperience(set, data),
  addEducation: (data) => addEducation(set, data),
  addActivity: (data) => addActivity(set, data),
  addSocials: (data) => addSocials(set, data),
  deleteActivity: (id) => deleteActivity(set, id),
  deleteEducation: (id) => deleteEducation(set, id),
  deleteExperience: (id) => deleteExperience(set, id),
  endorseUser: (data) => endorseUser(data),
  sendMessage: (data) => sendMessage(data),
  getAllMessagesByUser: (userId) => getAllMessagesByUser(userId),
  getAllMessages: () => getAllMessages(),
}));
