import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import { FaChevronDown } from 'react-icons/fa'
import React from 'react'

function DropdownComponent() {
    return (
        <Menu>
            <MenuButton
                as={Button}
                rightIcon={<FaChevronDown />}
                variant="white"
            >
                Topics
            </MenuButton>
            <MenuList border="1px" borderRadius="0">
                <MenuItem _hover={{ bg: 'yellow' }}>JavaScript</MenuItem>
                <MenuItem _hover={{ bg: 'yellow' }}>React</MenuItem>
                <MenuItem _hover={{ bg: 'yellow' }}>Angular</MenuItem>
                <MenuItem _hover={{ bg: 'yellow' }}>Vue</MenuItem>
                <MenuItem _hover={{ bg: 'yellow' }}>Node</MenuItem>
            </MenuList>
        </Menu>
    )
}

export default DropdownComponent
