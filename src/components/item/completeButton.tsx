"use client";

import { Check, Loader2 } from "lucide-react";
import { deleteItem } from "./completeButton/actions";
import { useState } from "react";

export interface CompleteItemProps {
  id: number;
}

export const CompleteButton = ({ id }: CompleteItemProps) => {
  const [loading, setLoading] = useState(false);
  const handleComplete = async () => {
    setLoading(true);
    const res = await deleteItem(id);
    if ("error" in res) {
      console.error(res.error);
    }
    setLoading(false);
  };
  return (
    <button
      className=" p-3 h-full  hover:bg-gray-100 "
      onClick={handleComplete}
    >
      {loading ? (
        <Loader2 className="h-4 animate-spin" />
      ) : (
        <Check className="h-4 text-green-600" />
      )}
    </button>
  );
};
