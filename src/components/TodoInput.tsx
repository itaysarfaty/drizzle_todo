export interface TodoInputProps {}

export const TodoInput = (props: TodoInputProps) => {
  return (
    <div>
      <input type="text" />
      <button>Add</button>
    </div>
  );
};
