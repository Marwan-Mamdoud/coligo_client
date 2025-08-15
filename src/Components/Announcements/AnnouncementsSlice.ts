// store/announcementsSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Announcement } from "../../types";

interface AnnouncementsState {
  items: Announcement[];
}

const initialState: AnnouncementsState = {
  items: [],
};

const announcementsSlice = createSlice({
  name: "announcements",
  initialState,
  reducers: {
    setAnnouncements(state, action: PayloadAction<Announcement[]>) {
      state.items = action.payload;
    },
    addAnnouncement(state, action: PayloadAction<Announcement>) {
      state.items.unshift(action.payload); // يضيف في أول القائمة
    },
    removeAnnouncement(state, action: PayloadAction<string>) {
      state.items = state.items.filter((item) => item._id !== action.payload);
    },
    editAnnouncement(state, action: PayloadAction<Announcement>) {
      const index = state.items.findIndex((a) => a._id === action.payload._id);
      if (index !== -1) {
        state.items[index] = action.payload;
      }
    },
  },
});

export const {
  setAnnouncements,
  addAnnouncement,
  removeAnnouncement,
  editAnnouncement,
} = announcementsSlice.actions;

export default announcementsSlice.reducer;
