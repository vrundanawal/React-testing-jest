import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";

test("button has correct initial color and updates when clicked", () => {
  render(<App />);
  //const linkElement = screen.getByText(/learn react/i);
  // const linkElement = screen.getByRole("link", { name: /Learn React/i });
  // expect(linkElement).toBeInTheDocument();
  //find an element with a role of button and text of 'Change to blue

  /*************************Test 1***************************** */
  const colorButton = screen.getByRole("button", { name: "Change to blue" });
  //expect the background color to be red
  expect(colorButton).toHaveStyle({ backgroundColor: "red" });

  fireEvent.click(colorButton);
  //expect the background color to be blue
  expect(colorButton).toHaveStyle({ backgroundColor: "blue" });
  //expect the button text to be 'Change to red'
  expect(colorButton).toHaveTextContent("Change to red");
});

/**************************Test 2***************************** */

//Test initial condition of button and checkbox
test("initial conditions", () => {
  render(<App />);

  //check the button starts out enabled
  const colorButton = screen.getByRole("button", { name: "Change to blue" });
  expect(colorButton).toBeEnabled();

  //check that the checkbox starts out unchecked
  const checkbox = screen.getByRole("checkbox");
  expect(checkbox).not.toBeChecked();
});

/**************************Test 3***************************** */
test("Checkbox disable button on first click and enable on second click", () => {
  render(<App />);
  const checkbox = screen.getByRole("checkbox");
  const button = screen.getByRole("button");

  fireEvent.click(checkbox);
  expect(button).toBeDisabled();

  fireEvent.click(checkbox);
  expect(button).toBeEnabled();
});
