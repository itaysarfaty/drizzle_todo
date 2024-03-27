"use client";

import { Check, Loader2 } from "lucide-react";
import { useFormStatus } from "react-dom";

export const CompleteButton = () => {
  const { pending } = useFormStatus();
  return (
    <button className=" p-3 h-full  hover:bg-gray-100 " type="submit">
      {pending ? (
        <Loader2 className="h-4 animate-spin" />
      ) : (
        <Check className="h-4 text-green-600" />
      )}
    </button>
  );
};