import AsyncStorage from '@react-native-async-storage/async-storage';
import { Platform } from 'react-native';
import { MMKV } from 'react-native-mmkv';
import { StateStorage } from 'zustand/middleware';

const mmkvStorage = Platform.OS !== 'web' ? new MMKV() : null;

export function getItem<T>(key: string): Promise<T | null> {
  return new Promise(async (resolve, reject) => {
    try {
      let value: string | null;
      if (Platform.OS === 'web') {
        value = await AsyncStorage.getItem(key);
      } else {
        value = mmkvStorage!.getString(key) ?? null;
      }

      if (value) {
        resolve(JSON.parse(value) as T);
      } else {
        resolve(null);
      }
    } catch (error) {
      console.error('Error getting item from storage', error);
      resolve(null);
    }
  });
}

export async function setItem<T>(key: string, value: T): Promise<void> {
  const stringValue = JSON.stringify(value);

  if (Platform.OS === 'web') {
    await AsyncStorage.setItem(key, stringValue);
  } else {
    mmkvStorage!.set(key, stringValue);
  }
}

export async function removeItem(key: string): Promise<void> {
  if (Platform.OS === 'web') {
    await AsyncStorage.removeItem(key);
  } else {
    mmkvStorage!.delete(key);
  }
}

export const platformAgnosticStorage: StateStorage = {
  setItem: (name: string, value: string): Promise<void> => {
    if (Platform.OS === 'web') {
      return AsyncStorage.setItem(name, value);
    }
    // mmkvStorage 在非 web 平台必然存在
    mmkvStorage!.set(name, value);
    return Promise.resolve();
  },
  getItem: (name: string): Promise<string | null> => {
    if (Platform.OS === 'web') {
      return AsyncStorage.getItem(name);
    }
    const value = mmkvStorage!.getString(name);
    return Promise.resolve(value ?? null);
  },
  removeItem: (name: string): Promise<void> => {
    if (Platform.OS === 'web') {
      return AsyncStorage.removeItem(name);
    }
    mmkvStorage!.delete(name);
    return Promise.resolve();
  },
};