import { configureStore } from "@reduxjs/toolkit";
import sidebarSlice from "../Components/Sidebar/sidebarSlice";
import loadingSlice from "./loadingSlice";
import announcementsSlice from "../Components/Announcements/AnnouncementsSlice";
import quizzesSlice from "../Components/Quizes/QuizzesSlice";
import authSlice from "../Components/Auth/authSlice";
export const store = configureStore({
  reducer: {
    auth: authSlice,
    sidebar: sidebarSlice,
    loading: loadingSlice,
    announcements: announcementsSlice,
    quizzes: quizzesSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
