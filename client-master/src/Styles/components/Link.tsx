export const LinkStyle = {
    // style object for base or default style
    baseStyle: {
        fontFamily: 'Roboto Mono',
    },
    // styles for different sizes ("sm", "md", "lg")
    sizes: {},
    // styles for different visual variants ("outline", "solid")
    variants: {
        aside: {
            fontWeight: '700',
            fontSize: '20px',
            pl: '30px',
            py: '8px',
        },
        filter: {
            fontWeight: '700',
            fontSize: '18px',
            letterSpacing: '1px',
            p: '4px',
            _hover: {
                bg: 'yellow',
            },
        },
    },
    // default values for `size` and `variant`
    defaultProps: {
        size: '',
        variant: '',
    },
}
