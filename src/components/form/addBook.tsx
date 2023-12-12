
import { Button, Form, Image } from "react-bootstrap"
export const AddBook = () => {
  return (
    <Form className="w-50 p-4">
      <Form.Group className="mb-3" controlId="bookTitle">
        <Form.Label>Book Title</Form.Label>
        <Form.Control type="text" placeholder="Enter book title" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="bookAuthor">
        <Form.Label>Book Author</Form.Label>
        <Form.Control type="text" placeholder="Enter book author" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="bookDescription">
        <Form.Label>Book Description</Form.Label>
        <Form.Control as="textarea" placeholder="Enter book description" style={{ height: '100px' }} />
      </Form.Group>
      <Button
        variant="primary"
        size="lg"
        type="submit">
        Submit
      </Button>
    </Form>
  )
}
