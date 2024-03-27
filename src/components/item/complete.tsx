"use client";

import { Check, Loader2 } from "lucide-react";
import { deleteItem } from "./complete/actions";
import { useState } from "react";
import { CompleteButton } from "./complete/button";
import { useFormState } from "react-dom";

export interface CompleteItemProps {
  id: number;
}

export const Complete = ({ id }: CompleteItemProps) => {
  const [formState, action] = useFormState(deleteItem, { id, error: null });
  return (
    <form action={action}>
      <CompleteButton />
    </form>
  );
};
