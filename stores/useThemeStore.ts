import AsyncStorage from '@react-native-async-storage/async-storage';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

interface ThemeStoreType {
  theme: string;
  toggleTheme: () => void;
}

const useThemeStore = create(
  persist<ThemeStoreType>(
    (set) => ({
      theme: 'light',
      toggleTheme: () => set((state) => ({
        theme: state.theme === 'light' ? 'dark' : 'light',
      })),
    }),
    {
      name: 'theme', 
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);

export default useThemeStore;