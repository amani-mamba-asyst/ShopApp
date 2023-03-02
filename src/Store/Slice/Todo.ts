import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface TodoState {
  count: number;
  todos: any[];
}
const initialState: TodoState = {
  count: 0,
  todos: []
};

export const todoSlice = createSlice({
  name: "TODO",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: Math.random() * 100,
        text: action.payload
      };
      state.todos.push(todo);
      state.count += 1;
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
      state.count -= 1;
    }
  }
});

export const { addTodo, removeTodo } = todoSlice.actions;

export default todoSlice.reducer;
