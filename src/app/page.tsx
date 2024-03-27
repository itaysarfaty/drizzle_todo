import { Input } from "@/components/input";
import { List } from "@/components/list";

export default function Home() {
  return (
    <div className="w-screen h-screen flex justify-center items-center p-5">
      <main className="max-w-[500px] w-full border-2 border-gray-300 rounded-lg p-4">
        <header>
          <h1 className="text-2xl font-bold mb-2">Todos</h1>
          <Input />
        </header>
        <hr className="my-4" />
        <List />
      </main>
    </div>
  );
}
