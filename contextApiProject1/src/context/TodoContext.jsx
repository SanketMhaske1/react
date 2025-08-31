import React, { useContext } from "react";

export const TodoContext = React.createContext({
  todos: [{ id: 1, todo: "Todo msg", completed: false }],
  addTodo: (todo) => {},
  updatedTodo: (todo, id) => {},
  deleteTodo: (id) => {},
  toggleComplete: (id) => {},
});

export const TodoContextProvider = TodoContext.Provider;

export const useTodo = () => {
  return useContext(TodoContext);
};
