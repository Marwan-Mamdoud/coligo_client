import { AxiosResponse } from "axios";
import { Announcement, Quiz } from "../types";
import { api } from "./createAxios";
import { toast } from "react-toastify";

type MainResponse = {
  success: boolean;
  message?: string;
  data: {
    announcements: Announcement[];
    quizzes: Quiz[];
  };
};

type MainResult = MainResponse["data"] | boolean;

export const getMain = async (): Promise<MainResult> => {
  try {
    const result: AxiosResponse<MainResponse> = await api.get("/main");
    if (result.data.success) {
      return result.data.data;
    }
    return true;
  } catch (error: any) {
    toast.error(error?.response?.data.message);
    return false;
  }
};
