import { Navigation } from "@/components/navbar"
import { Outlet } from "react-router-dom"


export const Root = () => {
  return (
    <>
      <Navigation />
      <Outlet />
    </>
  )
}
