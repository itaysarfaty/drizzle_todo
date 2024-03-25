export interface TodoInputProps {}

export const TodoInput = (props: TodoInputProps) => {
  return (
    <form className="flex gap-3">
      <input
        type="text"
        placeholder="Enter a todo..."
        className="flex-1 border border-gray-300 rounded-md py-1 px-2 text-base focus:outline-gray-300"
      />
      <button className="py-1 px-2 rounded-md bg-gray-900 text-white">
        Add
      </button>
    </form>
  );
};
