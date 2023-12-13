import { useCallback, type FC } from 'react'
import { Button, Card } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import type { Book as BookType } from '@/types'
import { useAppDispatch } from '@/hooks/redux.hooks'
import { deleteBook, retrieveBooks } from '@/utils'

type Props = {
  book: BookType
}

export const Book: FC<Props> = ({ book }) => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const handleDelete = useCallback(() => {
    dispatch(deleteBook(book.id)).unwrap().then(() => {
      dispatch(retrieveBooks())
    })
  }, [book.id, dispatch])

  const handleBookDetails = () => {
    navigate(`/books/${book.id}`)
  }
  const handleEditBook = () => {
    navigate(`/books/${book.id}/edit`)
  }
  return (
    <Card style={{ maxWidth: '20rem' }}>
      <Card.Img variant="top" style={{
        height: '15rem',
      }} alt={book.title} src={book.image} />
      <Card.Body>
        <Card.Title
          style={{
            marginBottom: '0.5rem'
          }}>{book.title}</Card.Title>
        <Card.Subtitle style={{ marginBottom: '0.5rem' }}>{book.author}</Card.Subtitle>
        <Card.Text>{book.description}</Card.Text>
      </Card.Body>
      <Card.Footer style={{
        display: 'flex',
        justifyContent: 'space-between',
        gap: '0.5rem'
      }}>
        <Button
          onClick={handleEditBook}
          variant='secondary' role='link' aria-label='edit book'>
          Edit
        </Button>
        <Button
          onClick={handleBookDetails}
          variant='info' role='link' aria-label='book details'>
          Details
        </Button>
        <Button variant='danger' onClick={handleDelete}>Delete</Button>
      </Card.Footer>
    </Card >
  )
}
