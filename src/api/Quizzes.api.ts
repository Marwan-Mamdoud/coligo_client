// src/api/Quizzes.api.ts
import { api } from "./createAxios";
import { toast } from "react-toastify";
import { AxiosResponse } from "axios";
import { Quiz, QuizzesResponse } from "../types";

// ==========================
// CRUD Endpoints
// ==========================

type QuizzesResult = Quiz[] | Quiz | Boolean;

// Get all quizzes
export const getQuizzes = async (): Promise<QuizzesResult> => {
  try {
    const result: AxiosResponse<QuizzesResponse> = await api.get("/quizzes");
    if (result.data.success) {
      return result.data.data;
    }
    return true;
  } catch (error: any) {
    toast.error(error?.response?.data.message);
    return false;
  }
};

// Get single quiz by ID
export const getQuizById = async (id: string): Promise<QuizzesResult> => {
  try {
    const result: AxiosResponse<QuizzesResponse> = await api.get(
      `/quizzes/${id}`
    );
    if (result.data.success) {
      return result.data.data;
    }
    return true;
  } catch (error: any) {
    toast.error(error?.response?.data.message);
    return false;
  }
};

// Create new quiz
export const createQuiz = async (quiz: Quiz): Promise<QuizzesResult> => {
  try {
    const result: AxiosResponse<QuizzesResponse> = await api.post(
      "/quizzes",
      quiz
    );
    if (result.data.success) {
      toast.success(result.data.message);
      return result.data.data;
    }
    return true;
  } catch (error: any) {
    toast.error(error?.response?.data.message);
    return false;
  }
};

// Update quiz
export const updateQuiz = async (
  id: string,
  quiz: Quiz
): Promise<QuizzesResult> => {
  try {
    const result: AxiosResponse<QuizzesResponse> = await api.put(
      `/quizzes/${id}`,
      quiz
    );
    if (result.data.success) {
      toast.success(result.data.message);
      return result.data.data;
    }
    return true;
  } catch (error: any) {
    toast.error(error?.response?.data.message);
    return false;
  }
};

// Delete quiz
export const deleteQuiz = async (id: string): Promise<Boolean> => {
  try {
    const result: AxiosResponse<QuizzesResponse> = await api.delete(
      `/quizzes/${id}`
    );
    if (result.data.success) {
      toast.success(result.data.message);
      return true;
    }
    return false;
  } catch (error: any) {
    toast.error(error?.response?.data.message);
    return false;
  }
};
