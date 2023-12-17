import { useAppDispatch } from "@/hooks/redux.hooks";
import { useBookDetails } from "@/hooks/useBookDetails";
import { updateBook } from "@/utils";
import { bookSchema } from "@/utils/book.schema";
import { Field, Formik, Form as FormkikForm } from "formik";
import { useState } from "react";
import { Button, Form, Spinner } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export const EditBookForm = () => {
  const dispatch = useAppDispatch();
  const { book, isLoading, error } = useBookDetails();
  const navigate = useNavigate();
  const [err, setErr] = useState("");
  if (isLoading) return <Spinner data-testid="spinner" />;
  if (error) return <p className="text-danger my-2">{error}</p>;
  return (
    <Formik
      initialValues={{
        title: book!.title,
        author: book!.author,
        description: book!.description,
      }}
      validationSchema={bookSchema}
      onSubmit={(values) => {
        const updatedBook = {
          ...values,
          id: book!.id,
          image: "https://picsum.photos/200/300",
        };
        dispatch(updateBook(updatedBook))
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
        <Form
          data-testid="edit-form"
          as={FormkikForm}
          className="min-w-50 w-100 p-4"
        >
          <Form.Group className="mb-3" controlId="bookTitle">
            <Form.Label data-testid="edit-form-title-label">
              Book Title
            </Form.Label>
            <Form.Control
              data-testid="edit-form-title-input"
              as={Field}
              name="title"
              type="text"
              placeholder="Enter book title"
            />
            {errors.title && (
              <p className="text-danger my-2" data-testid="edit-form-title-err">
                {errors.title}
              </p>
            )}
          </Form.Group>
          <Form.Group className="mb-3" controlId="bookAuthor">
            <Form.Label data-testid="edit-form-author-label">
              Book Author
            </Form.Label>
            <Form.Control
              data-testid="edit-form-author-input"
              as={Field}
              name="author"
              type="text"
              placeholder="Enter book author"
            />
            {errors.author && (
              <p
                data-testid="edit-form-author-err"
                className="text-danger my-2"
              >
                {errors.author}
              </p>
            )}
          </Form.Group>
          <Form.Group className="mb-3" controlId="bookDescription">
            <Form.Label className="d-block" data-testid="edit-form-desc-label">
              Book Description
            </Form.Label>
            <Field
              data-testid="edit-form-desc-input"
              as="textarea"
              className="w-100"
              name="description"
              placeholder="Enter book description"
              style={{ height: "100px" }}
            />
            {errors.description && (
              <p data-testid="edit-form-desc-err" className="text-danger my-2">
                {errors.description}
              </p>
            )}
          </Form.Group>
          <Button
            data-testid="edit-submit-btn"
            variant="primary"
            size="lg"
            type="submit"
          >
            Submit
          </Button>
          {err && (
            <p data-testid="edit-form-err" className="text-danger my-2">
              {err}
            </p>
          )}
        </Form>
      )}
    </Formik>
  );
};
