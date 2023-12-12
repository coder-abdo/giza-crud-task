import { Button } from "react-bootstrap";
import { useNavigate, useRouteError } from "react-router-dom";

export const ErrorPage = () => {
  const error = useRouteError();
  const navigate = useNavigate();
  const handleBack = () => {
    navigate('/', { replace: true })
  }
  return (
    <main className="py-5">
      <h2 className="fs-1 text-primary text-center text-capitalize my-4">Oops! you are lost</h2>
      {error instanceof Error && <p className="text-danger my-2">{error.message}</p>}
      <Button
        onClick={handleBack}
        variant="primary"
        size="lg">back to home</Button>
    </main>
  );
}
