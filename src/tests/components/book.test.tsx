import { describe, it, expect } from "vitest";
import { render, screen, userEvent } from "@/utils/test.utils";
import { Provider } from "react-redux";
import { store } from "@/store";
import { MemoryRouter } from "react-router-dom";
import { Book } from "@/components/books/book";
import { Book as BookType } from "@/types";

describe("book component", () => {
  beforeEach(() => {
    vi.restoreAllMocks();
  });
  const book: BookType = {
    id: "1",
    image: "image.png",
    title: "book title",
    description: "book description",
    author: "book author",
  };
  // render the all component
  it("should render the component well", () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <Book book={book} />
        </MemoryRouter>
      </Provider>,
    );
    expect(screen.getByTestId("book-container")).toBeInTheDocument();
    expect(screen.getByTestId("book-image")).toBeInTheDocument();
    expect(screen.getByTestId("book-image").getAttribute("src")).toBe(
      "image.png",
    );
    expect(screen.getByTestId("book-image").getAttribute("alt")).toBe(
      "book title",
    );
    expect(screen.getByTestId("book-title")).toBeInTheDocument();
    expect(screen.getByTestId("book-title").textContent).toBe("book title");
    expect(screen.getByTestId("book-author")).toBeInTheDocument();
    expect(screen.getByTestId("book-author").textContent).toBe("book author");
    expect(screen.getByTestId("book-description")).toBeInTheDocument();
    expect(screen.getByTestId("book-description").textContent).toBe(
      "book description",
    );
    expect(screen.getByTestId("book-edit-btn")).toBeInTheDocument();
    expect(screen.getByTestId("book-edit-btn").textContent).toBe("Edit");
    expect(screen.getByTestId("book-details-btn")).toBeInTheDocument();
    expect(screen.getByTestId("book-details-btn").textContent).toBe("Details");
    expect(screen.getByTestId("book-delete-btn")).toBeInTheDocument();
    expect(screen.getByTestId("book-delete-btn").textContent).toBe("Delete");
  });
  // handle edit btn
  it("should called function hanlde edit function", async () => {
    const user = userEvent.setup();
    render(
      <Provider store={store}>
        <MemoryRouter>
          <Book book={book} />
        </MemoryRouter>
      </Provider>,
    );
    const btn = screen.getByTestId("book-edit-btn");
    const bookEdit = vi.spyOn(user, "click");
    await user.click(btn);
    expect(bookEdit).toHaveBeenCalledTimes(1);
  });
  // handle delete
  it("should called function hanlde delete function", async () => {
    const user = userEvent.setup();
    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={["/", "/books/1"]}>
          <Book book={book} />
        </MemoryRouter>
      </Provider>,
    );
    const deletebtn = screen.getByTestId("book-delete-btn");
    const bookDelete = vi
      .spyOn(user, "click")
      .mockImplementation(async () => {});
    await user.click(deletebtn);
    expect(bookDelete).toHaveBeenCalledTimes(1);
  });
  // handle go to details btn
  it("should called function hanlde details function", async () => {
    const user = userEvent.setup();
    render(
      <Provider store={store}>
        <MemoryRouter>
          <Book book={book} />
        </MemoryRouter>
      </Provider>,
    );
    const btn = screen.getByTestId("book-details-btn");
    const bookDetails = vi.spyOn(user, "click");
    await user.click(btn);
    expect(bookDetails).toHaveBeenCalledTimes(1);
  });
});
