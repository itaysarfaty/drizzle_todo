import { TodoItem } from "./TodoItem";

export interface TodoListProps {}

export const TodoList = (props: TodoListProps) => {
  return (
    <ul>
      <TodoItem />
    </ul>
  );
};
