export const BorderStyle = {
    // style object for base or default style
    baseStyle: {
        borderWidth: '1px',
    },
    // styles for different sizes ("sm", "md", "lg")
    sizes: {},
    // styles for different visual variants ("outline", "solid")
    variants: {
        rounded: {
            borderRadius: '10px',
        },
        edge: {
            borderRadius: '0',
        },
    },
    // default values for `size` and `variant`
    defaultProps: {
        size: '',
        variant: 'rounded',
    },
}
