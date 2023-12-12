import { AddBook } from "@/components/form/addBook"
import { Button, Form, Image } from "react-bootstrap"

export const Edit = () => {
  return (
    <main className="d-flex flex-column align-items-center">
      <h2 className="text-info fs-1 fw-bold">Edit Book:</h2>
      <Image src="https://picsum.photos/700/400" />
      <AddBook />
    </main>
  )
}
