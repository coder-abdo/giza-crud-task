import { Books } from "@/components/books"
import { Col, Row } from "react-bootstrap"

export const Home = () => {
  const books: Book[] = [
    {
      id: crypto.randomUUID(),
      title: 'The Fellowship of the Ring',
      description: 'The first of three volumes of the epic novel The Lord of the Rings by the English author J. R. R. Tolkien.',
      author: 'J. R. R. Tolkien',
      image: "https://picsum.photos/200/300"

    },
    {
      id: crypto.randomUUID(),
      title: 'The Two Towers',
      description: 'The second volume of the novel The Lord of the Rings by J. R. R. Tolkien.',
      author: 'J. R. R. Tolkien',
      image: "https://picsum.photos/200/300"
    },
    {
      id: crypto.randomUUID(),
      title: 'The Return of the King',
      description: 'The third and final volume of J. R. R. Tolkien\'s The Lord of the Rings, following The Fellowship of the Ring and The Two Towers.',
      author: 'J. R. R. Tolkien',
      image: "https://picsum.photos/200/300"
    },
    {
      id: crypto.randomUUID(),
      title: 'The Hobbit',
      description: 'The Hobbit, or There and Back Again is a children\'s fantasy novel by English author J. R. R. Tolkien.',
      author: 'J. R. R. Tolkien',
      image: "https://picsum.photos/200/300"
    },
    {
      id: crypto.randomUUID(),
      title: 'The Silmarillion',
      description: 'The Silmarillion is a collection of mythopoeic works by English writer J. R. R. Tolkien, edited and published posthumously by his son, Christopher Tolkien, in 1977, with assistance from Guy Gavriel Kay.',
      author: 'J. R. R. Tolkien',
      image: "https://picsum.photos/200/300"
    },
    {
      id: crypto.randomUUID(),
      title: 'The Children of Húrin',
      description: 'The Children of Húrin is an epic fantasy novel which forms the completion of a tale by J. R. R. Tolkien. He wrote the original version of the story in the late 1910s, revised it several times later, but did not complete it before his death in 1973.',
      author: 'J. R. R. Tolkien',
      image: "https://picsum.photos/200/300"
    }
  ]
  return (
    <main>
      <h1 className="my-5 text-primary">List of Books:</h1>
      <Books books={books} />
    </main>
  )
}
