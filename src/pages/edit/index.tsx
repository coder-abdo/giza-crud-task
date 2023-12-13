import { EditBookForm } from "@/components/form/editBook"
import { useBookDetails } from "@/hooks/useBookDetails"
import { Button, Image } from "react-bootstrap"
import { useNavigate } from "react-router-dom"

export const Edit = () => {
  const { book } = useBookDetails()
  const navigate = useNavigate()
  const handleBack = () => {
    navigate('/', { replace: true })
  }

  return (
    <main className="d-flex flex-column align-items-center py-5">
      <h2 className="text-info fs-1 fw-bold">Edit Book:</h2>
      {book &&
        <>
          <Image src={book?.image} alt={book?.title} className="img-fluid w-100" style={{ maxHeight: '25rem' }} />
          <EditBookForm />
          <Button
            variant="primary"
            size="lg"
            onClick={handleBack}
            style={{ alignSelf: 'flex-start' }}
          >Back to Home</Button>
        </>
      }
    </main>
  )
}
