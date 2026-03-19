import React, { useState } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { Link as RouterLink, useNavigate } from 'react-router-dom'

import { Box, Field, Input, Button, Heading, VStack, Text } from '@chakra-ui/react'

import { User } from 'snippy'
import ErrorMessage from '../components/ErrorMessage'

const url = 'http://localhost:4000/user/register'

export default function SignUpPage() {

    const navigate = useNavigate()
    const [error, setError] = useState<User['message']>()
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<User>()

    const onSubmit: SubmitHandler<User> = (data) => {
        let response = fetch(url, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
        response.then((res: any) => {
            if (res.status === 200) {
                setError(undefined)
                setTimeout(() => {
                    navigate('/login')
                }, 1000)
                return res.json()
            }
            res.json().then((data: any) => {
                setError(data.message)
            })
        })
    }

    return (
        <VStack gap={8}>
            <Box
                textAlign="center"
                p={10}
                borderWidth="3px"
                borderColor="primary"
                color="primary"
                w="100%"
            >
                <Heading
                    fontFamily="Roboto Mono"
                    fontWeight="700"
                    fontSize="30px"
                >
                    Create an account and join the community!
                </Heading>
            </Box>
            <Box
                border="1px"
                borderRadius="10px"
                pt="10px"
                pb="50"
                px="30px"
                maxW="400px"
            >
                <form onSubmit={handleSubmit(onSubmit)}>
                    {error && <ErrorMessage message={error} />}
                    <Field.Root required>
                        <Field.Label>Username</Field.Label>
                        <Input type="text" {...register('username')} />
                        {errors.username && <Field.ErrorText>{errors.username.message}</Field.ErrorText>}
                    </Field.Root>
                    <Field.Root required>
                        <Field.Label>First name</Field.Label>
                        <Input type="text" {...register('firstname')} />
                        {errors.firstname && <Field.ErrorText>firstname is required</Field.ErrorText>}
                    </Field.Root>
                    <Field.Root>
                        <Field.Label>Last name</Field.Label>
                        <Input type="text" {...register('lastname')} />
                    </Field.Root>
                    <Field.Root required>
                        <Field.Label>Email</Field.Label>
                        <Input
                            type="email"
                            placeholder="test@test.com"
                            {...register('email')}
                        />
                        {errors.email && <Field.ErrorText>email is already in use or invalid</Field.ErrorText>}
                    </Field.Root>
                    <Field.Root required>
                        <Field.Label>Password</Field.Label>
                        <Input
                            type="password"
                            placeholder="********"
                            {...register('password')}
                            min="6"
                        />
                        <Field.HelperText>
                            Passwords must contain at least eight characters,
                            including at least 1 letter and 1 number.
                        </Field.HelperText>
                        {errors.password && <Field.ErrorText>password is required</Field.ErrorText>}
                    </Field.Root>
                    <Button variant="primary" type="submit" my="16px">
                        Sign Up
                    </Button>
                    <br />
                    <RouterLink to={`/login`}>
                        <Text variant="link">You have an account? Log In</Text>
                    </RouterLink>
                </form>
            </Box>
        </VStack>
    )
}
