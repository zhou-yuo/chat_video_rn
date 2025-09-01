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
        // 你可以在这里处理一些额外的逻辑，例如保存 token 到 API 请求头
        set({ isLogin: true, token, user });
      },

      logout: () => {
        // 登出时，清空所有认证信息
        set({ isLogin: false, token: null, user: null });
        // 你也可以在这里处理其他登出逻辑，例如清除 API 请求头、重定向到登录页等
      },

      setUser: (user: UserType) => {
        // 允许在登录状态下更新用户信息（例如，用户编辑了他们的个人资料）
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