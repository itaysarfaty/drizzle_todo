'use server'

import { db } from '@/db'
import { todos } from '@/db/schema'
import { delay, getErrorMessage } from '@/lib/utils'
import { revalidateTag } from 'next/cache'

export async function addItem(
    prevState: { formKey: number; error: string | null },
    data: FormData
) {
    'use server'

    const description = data.get('description') as string

    try {
        if (description.length < 5)
            throw new Error('Must be at least 5 characters')
        if (description.length > 100)
            throw new Error('Must be less than 100 characters')

        await delay()

        await db.insert(todos).values({
            description,
        })

        revalidateTag('todos')
        return { error: null, formKey: prevState.formKey + 1 }
    } catch (error) {
        const message = getErrorMessage(error)
        return { error: message, formKey: prevState.formKey }
    }
}
