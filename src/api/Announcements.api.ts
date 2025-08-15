// src/api/Announcements.api.ts
import { api } from "./createAxios";
import { toast } from "react-toastify";
import { AxiosResponse } from "axios";
import { Announcement, AnnouncementsResponse } from "../types";

// ==========================
// CRUD Endpoints
// ==========================
type AnnouncementsResult = Announcement[] | Announcement | Boolean;
// Get all announcements
export const getAnnouncements = async (): Promise<AnnouncementsResult> => {
  try {
    const result: AxiosResponse<AnnouncementsResponse> = await api.get(
      "/announcements"
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

// Get single announcement by ID
export const getAnnouncementById = async (
  id: string
): Promise<AnnouncementsResult> => {
  const result: AxiosResponse<AnnouncementsResponse> = await api.get(
    `/announcements/${id}`
  );
  try {
    if (result.data.success) {
      return result.data.data;
    }
    return true;
  } catch (error: any) {
    toast.error(error?.response?.data.message);
    return false;
  }
};

// Create new announcement
export const createAnnouncement = async (
  announcement: Announcement
): Promise<AnnouncementsResult> => {
  try {
    const result: AxiosResponse<AnnouncementsResponse> = await api.post(
      "/announcements",
      announcement
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

// Update announcement
export const updateAnnouncement = async (
  id: string,
  announcement: Announcement
): Promise<AnnouncementsResult> => {
  try {
    const result: AxiosResponse<AnnouncementsResponse> = await api.put(
      `/announcements/${id}`,
      announcement
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

// Delete announcement
export const deleteAnnouncement = async (id: string): Promise<Boolean> => {
  try {
    const result: AxiosResponse<AnnouncementsResponse> = await api.delete(
      `/announcements/${id}`
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
  // return data;
};
