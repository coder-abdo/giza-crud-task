
import { useAppDispatch } from "@/hooks/redux.hooks"
import { addBook } from "@/utils"
import { bookSchema } from "@/utils/book.schema"
import { Field, Formik, Form as FormkikForm } from "formik"
import { Button, Form } from "react-bootstrap"

export const AddBook = () => {
  const dispatch = useAppDispatch()

  return (
    <Formik initialValues={{
      title: '',
      author: '',
      description: '',
    }}
      validationSchema={bookSchema}
      onSubmit={values => {
        const book = { ...values, id: crypto.randomUUID(), image: 'https://picsum.photos/200/300' }
        dispatch(addBook(book))
      }}

    >
      {({ errors }) => <Form as={FormkikForm} className="min-w-50 p-4">
        <Form.Group className="mb-3" controlId="bookTitle">
          <Form.Label>Book Title</Form.Label>
          <Form.Control as={Field} name="title" type="text" placeholder="Enter book title" />
          {errors.title && <p className="text-danger my-2">{errors.title}</p>}
        </Form.Group>
        <Form.Group className="mb-3" controlId="bookAuthor">
          <Form.Label>Book Author</Form.Label>
          <Form.Control as={Field} name="author" type="text" placeholder="Enter book author" />
          {errors.author && <p className="text-danger my-2">{errors.author}</p>}
        </Form.Group>
        <Form.Group className="mb-3" controlId="bookDescription">
          <Form.Label className="d-block">Book Description</Form.Label>
          <Field as="textarea" className="w-100" name="description" placeholder="Enter book description" style={{ height: '100px' }} />
          {errors.description && <p className="text-danger my-2">{errors.description}</p>}
        </Form.Group>
        <Button
          variant="primary"
          size="lg"
          type="submit">
          Submit
        </Button>
      </Form>
      }
    </Formik>
  )
}
