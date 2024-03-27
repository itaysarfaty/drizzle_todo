import { Input } from '@/components/input'
import { List } from '@/components/list'

export default function Home() {
    return (
        <div className="flex h-screen w-screen items-center justify-center p-5">
            <main className="w-full max-w-[500px] rounded-lg border-2 border-gray-300 p-4">
                <header>
                    <h1 className="mb-2 text-2xl font-bold">Todos</h1>
                    <Input />
                </header>
                <hr className="my-4" />
                <List />
            </main>
        </div>
    )
}
