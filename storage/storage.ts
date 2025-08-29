// import AsyncStorage from "@react-native-async-storage/async-storage";

// export const setData = async (key: string, value: any) => {
//    try {
//     await AsyncStorage.setItem('key', value);
//   } catch (e) {
//     // saving error
//   }
// };

// export const getData = async (key: string) => {
//   try {
//     const value = await AsyncStorage.getItem(key);
//     if (value !== null) {
//       return value
//     }
//     return null
//   } catch (e) {
//     return null
//   }
// };

// export const removeData = async (key: string) => {
//   try {
//     await AsyncStorage.removeItem(key)
//   } catch(e) {
//     // remove error
//   }
// }

// export const clearData = async () => {
//   try {
//     await AsyncStorage.clear()
//   } catch(e) {
//     // remove error
//   }
// }