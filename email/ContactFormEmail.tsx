import React from 'react'
import { Html, Body, Head, Heading, Hr, Container, Preview, Section, Text } from '@react-email/components'
import { Tailwind } from '@react-email/tailwind'

type ContactFormEmailProps = {
    message: string
    senderEmail: string
}

export default function ContactFormEmail({ message, senderEmail }: ContactFormEmailProps) {
    return (
        <Html>
            <Head />
            <Preview>Nuevo mensaje desde tu portafolio.</Preview>
            <Tailwind>
                <Body className="bg-gray-100 text-black">
                    <Container>
                        <Section className="bg-white borderBlack my-10 px-10 py-4 rounded-md">
                            <Heading className="leading-tight">Rebicibiste un nuevo mensaje desde el formulario de tu portafolio.</Heading>
                            <Text>{message}</Text>
                            <Hr />
                            <Text>Quien envio el mensaje: {senderEmail}</Text>
                        </Section>
                    </Container>
                </Body>
            </Tailwind>
        </Html>
    )
}
