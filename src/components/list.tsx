import { Item } from './item'
import { db } from '@/db'
import { todos } from '@/db/schema'
import { getErrorMessage } from '@/lib/utils'
import { unstable_cache as cache } from 'next/cache'

const getTodos = async () => {
    'use server'
    try {
        return await db.select().from(todos)
    } catch (error) {
        const message = getErrorMessage(error)
        return { error: message }
    }
}

const cachedGetTodos = cache(getTodos, ['todos'], { tags: ['todos'] })

export const List = async () => {
    const todos = await cachedGetTodos()

    if ('error' in todos) {
        return <p className="text-sm text-red-500">{todos.error}</p>
    }

    return (
        <ul className="flex flex-col  gap-3">
            {todos.map((todo) => (
                <Item key={todo.id} {...todo} />
            ))}
        </ul>
    )
}
