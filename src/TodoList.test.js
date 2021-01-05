import React from "react";
import { fireEvent, render, within } from "@testing-library/react";
import TodoList from "./TodoList";

const createTodo = (todoList) => {
    // simulates a user putting in a new task in the form
    const input = todoList.getByLabelText("New Todo:");
    fireEvent.change(input, {target: {value: "Here is a new task"}})

    // submits the new task
    const submitBtn = todoList.getByText("Add Task");
    fireEvent.click(submitBtn);
}

it("renders without crashing", function() {
  render(<TodoList />);
});

it("matches snapshot", function() {
  const { asFragment } = render(<TodoList/>);
  expect(asFragment()).toMatchSnapshot();
});

it("adds task to todo list when submitted", () => {
    const todoList = render(<TodoList />);

    // calls function to create todo item
    createTodo(todoList);

    // checks to see if the new task has been added to the document
    const item = todoList.getByRole("listitem");
    expect(item).toBeInTheDocument();
});

it("deletes task when trash can is clicked", () => {
    const todoList = render(<TodoList />);

    // calls function to create todo item
    createTodo(todoList);

    // click trash can delete button
    const item = todoList.getByRole("listitem");
    const { getByRole } = within(item);
    const itemBtn = getByRole("button");
    fireEvent.click(itemBtn);

    // confirm the todo item is no longer in the document
    expect(item).not.toBeInTheDocument();
});

it("toggles strike in todo text when clicked", () => {
    const todoList = render(<TodoList />);

    // calls function to create todo item and identifies item
    createTodo(todoList);
    const newTodo = todoList.getByText("Here is a new task");

    // ensures task is not identified as completed
    expect(newTodo).toHaveClass('incompleteTask');

    // check that task is marked as complete
    fireEvent.click(newTodo);
    expect(newTodo).toHaveClass('completedTask');

    // check that task is marked as incomplete
    fireEvent.click(newTodo);
    expect(newTodo).toHaveClass('incompleteTask');
});