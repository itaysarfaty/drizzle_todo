'use server'

import { db } from '@/db'
import { todos } from '@/db/schema'
import { delay, getErrorMessage } from '@/lib/utils'
import { eq } from 'drizzle-orm'
import { revalidateTag } from 'next/cache'

export async function deleteItem(
    prevState: { id: number; error: null | string },
    data: FormData
) {
    try {
        await delay()
        await db.delete(todos).where(eq(todos.id, prevState.id)).returning()
        revalidateTag('todos')
        return { id: prevState.id, error: null }
    } catch (error) {
        const message = getErrorMessage(error)
        return { id: prevState.id, error: message }
    }
}
