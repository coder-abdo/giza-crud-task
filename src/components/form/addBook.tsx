import { useAppDispatch } from "@/hooks/redux.hooks";
import { addBook } from "@/utils";
import { bookSchema } from "@/utils/book.schema";
import { Field, Formik, Form as FormkikForm } from "formik";
import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export const AddBook = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [err, setErr] = useState("");
  return (
    <Formik
      initialValues={{
        title: "",
        author: "",
        description: "",
      }}
      validationSchema={bookSchema}
      onSubmit={(values) => {
        const book = {
          ...values,
          id: crypto.randomUUID(),
          image: "https://picsum.photos/200/300",
        };
        dispatch(addBook(book))
          .unwrap()
          .then(() => {
            navigate("/");
          })
          .catch((err) => {
            console.log(err);
            setErr(err.message);
          });
      }}
    >
      {({ errors }) => (
        <Form data-testid="form" as={FormkikForm} className="min-w-50 p-4">
          <Form.Group className="mb-3" controlId="bookTitle">
            <Form.Label data-testid="title-label">Book Title</Form.Label>
            <Form.Control
              data-testid="title-input"
              as={Field}
              name="title"
              type="text"
              placeholder="Enter book title"
            />
            {errors.title && (
              <p data-testid="title-err" className="text-danger my-2">
                {errors.title}
              </p>
            )}
          </Form.Group>
          <Form.Group className="mb-3" controlId="bookAuthor">
            <Form.Label data-testid="author-label">Book Author</Form.Label>
            <Form.Control
              data-testid="author-input"
              as={Field}
              name="author"
              type="text"
              placeholder="Enter book author"
            />
            {errors.author && (
              <p data-testid="author-err" className="text-danger my-2">
                {errors.author}
              </p>
            )}
          </Form.Group>
          <Form.Group className="mb-3" controlId="bookDescription">
            <Form.Label data-testid="description-label" className="d-block">
              Book Description
            </Form.Label>
            <Field
              data-testid="description-input"
              as="textarea"
              className="w-100"
              name="description"
              placeholder="Enter book description"
              style={{ height: "100px" }}
            />
            {errors.description && (
              <p data-testid="description-err" className="text-danger my-2">
                {errors.description}
              </p>
            )}
          </Form.Group>
          <Button
            variant="primary"
            data-testid="submit-btn"
            size="lg"
            type="submit"
          >
            Submit
          </Button>
          {err && (
            <p data-testid="err-server-msg" className="text-danger my-2">
              {err}
            </p>
          )}
        </Form>
      )}
    </Formik>
  );
};
