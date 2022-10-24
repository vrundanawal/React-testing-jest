import { fireEvent, render, screen } from "@testing-library/react";
import App, { replaceCamelWithSpaces } from "./App";

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

/**************************Test 3******************************/
//Checkbox disable button on first click and enable on second click
test("Checkbox disable button on first click and enable on second click", () => {
  render(<App />);
  //finding the checkbox with label
  const checkbox = screen.getByRole("checkbox", { name: "Disable button" });
  const button = screen.getByRole("button", { name: "Change to blue" });

  fireEvent.click(checkbox);
  expect(button).toBeDisabled();

  fireEvent.click(checkbox);
  expect(button).toBeEnabled();
});

/**************************Test 4******************************/
//disabled button turns gray
test("Disabled button has gray background and revert to red", () => {
  render(<App />);
  const checkbox = screen.getByRole("checkbox", { name: "Disable button" });
  const colorButton = screen.getByRole("button", { name: "Change to blue" });

  //disable button
  fireEvent.click(checkbox);
  expect(colorButton).toHaveStyle("background-color: gray");

  //re-enable the button
  fireEvent.click(checkbox);
  expect(colorButton).toHaveStyle("background-color: red");
});

test("clicked disabled button has gray background and reverts to blue", () => {
  render(<App />);
  const checkbox = screen.getByRole("checkbox", { name: "Disable button" });
  const colorButton = screen.getByRole("button", { name: "Change to blue" });

  //change button to blue
  fireEvent.click(colorButton);

  //disable button
  fireEvent.click(checkbox);
  expect(colorButton).toHaveStyle("background-color: gray");

  //re-enable button
  fireEvent.click(checkbox);
  expect(colorButton).toHaveStyle("background-color: blue");
});

/**************************Test 5******************************/
describe("Spaces before camel-case capital letters", () => {
  test("Works for no inner capital letters", () => {
    expect(replaceCamelWithSpaces("Red")).toBe("Red");
  });

  test("Works for one inner capital letter", () => {
    expect(replaceCamelWithSpaces("MidnightBlue")).toBe("Midnight Blue");
  });

  test("Works for multiple inner capital letters", () => {
    expect(replaceCamelWithSpaces("MediumVioletRed")).toBe("Medium Violet Red");
  });
});
