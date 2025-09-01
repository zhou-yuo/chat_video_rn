import { STORAGE_KEYS } from '@/constants/storageKeys'; // 确认路径正确
import { platformAgnosticStorage } from '@/utils/storage'; // 确认路径正确
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';


export interface UserType {
  id: number;
  name: string;
  avatar?: string;
  [key: string]: any;
}

interface AuthStoreType {
  isLogin: boolean;
  token: string | null;
  user: UserType | null;
  login: (token: string, user: UserType) => void;
  logout: () => void;
  setUser: (user: UserType) => void;
}

const useAuthStore = create<AuthStoreType>()(
  persist(
    (set, get) => ({
      // 初始状态
      isLogin: false,
      token: null,
      user: null,

      // Actions
      login: (token: string, user: UserType) => {
        set({ isLogin: true, token, user });
      },

      logout: () => {
        set({ isLogin: false, token: null, user: null });
      },

      setUser: (user: UserType) => {
        set({ user });
      },
    }),
    {
      name: STORAGE_KEYS.AUTH_STORE, // 使用我们定义的常量
      storage: createJSONStorage(() => platformAgnosticStorage),
    }
  )
);

export default useAuthStore;