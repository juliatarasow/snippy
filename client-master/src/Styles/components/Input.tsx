export const InputStyle = {
    // style object for base or default style
    baseStyle: {
        field: {
            borderRadius: '0',
        },
    },
    // styles for different sizes ("sm", "md", "lg")
    sizes: {
        m: {
            field: {
                width: '200px',
                py: '7px',
                px: '12px',
            },
        },
    },
    // styles for different visual variants ("outline", "solid")
    variants: {
        primary: {
            field: {
                borderWidth: '1px',
                borderColor: 'black',
                borderRadius: '0',
                _hover: {
                    borderColor: 'primary',
                    borderWidth: '2px',
                },
                _focus: {
                    borderColor: 'primary',
                    borderWidth: '2px',
                },
                '::placeholder': {
                    color: 'gray',
                },
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
                _hover: {
                    borderColor: 'primary',
                    borderWidth: '2px',
                },
                _focus: {
                    borderColor: 'primary',
                    borderWidth: '2px',
                },
                '::placeholder': {
                    color: 'black',
                },
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
                _hover: {
                    borderColor: 'primary',
                    borderWidth: '2px',
                },
                _focus: {
                    borderColor: 'primary',
                    borderWidth: '2px',
                },
                '::placeholder': {
                    color: 'black',
                },
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
                borderColor: 'black',
                borderRadius: '0',
                _hover: {
                    borderColor: 'primary',
                    borderWidth: '2px',
                },
                _focus: {
                    borderColor: 'primary',
                    borderWidth: '2px',
                },
                '::placeholder': {
                    color: 'black',
                },
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
                _hover: {
                    borderColor: 'primary',
                    borderWidth: '2px',
                },
                _focus: {
                    borderColor: 'primary',
                    borderWidth: '2px',
                },
                '::placeholder': {
                    color: 'black',
                },
            },
        },
    },

    // default values for `size` and `variant`
    defaultProps: {
        variant: 'primary',
    },
}
