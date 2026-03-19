import { createSystem, defaultConfig, defineConfig, defineRecipe } from '@chakra-ui/react'

const buttonRecipe = defineRecipe({
    base: {
        fontFamily: 'Roboto Mono',
        color: 'white',
        borderRadius: '8px',
        _focus: { boxShadow: '0 0 1px 2px rgba(0, 0, 0), 0 1px 1px rgba(0, 0, 0, .15)' },
    },
    variants: {
        size: {
            s: { fontSize: '14px', px: '16px', py: '4px' },
            m: { fontSize: 'm', px: '30px', py: '10px' },
            l: { fontSize: '20px', px: '30px', py: '10px' },
        },
        variant: {
            primary: {
                bg: 'primary',
                _hover: { bg: '#7a4fad' },
                _active: { bg: '#BEB3FC', transform: 'scale(0.98)', borderColor: 'black' },
            },
            secondary: {
                            bg: 'secondary',
                            _hover: { bg: '#4a8f50' },
                            _active: { bg: '#A5E4A4', transform: 'scale(0.98)' },
                        },
            warning: {
                bg: 'warning',
                _hover: { bg: '#cc6a32' },
                _active: { bg: '#FFBB89', transform: 'scale(0.98)' },
            },
            white: {
                bg: 'white',
                color: 'black',
                borderRadius: '0',
                _hover: { bg: 'yellow' },
            },
            negative: {
                bg: 'white',
                color: 'black',
                borderWidth: '2px',
                borderColor: 'black',
                _hover: { bg: 'warning' },
            },
            menu: {
                borderRadius: '0',
                bg: 'white',
                color: 'black',
                _hover: { bg: 'yellow' },
            },
            arrowUp: {
                bg: 'white',
                color: 'black',
                borderRadius: '50px',
                p: '4px',
                _hover: { bg: 'warning' },
            },
            arrowDown: {
                bg: 'white',
                color: 'black',
                borderRadius: '50px',
                p: '4px',
                _hover: { bg: 'secondary' },
            },
            action: {
                bg: 'transparent',
                color: 'darkgray',
                p: '8px',
                _hover: { color: 'warning' },
                _focus: { boxShadow: 'none' },
                _active: { color: 'black', transform: 'scale(1.2)' },
            },
            tag: {
                borderRadius: '0',
                h: '30px',
                bg: 'white',
                color: 'black',
                borderWidth: '1px',
                borderColor: 'black',
                _hover: { bg: 'yellow' },
            },
            back: {
                bg: 'white',
                color: 'black',
                border: '1px',
                _hover: { bg: 'green' },
            },
            topic: {
                color: 'black',
                fontSize: '14px',
                py: '4px',
                px: '16px',
                border: '2px',
                borderRadius: '0',
            },
        }
    },
    defaultVariants:{
        variant: 'secondary',
        size: 'm'
    },
})

const inputRecipe = defineRecipe({
    base: {
        borderRadius: '0',
    },
    variants: {
        variant: {
            primary: {
                field: {
                    borderWidth: '1px',
                    borderColor: 'black',
                    borderRadius: '0',
                    _hover: { borderColor: 'primary', borderWidth: '2px' },
                    _focus: { borderColor: 'primary', borderWidth: '2px' },
                },
            },
            head: {
                field: {
                    fontFamily: 'Roboto Mono',
                    fontWeight: '700',
                    fontSize: '20px',
                    py: '24px',
                    borderWidth: '2px',
                    borderColor: 'white',
                    borderRadius: '0',
                    _hover: { borderColor: 'primary', borderWidth: '2px' },
                    _focus: { borderColor: 'primary', borderWidth: '2px' },
                },
            },
            describe: {
                field: {
                    fontWeight: '400',
                    fontSize: '16px',
                    fontStyle: 'italic',
                    py: '24px',
                    borderWidth: '2px',
                    borderColor: 'white',
                    borderRadius: '0',
                    _hover: { borderColor: 'primary', borderWidth: '2px' },
                    _focus: { borderColor: 'primary', borderWidth: '2px' },
                },
            },
            tag: {
                field: {
                    fontFamily: 'Roboto Mono',
                    fontWeight: '700',
                    fontSize: '15px',
                    h: '30px',
                    w: '100%',
                    borderWidth: '0px',
                    borderRadius: '0',
                    _hover: { borderColor: 'primary', borderWidth: '2px' },
                    _focus: { borderColor: 'primary', borderWidth: '2px' },
                },
            },
            value: {
                field: {
                    fontWeight: '400',
                    fontSize: '16px',
                    fontStyle: 'italic',
                    h: '40px',
                    borderWidth: '2px',
                    borderColor: 'white',
                    borderRadius: '0',
                    _hover: { borderColor: 'primary', borderWidth: '2px' },
                    _focus: { borderColor: 'primary', borderWidth: '2px' },
                },
            },
        },
    },
    defaultVariants: {
        variant: 'primary',
    },
})

const config = defineConfig({
    theme: {
        breakpoints: {
            sm: '722px',
            md: '997px',
            lg: '1219px',
            xl: '1272px',
        },
        tokens: {
            fonts: {
                body: { value: 'Roboto, sans-serif' },
                heading: { value: 'Roboto Mono, monospace' },
                mono: { value: 'Fira Code, monospace' },
            },
            colors: {
                primary: { value: '#9B6BCB' },
                secondary: { value: '#63AD6A' },
                neutral: { value: '#FFD747' },
                warning: { value: '#FF843F' },
                pink: { value: '#FFBCBC' },
                yellow: { value: '#FFF7B2' },
                purple: { value: '#BEB3FC' },
                blue: { value: '#A0E7DA' },
                green: { value: '#A5E4A4' },
                orange: { value: '#FFBB89' },
                darkgray: { value: '#737272' },
                lightgray: { value: '#C4C4C4' },
            },
        },
        semanticTokens: {
            colors: {
                primary: { value: '{colors.primary}' },
                secondary: { value: '{colors.secondary}' },
                warning: { value: '{colors.warning}' },
                yellow: { value: '{colors.yellow}' },
                darkgray: { value: '{colors.darkgray}' },
                lightgray: { value: '{colors.lightgray}' },
            },
        },
        slotRecipes: {
            
        },
        recipes: {
            button: buttonRecipe,
            input: inputRecipe,
        },
    },
    globalCss: {
        body: {
            fontFamily: 'Roboto, sans-serif',
            color: 'black',
            bg: 'white',
            lineHeight: 'base',
        },
        '*::placeholder': {
            color: 'gray',
        },
        '*, *::before, *::after': {
            wordWrap: 'break-word',
        },
    },
})

export const customSystem = createSystem(defaultConfig, config)
