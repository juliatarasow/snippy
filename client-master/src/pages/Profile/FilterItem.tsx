import { Link } from '@chakra-ui/react'
import React from 'react'

function FilterItem({
    onclick,
    title,
}: {
    title: string
    onclick: React.Dispatch<React.SetStateAction<string>>
}) {
    return (
        <div>
            <Link onClick={() => onclick(title)} textTransform="uppercase" variant="filter">
                {title}
            </Link>
        </div>
    )
}

export default FilterItem
