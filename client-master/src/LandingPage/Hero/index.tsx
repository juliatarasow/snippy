import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import Logo from '../../Assets/Images/logo-snippy.png'

import {
    Box,
    Button,
    Flex,
    Heading,
    Stack,
    Image,
} from '@chakra-ui/react'

//import PrismRenderComponent from '../PrismRenderStart'
import Computer from 'Assets/Images/old-computer-1.jpg'

interface HeroProps {
    title: string
    subtitle: string
    image: string
    ctaLink: string
    ctaText: string
}

export default function Hero({
    title,
    subtitle,
    image,
    ctaLink,
    ctaText,
    ...rest
}: HeroProps) {
    return (
        <Flex
            align="center"
            justify={{
                base: 'center',
                md: 'space-around',
                xl: 'space-between',
            }}
            direction={{ base: 'column-reverse', md: 'row' }}
            nowrap="no-wrap"
            minH="70vh"
            px={8}
            mb={16}
            {...rest}
        >
            <Stack
                spacing={4}
                w={{ base: '80%', md: '40%' }}
                align={['center', 'center', 'flex-start', 'flex-start']}
            >
                <Heading
                    as="h1"
                    size="xl"
                    fontWeight="bold"
                    color="black"
                    textAlign={['center', 'center', 'left', 'left']}
                >
                    <Image minW="320px" src={Logo} alt="Snippy" />
                </Heading>
                <Heading
                    as="h2"
                    size="s"
                    color="black"
                    opacity="0.8"
                    fontWeight="normal"
                    lineHeight={1.5}
                    textAlign={['center', 'center', 'left', 'left']}
                >
                    {subtitle}
                </Heading>
                <Link to={ctaLink}>
                    <Button
                        variant="primary"
                        borderRadius="8px"
                        py="4"
                        px="4"
                        lineHeight="1"
                        size="md"
                    >
                        {ctaText}
                    </Button>
                </Link>
                <Link to={'/login'}>
                    <Button
                        variant="negative"
                        borderRadius="8px"
                        py="4"
                        px="4"
                        lineHeight="1"
                        size="md"
                    >
                        Log in
                    </Button>
                </Link>
            </Stack>
            <Box
                w={{ base: '80%', sm: '60%', md: '50%' }}
                mb={{ base: 12, md: 0 }}
            >
                <Image src={Computer} size="100%" rounded="10px" />
                {/* <PrismRenderComponent /> */}
                {/* <Image src={image} size="100%" rounded="1rem" shadow="2xl" /> */}
            </Box>
        </Flex>
    )
}

Hero.propTypes = {
    title: PropTypes.string,
    subtitle: PropTypes.string,
    image: PropTypes.string,
    ctaText: PropTypes.string,
    ctaLink: PropTypes.string,
}

Hero.defaultProps = {
    title: 'Snippy </>',
    subtitle: 'Find, save and share your code snippets',
    image: 'https://source.unsplash.com/collection/404339/800x600',
    ctaText: 'Create your account now',
    ctaLink: '/signup',
}
