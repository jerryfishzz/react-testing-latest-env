import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { FavoriteNumber } from "../favorite-number";
import userEvent from "@testing-library/user-event";

test("entering an invalid value shows an error message", () => {
  const { getByLabelText, getByRole, debug, rerender } = render(
    <FavoriteNumber />
  );
  const input = getByLabelText(/favorite number/i);
  // fireEvent.change(input, { target: { value: "10" } });
  userEvent.type(input, "10");
  debug();
  expect(getByRole("alert")).toHaveTextContent(/the number is invalid/i);
  rerender(<FavoriteNumber max={10} />);
  debug();
});