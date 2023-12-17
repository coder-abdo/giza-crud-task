import { describe, it, expect } from "vitest";
import { fireEvent, render, screen, userEvent } from "@/utils/test.utils";
import { Provider } from "react-redux";
import { store } from "@/store";
import { MemoryRouter } from "react-router-dom";
import { AddBook } from "@/components/form/addBook";
import { act } from "react-dom/test-utils";

describe("Add Book Component", () => {
  // render the add book component well
  it("should render the add book component properly", () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <AddBook />
        </MemoryRouter>
      </Provider>,
    );
    expect(screen.getByTestId("form")).toBeInTheDocument();
    expect(screen.getByTestId("title-label")).toBeInTheDocument();
    expect(screen.getByTestId("title-input")).toBeInTheDocument();
    expect(screen.getByTestId("author-label")).toBeInTheDocument();
    expect(screen.getByTestId("author-input")).toBeInTheDocument();
    expect(screen.getByTestId("description-label")).toBeInTheDocument();
    expect(screen.getByTestId("description-input")).toBeInTheDocument();
  });
  // handle the submit function
  it("should handle the inputs and submit form handler", async () => {
    const user = userEvent.setup();
    render(
      <Provider store={store}>
        <MemoryRouter>
          <AddBook />
        </MemoryRouter>
      </Provider>,
    );
    // title change test
    const titleInput = screen.getByTestId("title-input");
    const handleTitleChange = vi.spyOn(user, "type");
    await user.type(titleInput, "book title");
    expect(handleTitleChange).toHaveBeenCalledTimes(1);
    expect(titleInput.getAttribute("value")).toBe("book title");
    // author change test
    const authorInput = screen.getByTestId("author-input");
    const handleAuthorChange = vi.spyOn(user, "type");
    await user.type(authorInput, "book author");
    expect(handleAuthorChange).toHaveBeenCalledTimes(1);
    expect(authorInput.getAttribute("value")).toBe("book author");
    // description change test
    const descriptionInput = screen.getByTestId("description-input");
    const handleDescriptionChange = vi.spyOn(user, "type");
    await user.type(descriptionInput, "book description");
    expect(handleDescriptionChange).toHaveBeenCalledTimes(1);
    expect(descriptionInput.textContent).toBe("book description");
    // submit button
    const submitBtn = screen.getByTestId("submit-btn");
    const handleSubmit = vi.spyOn(user, "click");
    await user.click(submitBtn);
    expect(handleSubmit).toHaveBeenCalledTimes(1);
  });
  // show errors
  it("should show the errors", async () => {
    const user = userEvent.setup();
    render(
      <Provider store={store}>
        <MemoryRouter>
          <AddBook />
        </MemoryRouter>
      </Provider>,
    );
    // title change err
    const titleInput = screen.getByTestId("title-input");
    // author change test
    const authorInput = screen.getByTestId("author-input");
    // description change test
    const descriptionInput = screen.getByTestId("description-input");
    act(() => {
      fireEvent.change(titleInput, { target: { value: "" } });
      fireEvent.change(authorInput, { target: { value: "" } });
      fireEvent.change(descriptionInput, { target: { value: "" } });
    });
    // submit button
    const submitBtn = screen.getByTestId("submit-btn");
    const handleSubmit = vi.spyOn(user, "click");
    await user.click(submitBtn);
    expect(handleSubmit).toHaveBeenCalledTimes(1);
    expect(screen.getByTestId("description-err")).toBeInTheDocument();
    expect(screen.getByTestId("author-err")).toBeInTheDocument();
    expect(screen.getByTestId("title-err")).toBeInTheDocument();
  });
});
