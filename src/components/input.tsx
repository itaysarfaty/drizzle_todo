'use client'

import { addItem } from './input/action'
import { AddButton } from './input/addButton'
import { useFormState } from 'react-dom'

const initialState = { error: null, formKey: 0 }
export const Input = () => {
    const [{ formKey, error }, action] = useFormState(addItem, initialState)

    return (
        <form action={action} key={formKey}>
            <div className="flex gap-3">
                <input
                    type="text"
                    name="description"
                    placeholder="Add a todo..."
                    className="flex-1 rounded-md border border-gray-300 px-2 py-2 text-sm focus:border-gray-400 focus:outline-none"
                    aria-label="Enter a todo"
                    aria-describedby="todo-error"
                />
                <AddButton />
            </div>
            {error && (
                <p id="todo-error" className="mt-2 text-xs text-red-500">
                    {error}
                </p>
            )}
        </form>
    )
}
