import { create } from "zustand";

interface State {
  isLoggedIn: boolean;
  userId: string;
}

const initialState: State = {
  isLoggedIn: true,
  userId: "323",
};

export const useAuthStore = create<State>((set) => ({
  ...initialState,
  login: (userId: string) => set({ isLoggedIn: true, userId }),
  logout: () => set({ isLoggedIn: false, userId: "" }),
}));
