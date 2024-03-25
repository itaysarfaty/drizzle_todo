import { TodoInput } from "@/components/TodoInput";
import { TodoList } from "@/components/TodoList";

export default function Home() {
  return (
    <div className="w-screen h-screen grid place-items-center">
      <main className="max-w-[500px] w-full border-2 border-gray-400 rounded-lg p-4">
        <header className="mb-3">
          <h1 className="text-2xl font-bold mb-2">Todos</h1>
          <TodoInput />
        </header>
        <TodoList />
      </main>
    </div>
  );
}
