import React from "react";
import { render } from "@testing-library/react";
import { screen } from '@testing-library/dom';
import { fireEvent } from"@testing-library/user-event";
import NewTodoForm from "./NewTodoForm";

it("renders without crashing", function() {
  render(<NewTodoForm />);
});

it("matches snapshot", function() {
  const { asFragment } = render(<NewTodoForm />);
  expect(asFragment()).toMatchSnapshot();
});