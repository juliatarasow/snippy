import React, { useEffect, useState } from 'react'

import { Box } from '@chakra-ui/layout'
import { User, Snippet } from 'snippy'

import { Image } from '@chakra-ui/image'
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
