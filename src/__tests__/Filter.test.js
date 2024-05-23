import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import ItemForm from "../components/ItemForm";

test("adds a new item to the list when the form is submitted", () => {
  const handleItemFormSubmit = jest.fn();
  render(<ItemForm onItemFormSubmit={handleItemFormSubmit} />);

  const nameInput = screen.getByLabelText(/Name/);
  const categorySelect = screen.getByLabelText(/Category/);
  const submitButton = screen.getByText(/Add to List/);

  fireEvent.change(nameInput, { target: { value: "Ice Cream" } });
  fireEvent.change(categorySelect, { target: { value: "Dessert" } });
  fireEvent.click(submitButton);

  expect(handleItemFormSubmit).toHaveBeenCalledWith({
    id: expect.any(String),
    name: "Ice Cream",
    category: "Dessert",
  });
});
