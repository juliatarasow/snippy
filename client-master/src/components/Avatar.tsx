import React, { useEffect, useState } from 'react'

import { Box, Image } from '@chakra-ui/react'
import { User, Snippet } from 'snippy'

function AvatarComponent({
    profile,
}: {
    profile: Snippet['author']['profile']
}) {
    const [avatar, setAvatar] = useState<User['profile']>()
    useEffect(() => {
        setAvatar(profile)
    }, [profile])
    return (
        <Box>
            <Image src={avatar} alt="avatar" boxSize="100%" />
        </Box>
    )
}

export default AvatarComponent
