import { Navigation } from "@/components/navbar/Navigation"
import { Container } from "react-bootstrap"
import { Outlet } from "react-router-dom"


export const Root = () => {
  return (
    <>
      <Navigation />
      <Container>
        <Outlet />
      </Container>
    </>
  )
}
