export const HeadingStyle = {
    // style object for base or default style
    baseStyle: {
        fontFamily: 'Roboto Mono',
        fontWeight: '700',
    },
    // styles for different sizes ("sm", "md", "lg")
    sizes: {
        xs: {
            fontSize: '14px',
        },
        s: {
            fontSize: '16px',
        },
        m: {
            fontSize: '20px',
        },
    },
    // styles for different visual variants ("outline", "solid")
    variants: {
        component: {
            fontSize: '35px',
            py: '16px',
            px: '30px',
            color: 'secondary',
        },
    },
    // default values for `size` and `variant`
    defaultProps: {
        size: '',
        variant: '',
    },
}
