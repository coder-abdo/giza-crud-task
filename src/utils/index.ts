import { Book } from "@/types";
import { createAsyncThunk } from "@reduxjs/toolkit";


const retrieveBooks = createAsyncThunk('books/fetchBooks', async (_, { rejectWithValue }) => {
  try {
    const res = await fetch(`${import.meta.env.VITE_BASE_URL}/books`)
    const data = await res.json()
    return data;
  } catch (err) {
    if (err instanceof Error)
      return rejectWithValue(err.message)
  }
})
const addBook = createAsyncThunk('books/addBook', async (item: Book, { rejectWithValue }) => {
  try {
    const res = await fetch(`${import.meta.env.VITE_BASE_URL}/books`, {
      method: 'POST',
      body: JSON.stringify(item),
      headers: {
        'Content-Type': 'application/json; charset=UTF-8'
      }
    })
    const data = await res.json()
    return data;
  } catch (err) {
    if (err instanceof Error) {
      return rejectWithValue(err.message)
    }
  }
})

export { retrieveBooks, addBook }
