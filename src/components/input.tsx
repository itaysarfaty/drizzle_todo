"use client";

import { useFormState } from "react-dom";
import { addItem } from "./input/action";
import { AddButton } from "./input/addButton";

const initialState = { error: null, formKey: 0 };
export const Input = () => {
  const [{ formKey, error }, action] = useFormState(addItem, initialState);

  return (
    <form action={action} key={formKey}>
      <div className="flex gap-3">
        <input
          type="text"
          name="description"
          placeholder="Add a todo..."
          className="flex-1 border text-sm border-gray-300 focus:border-gray-400 rounded-md py-2 px-2 focus:outline-none"
        />
        <AddButton />
      </div>
      {error && <p className="text-red-500 text-xs mt-2">{error}</p>}
    </form>
  );
};
