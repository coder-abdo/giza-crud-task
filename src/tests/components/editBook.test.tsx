import { describe, it, expect, vi } from "vitest";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import {
  render,
  renderHook,
  screen,
  userEvent,
  waitFor,
} from "@/utils/test.utils";
import { store } from "@/store";
import { EditBookForm } from "@/components/form/editBook";
import { Book } from "@/types";
import { useBookDetails } from "@/hooks/useBookDetails";

describe("edit book component", async () => {
  // render the component properly
  const book: Book = {
    id: "1",
    image: "image.png",
    title: "book title",
    author: "book author",
    description: "book description",
  };

  afterEach(() => {
    vi.restoreAllMocks();
  });
  it("render edit book component", async () => {
    const { result } = renderHook(() => useBookDetails(), {
      wrapper: ({ children }) => <Provider store={store}>{children}</Provider>,
    });
    const mockStore = vi.spyOn(store, "getState");
    const mockDispatch = vi.spyOn(store, "dispatch");
    const mockSubscribe = vi.spyOn(store, "subscribe");
    mockStore.mockReturnValue({
      books: {
        books: [book],
        book,
        isLoading: false,
        error: "",
      },
    });
    const user = userEvent.setup();
    render(
      <Provider
        store={{
          dispatch: mockDispatch,
          getState: mockStore,
          subscribe: mockSubscribe,
        }}
      >
        <MemoryRouter>
          <EditBookForm />
        </MemoryRouter>
      </Provider>,
    );
    const submitBtn = screen.getByTestId("edit-submit-btn");
    const handleSubmit = vi.spyOn(user, "click");
    expect(screen.getByTestId("edit-form")).toBeInTheDocument();
    expect(submitBtn).toBeInTheDocument();
    //console.log(screen.getByTestId("edit-form"));
    expect(screen.getByTestId("edit-form-title-label")).toBeInTheDocument();
    expect(screen.getByTestId("edit-form-title-label")).toHaveTextContent(
      /book title/i,
    );

    expect(screen.getByTestId("edit-form-title-input")).toBeInTheDocument();
    expect(screen.getByTestId("edit-form-title-input")).toHaveValue(
      "book title",
    );
    expect(screen.getByTestId("edit-form-author-label")).toBeInTheDocument();
    expect(screen.getByTestId("edit-form-author-label")).toHaveTextContent(
      /book author/i,
    );

    expect(screen.getByTestId("edit-form-author-input")).toBeInTheDocument();
    expect(screen.getByTestId("edit-form-author-input")).toHaveValue(
      "book author",
    );
    expect(screen.getByTestId("edit-form-desc-label")).toBeInTheDocument();
    expect(screen.getByTestId("edit-form-desc-label")).toHaveTextContent(
      /book description/i,
    );

    expect(screen.getByTestId("edit-form-desc-input")).toBeInTheDocument();
    expect(screen.getByTestId("edit-form-desc-input")).toHaveTextContent(
      /book description/i,
    );
    await waitFor(() => user.click(submitBtn));
    expect(handleSubmit).toHaveBeenCalledTimes(1);
  });
});
