import { Todo } from "@/db/schema";
import { Complete } from "./item/complete";

export const Item = ({ description, id }: Todo) => {
  return (
    <li className="flex  justify-between items-center relative rounded-md overflow-hidden bg-gray-50">
      <p className="text-sm truncate px-3 py-3 ">{description}</p>
      <Complete id={id} />
    </li>
  );
};
