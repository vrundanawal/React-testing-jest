import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";

test("button has correct initial color and updates when clicked", () => {
  render(<App />);
  //const linkElement = screen.getByText(/learn react/i);
  // const linkElement = screen.getByRole("link", { name: /Learn React/i });
  // expect(linkElement).toBeInTheDocument();
  //find an element with a role of button and text of 'Change to blue
  const colorButton = screen.getByRole("button", { name: "Change to blue" });
  //expect the background color to be red
  expect(colorButton).toHaveStyle({ backgroundColor: "red" });

  fireEvent.click(colorButton);
  //expect the background color to be blue
  expect(colorButton).toHaveStyle({ backgroundColor: "blue" });
  //expect the button text to be 'Change to red'
  expect(colorButton).toHaveTextContent("Change to red");
});
