import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Root } from '@/pages/root/index.tsx'
import { Add } from '@/pages/add/index.tsx'
import { Home } from '@/pages/home'
import { Details } from '@/pages/details'
import { Edit } from '@/pages/edit'
import { ErrorPage } from '@/pages/404'
import 'bootstrap/dist/css/bootstrap.min.css'
const router = createBrowserRouter([
  {
    path: '/', element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      { path: "books", element: <Home /> },
      { path: 'books/add', element: <Add /> },
      { path: 'books/:id', element: <Details /> },
      { path: 'books/:id/edit', element: <Edit /> },
    ],
  },
])
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
