import React from 'react'
import { As, Flex, FlexProps, OmitCommonProps } from '@chakra-ui/react'
import Header from './Header'

export default function LandingLayout(
    props: JSX.IntrinsicAttributes &
        OmitCommonProps<
            React.DetailedHTMLProps<
                React.HTMLAttributes<HTMLDivElement>,
                HTMLDivElement
            >,
            keyof FlexProps
        > &
        FlexProps &
        OmitCommonProps<any, keyof FlexProps> & { as?: As<any> | undefined }
) {
    return (
        <Flex
            as="nav"
            align="center"
            justify="space-between"
            wrap="wrap"
            w="100%"
            mb={8}
            p={8}
            bg={['primary', 'primary', 'transparent', 'transparent']}
            color={['#272828', '#262728', 'black', 'black']}
            direction="column"
            maxW={{ xl: '1200px' }}
            m="0 auto"
            {...props}
        >
            <Header />

            {props.children}
        </Flex>
    )
}
