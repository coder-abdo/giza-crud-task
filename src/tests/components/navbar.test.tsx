import { describe, it, expect } from "vitest";
import { render, screen, userEvent } from "@/utils/test.utils";
import { Provider } from "react-redux";
import { store } from "@/store";
import { MemoryRouter } from "react-router-dom";
import { Navigation } from "@/components/navbar/Navigation";

describe("Navbar component", () => {
  // it should render the navbar
  it("should render the navbar", () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <Navigation />
        </MemoryRouter>
      </Provider>,
    );
    expect(screen.getByTestId("navbar")).toBeInTheDocument();
    expect(screen.getByTestId("home-link")).toBeInTheDocument();
    expect(screen.getByTestId("home-link").getAttribute("href")).toBe("/");
    expect(screen.getByTestId("add-link")).toBeInTheDocument();
    expect(screen.getByTestId("add-link").getAttribute("href")).toBe(
      "/books/add",
    );
  });
  // it should handle the navigation links
  it("should handle the navigation links properly", async () => {
    const user = userEvent.setup();

    render(
      <Provider store={store}>
        <MemoryRouter>
          <Navigation />
        </MemoryRouter>
      </Provider>,
    );
    const homeBtn = screen.getByTestId("home-link");
    const handleHomeBtnClick = vi.spyOn(user, "click");
    await user.click(homeBtn);
    const addToBooksBtn = screen.getByTestId("add-link");
    const handleAddToBooksBtnClick = vi.spyOn(user, "click");

    expect(handleHomeBtnClick).toHaveBeenCalledTimes(1);
    expect(homeBtn.getAttribute("class")?.includes("active")).toBeTruthy();
    await user.click(addToBooksBtn);

    expect(handleAddToBooksBtnClick).toHaveBeenCalledTimes(1);
    expect(
      addToBooksBtn.getAttribute("class")?.includes("active"),
    ).toBeTruthy();
  });
});
