import { Complete } from './item/complete'
import { Todo } from '@/db/schema'

export const Item = ({ description, id }: Todo) => {
    return (
        <li className="relative  flex items-center justify-between overflow-hidden rounded-md bg-gray-50">
            <p className="truncate px-3 py-3 text-sm ">{description}</p>
            <Complete id={id} />
        </li>
    )
}
