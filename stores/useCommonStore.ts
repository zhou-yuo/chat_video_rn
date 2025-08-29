import AsyncStorage from '@react-native-async-storage/async-storage';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

interface CommonStoreType {
  isSplash: boolean;
  setIsSplash: (isSplash: boolean) => void;
}

const useCommonStore = create(
  persist<CommonStoreType>(
      (set) => ({
  isSplash: true,
  setIsSplash: (isSplash: boolean) => set({ isSplash }),
}),
{
  name: 'common',
  storage: createJSONStorage(() => AsyncStorage)
}
  )
  
)

export default useCommonStore