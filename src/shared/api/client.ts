import axios, { AxiosInstance, AxiosError } from "axios";
import { ApiError } from "@/shared/types/api";

const client: AxiosInstance = axios.create({
  baseURL: "https://ish.uzedu.uz/api/api",
  headers: {
    "Content-Type": "application/json",
  },
});

client.interceptors.response.use(
  (response) => response,
  (error: AxiosError) => {
    const apiError: ApiError = {
      message: error.message || "An error occurred",
      errors: error.response?.data as Record<string, string[]> | undefined,
    };
    return Promise.reject(apiError);
  }
);

export default client;
