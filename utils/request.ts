// src/utils/request.ts

import { STORAGE_KEYS } from '@/constants/storageKeys';
import { ApiResponse } from '@/types/common';
import axios, {
  type AxiosError,
  type AxiosInstance,
  type AxiosResponse,
  type InternalAxiosRequestConfig,
} from "axios";
import { platformAgnosticStorage } from './storage';

// 创建 Axios 实例
const service: AxiosInstance = axios.create({
  // 在这里设置您的基础 URL
  baseURL: "http://192.168.88.247:3000" + "/api/", // 请替换为您的 API 地址
  timeout: 10000, // 请求超时时间
});

// 请求拦截器 (Request Interceptor)
service.interceptors.request.use(
  async (config: InternalAxiosRequestConfig) => {
    // 在发送请求前做些什么

    // 设置公共头部
    config.headers["Content-Type"] = "application/json";
    config.headers["X-Custom-Header"] = "my-custom-header"; // 示例自定义头部

    // 获取并设置 Token
    try {
      const token = await platformAgnosticStorage.getItem(STORAGE_KEYS.AUTH_TOKEN);
      
      if (token) {
        // 将 Token 添加到请求头部
        // 请根据您后端的要求修改 'Bearer ' + token 的格式
        config.headers.Authorization = `Bearer ${token}`;
      }
    } catch (error) {
      console.error("获取 Token 失败", error);
    }

    return config;
  },
  (error: AxiosError) => {
    // 对请求错误做些什么
    console.error("请求拦截器错误", error);
    return Promise.reject(error);
  }
);

// 响应拦截器 (Response Interceptor)
service.interceptors.response.use(
  // response 的类型是 AxiosResponse<ApiResponse>，表示响应体是我们定义的 ApiResponse 结构
  (response: AxiosResponse<ApiResponse>) => {
    const res = response.data;

    // code 为 200 表示成功，您可以根据后端接口的实际情况修改
    if (res.code === 200) {
      // 如果成功，直接返回业务数据 (res.data)
      // 这里的类型将由调用 API 的函数决定
      return res.data;
    } else {
      // 处理业务错误
      handleErrorCode(res.code, res.msg);
      return Promise.reject(new Error(res.msg || "Error"));
    }
  },
  (error: AxiosError<ApiResponse>) => {
    // 注意这里为 error 添加了类型
    // 处理 HTTP 网络错误
    let errorMessage = "网络请求出错，请稍后重试";

    if (error.response) {
      // 请求已发出，但服务器返回了状态码
      const { status, data } = error.response;
      // 优先使用后端返回的错误信息 data.message
      errorMessage = data?.msg || error.message;
      handleErrorCode(status, errorMessage);
    } else if (error.request) {
      // 请求已发出，但没有收到响应
      errorMessage = "无法连接到服务器，请检查您的网络";
    } else {
      // 在设置请求时触发了一个错误
      errorMessage = error.message;
    }

    console.error("响应拦截器错误", errorMessage);
    // alert(errorMessage); // 可以用更优雅的 Toast 组件替代

    return Promise.reject(error);
  }
);

// 统一的错误码处理函数
const handleErrorCode = (code: number, message: string): void => {
  switch (code) {
    case 401:
      console.warn("登录状态已过期，请重新登录。", message);
      // 在这里可以执行登出操作，例如清除本地 Token 并跳转到登录页
      // AsyncStorage.removeItem('user_token');
      // navigation.navigate('Login');
      break;
    case 403:
      console.warn("您没有权限执行此操作。", message);
      break;
    case 404:
      console.warn("请求的资源不存在。", message);
      break;
    case 500:
      console.error("服务器内部错误。", message);
      break;
    default:
      console.warn(`[${code}] ${message || "未知错误"}`);
      break;
  }
};

// 导出一个通用的请求函数，并为其添加泛型支持
// 这个函数让我们可以直接指定 API 返回的数据类型，获得完整的类型提示
const request = <T = any>(
  config: import("axios").AxiosRequestConfig
): Promise<T> => {
  return service(config);
};

export default request;
