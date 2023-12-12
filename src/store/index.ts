import { configureStore } from "@reduxjs/toolkit";
import booksReducer from "@/store/books/booksSlice";

export const store = configureStore({
  reducer: {
    books: booksReducer,
  }
})


