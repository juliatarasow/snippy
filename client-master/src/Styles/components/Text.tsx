export const TextStyle = {
    // style object for base or default style
    baseStyle: {},
    // styles for different sizes ("sm", "md", "lg")
    sizes: {},
    // styles for different visual variants ("outline", "solid")
    variants: {
        counter: {
            fontFamily: 'Roboto Mono',
            fontWeight: '500',
            fontSize: '14px',
        },
        describe: {
            fontWeight: '300',
            fontSize: '14px',
            fontStyle: 'italic',
        },
        username: {
            fontFamily: 'Roboto Mono',
            fontWeight: '500',
            fontSize: '12px',
            color: 'middlegray',
        },
        date: {
            fontFamily: 'Roboto Mono',
            fontWeight: '500',
            fontSize: '12px',
            fontColor: 'lightgray',
        },
        action: {
            fontWeight: '700',
            fontSize: '12px',
            color: 'darkgray',
        },
        comment: {
            fontWeight: '400',
            fontSize: '12px',
        },
        link: {
            fontSize: '14px',
            _hover: { cursor: 'pointer', color: 'primary' },
        },
        profile: {
            fontWeight: '700',
            color: 'darkgray',
        },
        value: {
            fontFamily: 'Roboto Mono',
            fontWeight: '700',
        },
        valueTag: {
            fontWeight: '700',
            color: 'darkgray',
            fontSize: '14px',
        },
    },

    // default values for `size` and `variant`
    defaultProps: {
        variant: '',
    },
}
