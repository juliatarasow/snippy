export const LabelStyle = {
    // style object for base or default style
    baseStyle: {
        fontFamily: 'Roboto Mono',
        fontWeight: '700',
        color: 'darkgray',
    },
    // styles for different sizes ("sm", "md", "lg")
    sizes: {
        m: {
            fontSize: '15px',
            mt: '20px',
        },
    },
    // styles for different visual variants ("outline", "solid")
    variants: {
        create: {
            fontFamily: 'Roboto',
            fontSize: '15px',
            fontWeight: '400',
        },
    },
    // default values for `size` and `variant`
    defaultProps: {
        size: 'm',
        variant: '',
    },
}
