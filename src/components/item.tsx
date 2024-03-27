import { Todo } from "@/db/schema";
import { CompleteButton } from "./item/completeButton";

export const Item = ({ description, id }: Todo) => {
  return (
    <li className="flex  justify-between items-center relative rounded-md overflow-hidden bg-gray-50">
      <p className="text-sm truncate px-3 py-3 ">{description}</p>
      <CompleteButton id={id} />
    </li>
  );
};
