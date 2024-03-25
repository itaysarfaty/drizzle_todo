import { TodoInput } from "@/components/TodoInput";
import { TodoList } from "@/components/TodoList";

export default function Home() {
  return (
    <main>
      <section>
        <h1>Things I should do</h1>
        <h2>And definitely not forget about</h2>
        <TodoInput />
        <TodoList />
      </section>
    </main>
  );
}
