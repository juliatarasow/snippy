import { darken, mode, whiten } from '@chakra-ui/theme-tools'
import { Dict } from '@chakra-ui/utils'
export const BoxCustom = {
    // Styles for the base style
    baseStyle: {},
    // Styles for the size variations
    sizes: {},
    // Styles for the visual style variations
    variants: {
        primary: (props: Dict<any>) => ({
            bg: 'primary',
            color: 'white',
            _hover: {
                bg: mode(darken('primary', 20), whiten('primary', 20))(props),
            },
        }),
        'with-shadow': {
            bg: 'red.400',
            boxShadow: '0 0 2px 2px #efdfde',
        },
        solid: (props: { colorMode: string }) => ({
            bg: props.colorMode === 'dark' ? 'red.300' : 'red.500',
        }),
    },
    // The default `size` or `variant` values
    defaultProps: {
        variant: 'solid',
    },
}
