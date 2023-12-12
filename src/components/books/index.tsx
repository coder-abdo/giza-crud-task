
import { Book as BookType } from '@/types'
import { FC } from 'react'
import { Col, Row } from 'react-bootstrap'
import { Book } from '@/components/books/book'
type Props = {
  books: BookType[]
}
export const Books: FC<Props> = ({ books }) => {
  return (
    <Row className='g-4' xs={1} md={2}>
      {books.map((book) => (
        <Col key={book.id} sm={6} md={4}>
          <Book book={book} />
        </Col>
      ))
      }
    </Row>
  )
}
