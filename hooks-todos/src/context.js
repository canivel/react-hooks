import React from "react";

const TodosContext = React.createContext({
  todos: [
    { id: 1, text: "Eat Lunch", complete: false },
    { id: 2, text: "Laundry", complete: false },
    { id: 3, text: "Market", complete: true }
  ],
  currentTodo: {}
});

export default TodosContext;
