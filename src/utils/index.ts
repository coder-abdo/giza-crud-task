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

export { retrieveBooks }
