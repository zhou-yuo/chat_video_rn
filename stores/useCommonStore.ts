import { STORAGE_KEYS } from '@/constants/storageKeys';
import { platformAgnosticStorage } from "@/utils/storage";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface CommonStoreType {
  isSplash: boolean;
  setIsSplash: (isSplash: boolean) => void;
}

const useCommonStore = create<CommonStoreType>()(
  persist(
    (set) => ({
      isSplash: true,
      setIsSplash: (isSplash: boolean) => set({ isSplash }),
    }),
    {
      name: STORAGE_KEYS.COMMON_STORE, 
      storage: createJSONStorage(() => platformAgnosticStorage),
    }
  )
);

export default useCommonStore;
