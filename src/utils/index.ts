import { Book } from "@/types";
import { createAsyncThunk } from "@reduxjs/toolkit";

// get all books
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
// get book by id
const getBook = createAsyncThunk('books/getBook', async (id: string, { rejectWithValue }) => {
  try {
    const res = await fetch(`${import.meta.env.VITE_BASE_URL}/books/${id}`)
    const data = await res.json()
    return data;
  } catch (err) {
    if (err instanceof Error)
      return rejectWithValue(err.message)
  }
})
// add book
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
// updagte Book
const updateBook = createAsyncThunk('books/updateBook', async (item: Book, { rejectWithValue }) => {
  const { id } = item
  try {
    const res = await fetch(`${import.meta.env.VITE_BASE_URL}/books/${id}`, {
      method: 'PUT',
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
// delete book
const deleteBook = createAsyncThunk('books/deleteBook', async (id: string, { rejectWithValue }) => {
  try {
    const res = await fetch(`${import.meta.env.VITE_BASE_URL}/books/${id}`, {
      method: 'DELETE',
    })
    const data = await res.json()
    return data
  } catch (err) {
    if (err instanceof Error) {
      return rejectWithValue(err.message)
    }
  }
})
export { retrieveBooks, addBook, updateBook, getBook, deleteBook }
