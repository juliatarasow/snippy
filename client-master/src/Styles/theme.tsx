import { extendTheme } from '@chakra-ui/react'
import { createBreakpoints } from '@chakra-ui/theme-tools'

import { ButtonStyles as Button } from './components/ButtonStyles'
import { InputStyle as Input } from './components/Input'
import { LabelStyle as FormLabel } from './components/FormLabel'
import { MenuListStyle as Menu } from './components/MenuList'
import { MenuItemsStyle as MenuItem } from './components/MenuItems'
import { BorderStyle as border } from './components/Border'
import { LinkStyle as Link } from './components/Link'
import { HeadingStyle as Heading } from './components/Headings'
import { TextStyle as Text } from './components/Text'

const styles = {
    global: {
        body: {
            fontFamily: 'Roboto',
            color: 'black',
            bg: 'white',
            lineHeight: 'base',
        },
        '*::placeholder': {
            color: 'gray',
        },
        '*, *::before, &::after': {
            borderColor: 'black',
            wordWrap: 'break-word',
        },
    },
}

const breakpoints = createBreakpoints({
    sm: '722px',
    md: '997px',
    lg: '1219px',
    xl: '1272px',
})

export const customTheme = extendTheme({
    fonts: {
        body: 'Roboto',
        heading: 'Roboto Mono',

        regular: 'Roboto',
        mono: 'Roboto Mono',
        code: 'Fira Code',
    },
    colors: {
        //main colours
        primary: '#9B6BCB',
        secondary: '#63AD6A',
        neutral: '#FFD747',
        warning: '#FF843F',
        //pastels
        pink: '#FFBCBC',
        yellow: '#FFF7B2',
        purple: '#BEB3FC',
        blue: '#A0E7DA',
        green: '#A5E4A4',
        orange: '#FFBB89',
        //grays
        darkgray: '#737272',
        lightgray: '#C4C4C4',
    },

    components: {
        Button,
        Input,
        FormLabel,
        Menu,
        MenuItem,
        border,
        Link,
        Heading,
        Text,
    },
    breakpoints,
    styles,
})
