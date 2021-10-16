import { darken, mode, whiten } from '@chakra-ui/theme-tools'

export const ButtonStyles = {
    // Styles for the base style
    baseStyle: {
        fontFamily: 'Roboto Mono',
        color: 'white',
        borderRadius: '8px',
        _focus: {
            boxShadow:
                '0 0 1px 2px rgba(0, 0, 0), 0 1px 1px rgba(0, 0, 0, .15)',
        },
    },
    // Styles for the size variations
    sizes: {
        s: {
            fontSize: '14px',
            px: '16px',
            py: '4px',
        },
        m: {
            fontSize: 'm',
            px: '30px',
            py: '10px',
        },
        l: {
            fontSize: '20px',
            px: '30px',
            py: '10px',
        },
    },
    // Styles for the visual style variations
    variants: {
        primary: (props: any) => ({
            bg: 'primary',
            _hover: {
                bg: mode(darken('primary', 20), whiten('primary', 20))(props),
            },
            _active: {
                bg: '#BEB3FC',
                transform: 'scale(0.98)',
                borderColor: 'black',
            },
        }),
        secondary: (props: any) => ({
            bg: 'secondary',
            _hover: {
                bg: mode(
                    darken('secondary', 20),
                    whiten('secondary', 20)
                )(props),
                _active: {
                    bg: '#A5E4A4',
                    transform: 'scale(0.98)',
                    borderColor: 'black',
                },
            },
        }),
        warning: (props: any) => ({
            bg: 'warning',
            _hover: {
                bg: mode(darken('warning', 20), whiten('warning', 20))(props),
            },
            _active: {
                bg: '#FFBB89',
                transform: 'scale(0.98)',
                borderColor: 'black',
            },
        }),
        white: (props: any) => ({
            bg: 'white',
            color: 'black',
            _hover: {
                bg: mode(darken('yellow', 0), whiten('yellow', 20))(props),
            },
            borderRadius: '0',
        }),
        negative: (props: any) => ({
            bg: 'white',
            color: 'black',
            borderWidth: '2px',
            borderColor: 'black',
            _hover: {
                bg: mode(darken('warning', 0), whiten('warning', 20))(props),
            },
        }),
        menu: {
            borderRadius: '0',
            bg: 'white',
            color: 'black',
            textAlign: 'left',
            _hover: {
                bg: 'yellow',
            },
        },
        arrowUp: (props: any) => ({
            bg: 'white',
            color: 'black',
            borderRadius: '50px',
            p: '4px',
            _hover: {
                bg: mode(darken('warning', 0), whiten('warning', 20))(props),
            },
        }),
        arrowDown: (props: any) => ({
            bg: 'white',
            color: 'black',
            borderRadius: '50px',
            p: '4px',
            _hover: {
                bg: mode(
                    darken('secondary', 0),
                    whiten('secondary', 20)
                )(props),
            },
        }),
        action: (props: any) => ({
            bg: 'transparent',
            color: 'darkgray',
            p: '8px',

            _hover: {
                color: mode(darken('warning', 0), whiten('warning', 20))(props),
            },
            _focus: {
                boxShadow:
                    '0 0 0px 0px rgba(0, 0, 0), 0 0px 0px rgba(0, 0, 0, .15)',
            },
            _active: {
                color: 'black',
                transform: 'scale(1.2)',
            },
        }),
        tag: (props: any) => ({
            borderRadius: '0',
            h: '30px',
            bg: 'white',
            color: 'black',
            borderWidth: '1px',
            borderColor: 'black',
            _hover: {
                bg: mode(darken('yellow', 0), whiten('yellow', 20))(props),
            },
        }),
        back: (props: any) => ({
            bg: 'white',
            color: 'black',
            _hover: {
                bg: mode(darken('green', 0), whiten('green', 20))(props),
            },
            border: '1px',
        }),
        topic: {
            color: 'black',
            fontSize: '14px',
            py: '4px',
            px: '16px',
            _hover: {
                border: '2px',
            },
            border: '2px',
            borderRadius: '0',
        },
    },
    // The default `size` or `variant` values
    defaultProps: {
        variant: 'secondary',
        size: 'm',
    },
}
