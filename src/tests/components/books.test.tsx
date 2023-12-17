import { describe, it, expect } from "vitest";
import { render, screen } from "@/utils/test.utils";
import { Provider } from "react-redux";
import { store } from "@/store";
import { MemoryRouter } from "react-router-dom";
import { Books } from "@/components/books";
import { Book as BookType } from "@/types";

describe("books component", () => {
  const books: BookType[] = [
    {
      id: "1",
      title: "book title",
      author: "book author",
      description: "book description",
      image: "book.png",
    },
    {
      id: "2",
      title: "book title",
      author: "book author",
      description: "book description",
      image: "book.png",
    },
  ];
  it("should render the componet well", () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <Books books={books} />
        </MemoryRouter>
      </Provider>,
    );
    expect(screen.getByTestId("books-container")).toBeInTheDocument();
    expect(screen.getByTestId("books-container").children.length).toBe(2);
  });
});
