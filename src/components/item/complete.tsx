'use client'

import { deleteItem } from './complete/action'
import { CompleteButton } from './complete/button'
import { useFormState } from 'react-dom'

export interface CompleteItemProps {
    id: number
}

export const Complete = ({ id }: CompleteItemProps) => {
    const [_, action] = useFormState(deleteItem, { id, error: null })
    return (
        <form action={action}>
            <CompleteButton />
        </form>
    )
}
