import { Tooltip, Box, Icon, Link } from '@chakra-ui/react'

import React from 'react'

interface AIcon {
    label: string
    icon: any
    size: any
}

function IconAside({ label, icon, size }: AIcon) {
    return (
        <div>
            <Link variant="aside" p="0">
                <Tooltip label={label}>
                    <Box
                        borderRadius="full"
                        p="16px"
                        _hover={{
                            transform: 'scale(1.2)',
                            color: 'warning',
                        }}
                    >
                        <Icon as={icon} boxSize={size} />
                    </Box>
                </Tooltip>
            </Link>
        </div>
    )
}

export default IconAside
