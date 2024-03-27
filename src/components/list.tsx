import { db } from "@/db";
import { Item } from "./item";
import { todos } from "@/db/schema";
import { getErrorMessage } from "@/lib/utils";

const getTodos = async () => {
  "use server";
  try {
    return await db.select().from(todos);
  } catch (error) {
    const message = getErrorMessage(error);
    return { error: message };
  }
};

export const List = async () => {
  const todos = await getTodos();

  if ("error" in todos) {
    return <p className="text-red-500 text-sm">{todos.error}</p>;
  }

  return (
    <ul className="flex flex-col gap-3">
      {todos.map((todo) => (
        <Item key={todo.id} {...todo} />
      ))}
    </ul>
  );
};
