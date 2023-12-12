import { store } from '@/store'
interface Book {
  id: string;
  title: string;
  description: string;
  image: string;
  author: string;
}
type BooksState = {
  books: Book[];
  book: Book | null;
  isLoading: boolean;
  error: string;
}
type RootState = ReturnType<typeof store.getState>
type AppDispatch = typeof store.dispatch

export type { Book, RootState, AppDispatch, BooksState }
