import { useAppDispatch } from "@/hooks/redux.hooks"
import { useBookDetails } from "@/hooks/useBookDetails"
import { deleteBook } from "@/utils"
import { Button, Spinner } from "react-bootstrap"
import { useNavigate } from "react-router-dom"

export const Details = () => {
  const { book, error, isLoading } = useBookDetails()
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const handleBack = () => {
    navigate('/')
  }
  const handleEdit = () => {
    navigate(`/books/${book!.id}/edit`)
  }
  const handleDelete = () => {
    dispatch(deleteBook(book.id)).unwrap().then(() => {
      navigate('/')
    })
  }
  return (
    <main className="py-5">
      {isLoading && <Spinner />}
      {error && <p className="text-danger my-2">{error}</p>}
      {book && (
        <>
          <img src={book.image} alt={book.title} className="img-fluid w-100" style={{ maxHeight: '25rem' }} />
          <h2 className="text-center my-3 fs-1 text-primary">{book.title}</h2>
          <h3 className="text-center my-3 fs-2 text-secondary">{book.author}</h3>
          <p className="text-center my-3 fs-3 text-secondary">{book.description}</p>
          <div className="d-flex gap-2 justify-content-center">
            <Button
              onClick={handleBack}
              variant="primary"
              role="link"
              aria-label="go back">back to books</Button>
            <Button variant="secondary"
              onClick={handleEdit}
              role="link"
              aria-label="edit book">Edit</Button>
            <Button variant="danger" onClick={handleDelete} role="button" aria-label="delete book">Delete</Button>
          </div>

        </>
      )}
    </main>
  )
}
