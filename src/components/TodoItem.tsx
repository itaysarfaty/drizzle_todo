export interface TodoItemProps {}

export const TodoItem = (props: TodoItemProps) => {
  return (
    <li>
      <p>Description</p>
      <div>
        <button>Delete</button>
        <button>Complete</button>
      </div>
    </li>
  );
};
