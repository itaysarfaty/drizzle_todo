'use client'

import { Loader2 } from 'lucide-react'
import { useFormStatus } from 'react-dom'

export const AddButton = () => {
    const { pending } = useFormStatus()
    return (
        <button
            type="submit"
            disabled={pending}
            className="grid w-16 place-items-center rounded-md bg-gray-900 py-1 text-sm text-white"
        >
            {pending ? (
                <Loader2 className="h-4 w-4 animate-spin text-white" />
            ) : (
                'Add'
            )}
        </button>
    )
}
