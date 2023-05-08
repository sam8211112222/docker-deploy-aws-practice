import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/蔡英文下台/i);
  expect(linkElement).toBeInTheDocument();
});
