import React, { useEffect, useState } from 'react'
import {
    Flex,
    Box,
    Button,
    Heading,
    Divider,
    HStack,
    VStack,
} from '@chakra-ui/react'
import { useForm, SubmitHandler, FormProvider } from 'react-hook-form'
import { useHistory } from 'react-router'

import CreateField from './CreateField'
import CreateSelectField from './CreateSelectField'
import QuillComponent from './QuillComponent'
import { Tags } from './CreateTag'
import CreateStyles from './CreateStyles'
import CreateButtons from './CreateButtons'
import CreateOneButton from './CreateOneButton'

import store, { load } from '../../store'
import { useAuthState } from 'auth'
import { Post } from 'snippy'

function CreateSnippet() {
    const [step, setStep] = useState(0)
    const { username, _id, profile } = useAuthState()
    const history = useHistory()

    const methods = useForm<Post['snippet']>()

    const editorContent = methods.watch('content')

    const onEditorStateChange = (editorState: any) => {
        methods.setValue('content', editorState)
    }
    const nextStep = () => setStep(step + 1)
    const prevStep = () => setStep(step - 1)
    useEffect(() => {
        methods.register('content', { required: true })
    }, [methods])
    const onSubmit: SubmitHandler<Post['snippet']> = (data, e: any) => {
        e.preventDefault()
        console.log(data)
        try {
            store.newPost.snippet = data
            store.newPost.snippet.author = {
                _id,
                username,
                profile,
            }
            store.publishSnippet()
            load('posts')
            history.push('/dashboard')
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <Flex width="100%" alignItems="center" direction="column">
            <Box
                border="1px"
                borderRadius="10px"
                pt="10px"
                pb="30px"
                mt="10px"
                minW="700px"
            >
                <Heading variant="component" textAlign="center">
                    Create a snippet
                </Heading>
                <Divider borderWidth="3px" color="secondary" w="99%" />
                <FormProvider {...methods}>
                    <form onSubmit={methods.handleSubmit(onSubmit)}>
                        <Flex px="30px" flexDir="column">
                            {step === 0 && (
                                <>
                                    <CreateOneButton
                                        title="Next"
                                        justify="flex-end"
                                        step={nextStep}
                                        variant="secondary"
                                    />
                                    <VStack
                                        minH="350px"
                                        justifyContent="center"
                                    >
                                        <CreateField
                                            type="text"
                                            value="title"
                                            variant="head"
                                            label="Add a short title to the snippet"
                                            cb={methods.register}
                                        />
                                        <CreateField
                                            type="text"
                                            value="description"
                                            variant="describe"
                                            label="What is the snippet about?"
                                            cb={methods.register}
                                        />
                                    </VStack>
                                </>
                            )}
                            {step === 1 && (
                                <>
                                    <CreateButtons
                                        back={prevStep}
                                        next={nextStep}
                                    />
                                    <VStack
                                        minH="350px"
                                        justifyContent="center"
                                    >
                                        <CreateSelectField
                                            placeholder="language"
                                            value="language"
                                            cb={methods.register}
                                        />

                                        <QuillComponent
                                            value={editorContent}
                                            onChange={onEditorStateChange}
                                        />
                                        <Tags />
                                    </VStack>
                                </>
                            )}

                            {step === 2 && (
                                <>
                                    <HStack
                                        mt="24px"
                                        w="100%"
                                        justifyContent="space-between"
                                        position="relative"
                                        bottom="0"
                                    >
                                        <CreateOneButton
                                            title="Back"
                                            justify="flex-start"
                                            step={prevStep}
                                            variant="back"
                                        />
                                        <Button
                                            type="submit"
                                            variant="primary"
                                            px="72px"
                                        >
                                            Create
                                        </Button>
                                    </HStack>
                                    <VStack
                                        minH="350px"
                                        justifyContent="center"
                                    >
                                        <CreateStyles content={editorContent} />
                                    </VStack>
                                </>
                            )}
                        </Flex>
                    </form>
                </FormProvider>
            </Box>
        </Flex>
    )
}

export default CreateSnippet
