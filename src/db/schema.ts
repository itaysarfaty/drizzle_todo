import { sql } from "drizzle-orm";
import { text, integer, sqliteTable } from "drizzle-orm/sqlite-core";
export const todos = sqliteTable("todos", {
  id: integer("id", { mode: "number" }).primaryKey({ autoIncrement: true }),
  description: text("description").notNull(),
  createdAt: text("created_at")
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
});

export interface Todo {
  id: number;
  description: string;
  createdAt: string;
}
