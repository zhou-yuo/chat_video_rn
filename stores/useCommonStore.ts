import { create } from "zustand";

interface CommonStoreType {
  isSplash: boolean;
  setIsSplash: (isSplash: boolean) => void;
}

const useCommonStore = create<CommonStoreType>((set) => ({
  isSplash: true,
  setIsSplash: (isSplash: boolean) => set({ isSplash }),
}));

export default useCommonStore;
