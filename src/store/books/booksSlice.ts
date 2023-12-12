import { BooksState } from "@/types";
import { addBook, retrieveBooks } from "@/utils";
import { createSlice } from "@reduxjs/toolkit";



const initialState: BooksState = {
  books: [],
  isLoading: false,
  error: "",
}

const booksSlice = createSlice({
  name: "books",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(retrieveBooks.pending, (state) => {
      state.isLoading = true;
    }).addCase(retrieveBooks.fulfilled, (state, action) => {
      state.isLoading = false;
      state.books = action.payload;
      state.error = "";
    }).addCase(retrieveBooks.rejected, (state, action) => {
      state.isLoading = false;
      state.books = [];
      state.error = action.error.message || "";
    })
    builder.addCase(addBook.pending, (state) => {
      state.isLoading = true;
    }).addCase(addBook.fulfilled, (state, action) => {
      state.isLoading = false;
      state.books.push(action.payload);
    }).addCase(addBook.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message || "";
    })
  }
})
export default booksSlice.reducer;
