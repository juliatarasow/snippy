import React from 'react'
import { FaChevronDown } from 'react-icons/fa'

import { Button, Menu } from '@chakra-ui/react'

function DropdownComponent() {
    return (
        <Menu.Root>
            <Menu.Trigger asChild>
                <Button>
                    Topics
                    <FaChevronDown />
                </Button>
            </Menu.Trigger>
            <Menu.Positioner>
                <Menu.Content borderWidth="1px" borderRadius="0">
                    {['JavaScript', 'React', 'Angular', 'Vue', 'Node'].map((topic) => (
                        <Menu.Item key={topic} value={topic} _hover={{ bg: 'yellow' }}>
                            {topic}
                        </Menu.Item>
                    ))}
                </Menu.Content>
            </Menu.Positioner>
        </Menu.Root>
    )
}

export default DropdownComponent
