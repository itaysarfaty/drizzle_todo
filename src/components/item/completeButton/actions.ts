"use server";

import { db } from "@/db";
import { todos } from "@/db/schema";
import { delay, getErrorMessage } from "@/lib/utils";
import { eq } from "drizzle-orm";

export async function deleteItem(id: number) {
  try {
    await delay();
    await db.delete(todos).where(eq(todos.id, id)).returning();
    return { error: null };
  } catch (error) {
    const message = getErrorMessage(error);
    return { error: message };
  }
}
