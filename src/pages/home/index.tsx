import { Books } from "@/components/books"
import { useAppDispatch, useAppSelector } from "@/hooks/redux.hooks"
import { retrieveBooks } from "@/utils"
import { useEffect } from "react"
import { Spinner } from "react-bootstrap"

export const Home = () => {
  const dispatch = useAppDispatch()
  const { books, isLoading, error } = useAppSelector(state => state.books)

  useEffect(() => {
    dispatch(retrieveBooks())
  }, [dispatch])

  return (
    <main>
      <h1 className="my-5 text-primary">List of Books:</h1>
      {isLoading && <Spinner />}
      {error && <p className="text-danger">{error}</p>}
      {books.length > 0 && <Books books={books} />}
    </main>
  )
}
