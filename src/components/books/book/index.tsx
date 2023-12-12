import type { FC } from 'react'
import { Button, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import type { Book as BookType } from '@/types'

type Props = {
  book: BookType
}

export const Book: FC<Props> = ({ book }) => {
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
        justifyContent: 'space-between'
      }}>
        <Button variant='secondary' role='link' aria-label='edit book'>
          <Link to={`/books/${book.id}/edit`} style={{
            textDecoration: 'none',
            color: 'white'
          }}>
            Edit
          </Link>
        </Button>
        <Button variant='danger'>Delete</Button>
      </Card.Footer>
    </Card>
  )
}
