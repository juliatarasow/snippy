import React, { useState } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'

import {
    Box,
    FormControl,
    FormLabel,
    FormHelperText,
    Input,
    Button,
    Heading,
    VStack,
    Text,
} from '@chakra-ui/react'

import { Link as RouterLink } from 'react-router-dom'
import { User } from 'snippy'
import { useHistory } from 'react-router-dom'
import ErrorMessage from '../Shared/ErrorMessage'

const url = 'http://localhost:4000/user/register'

export default function SignUpPage() {

    const history = useHistory()
    /* Add Avatar... */
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
                setError(null || undefined)
         

                setTimeout(() => {
                    history.push('/login')
                }, 1000)

                return res.json()
            }
            res.json().then((data: any) => {

                setError(data.message)
            })
        })
    }

    
    return (
        <VStack spacing={8}>
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
                    <FormControl isRequired>
                        <FormLabel> Username </FormLabel>
                        <Input type="text" {...register('username')} />
                        {errors.username}
                    </FormControl>
                    <FormControl isRequired>
                        <FormLabel> First name </FormLabel>
                        <Input type="text" {...register('firstname')} />
                        {errors.firstname && 'firstname is required'}
                    </FormControl>
                    <FormLabel> Last name </FormLabel>
                    <Input type="text" {...register('lastname')} />
                    <FormControl isRequired>
                        <FormLabel> Email </FormLabel>
                        <Input
                            type="email"
                            placeholder="test@test.com"
                            {...register('email')}
                        />
                        {errors.email && 'email is already in use or invalid'}
                    </FormControl>
                    <FormControl isRequired>
                        <FormLabel> Password </FormLabel>
                        <Input
                            type="password"
                            placeholder="********"
                            {...register('password')}
                            min="6"
                        />
                        <FormHelperText>
                            Passwords must contain at least eight characters,
                            including at least 1 letter and 1 number.{' '}
                        </FormHelperText>
                        {errors.password && 'password is required'}
                    </FormControl>
                    <Button variant="primary" type="submit" my="16px">
                        Sign Up
                    </Button>
                    <br />
                    <RouterLink to={`/login`}>
                        <Text variant="link">You have an account? Log In </Text>
                    </RouterLink>
                </form>
            </Box>
        </VStack>
    )
}
