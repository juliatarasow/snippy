import React, { useEffect, useState } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import {Link as RouterLink, useNavigate } from 'react-router-dom'

import { fetching } from 'useAxios'

import { Box, Field, Input, Button, Heading, VStack, Text } from '@chakra-ui/react'

import { useLogin } from 'auth'
import { User, Data } from 'snippy'
import { setSessionCookie } from 'sessions'
import store from 'store'
import ErrorMessage from 'components/ErrorMessage'
import useLocalStorage from '../../Hooks/useLocalStorage'

export default function LoginPage() {
    const [error, setError] = useState<User['message']>()
    const [user, setUser] = useLocalStorage<User>('user', {
        _id: '',
        username: 'Ayra',
        firstname: 'Stark',
        profile: '',
        email: 'winter@gmail.com',
        password: 'valar vagulis',
        verify: false,
        token: '',
        snippets: [],
        savedSnippets: [],
        activities: [],
    })
    const loginUser = useLogin()
    const navigate = useNavigate()

    useEffect(() => {
        if (user.token) {
            loginUser(user)
            store.activeUser = user // FIX
        }
    }, [loginUser, user])

    const { register, handleSubmit, formState: errors } = useForm<User>()
    const onSubmit: SubmitHandler<User> = (data) => {
        // ERROR STATE

        fetching<Data>('http://localhost:4000/user/login', data)
            .then((response) => {
                if (response.data.token) {
                    loginUser(response.data.user)
                    store.activeUser = response.data.user
                    setSessionCookie(response.data.token) // NOT IMPORTANT NEED TO FIND USAGE
                    sessionStorage.setItem('user_id', response.data.user._id) // used to update user!!
                    setTimeout(() => {
                        setUser(store.activeUser) // USER GETS UPDATED ON THE LOCAL STORAGE
                    }, 2000)
                    navigate('/dashboard')
                }
            })
            .catch((error) => {
                setError(error.message)
            })
    }

    return (
        <VStack spacing={8}>
            <Box
                textAlign="center"
                p={10}
                borderWidth="3px"
                borderColor="secondary"
                color="secondary"
                w="100%"
            >
                <Heading
                    fontFamily="Roboto Mono"
                    fontWeight="700"
                    fontSize="30px"
                >
                    Welcome back!
                </Heading>
            </Box>
            <Box>
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
                            <Input
                                type="text"
                                placeholder="Username"
                                {...register('username', {
                                    required: true,
                                })}
                            />
                            {errors.errors.username}
                        </Field.Root>
                        <Field.Root required>
                            <Field.Label>Password</Field.Label>
                            <Input
                                type="password"
                                placeholder="********"
                                {...register('password', {
                                    required: true,
                                })}
                            />
                            {errors.errors.password && 'password is invalid'}
                        </Field.Root>
                        <Button type="submit" variant="secondary" my="16px">
                            Log In
                        </Button>
                        <br />
                        <RouterLink to={`/signup`}>
                            <Text variant="link">
                                Don't have an account? Sign Up
                            </Text>
                            <Text variant="link">Forgot password</Text>
                        </RouterLink>
                    </form>
                </Box>
            </Box>
        </VStack>
    )
}
