// store/quizzesSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Quiz } from "../../types";

interface QuizzesState {
  items: Quiz[];
}

const initialState: QuizzesState = {
  items: [],
};

const quizzesSlice = createSlice({
  name: "quizzes",
  initialState,
  reducers: {
    setQuizzes(state, action: PayloadAction<Quiz[]>) {
      state.items = action.payload;
    },
    addQuiz(state, action: PayloadAction<Quiz>) {
      state.items.unshift(action.payload); // add to the start
    },
    removeQuiz(state, action: PayloadAction<string>) {
      state.items = state.items.filter((item) => item._id !== action.payload);
    },
    editQuiz(state, action: PayloadAction<Quiz>) {
      const index = state.items.findIndex((q) => q._id === action.payload._id);
      if (index !== -1) {
        state.items[index] = action.payload;
      }
    },
  },
});

export const { setQuizzes, addQuiz, removeQuiz, editQuiz } =
  quizzesSlice.actions;

export default quizzesSlice.reducer;
