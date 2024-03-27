"use client";
import { Loader2 } from "lucide-react";
import { useFormStatus } from "react-dom";

export const AddButton = () => {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="py-1 w-16 grid place-items-center text-sm rounded-md bg-gray-900 text-white"
    >
      {pending ? (
        <Loader2 className="h-4 w-4 animate-spin text-white" />
      ) : (
        "Add"
      )}
    </button>
  );
};
