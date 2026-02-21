import { render } from "@testing-library/react";
import App from "./App";

describe("App smoke", () => {
  it("renders shell without crashing", () => {
    window.location.hash = "#/home";
    const { container } = render(<App />);

    expect(container.querySelector(".shell")).toBeInTheDocument();
    expect(container.querySelector(".shellNav")).toBeInTheDocument();
  });
});
