import React from 'react'
import {
    Html,
    Body,
    Head,
    Heading,
    Hr,
    Container,
    Preview,
    Section,
    Text
} from '@react-email/components';
import { Tailwind } from "@react-email/tailwind";

type ContactFormEmailProps = {
    message: string
}

export default function ContactFormEmail({ message }: ContactFormEmailProps) {
  return <Html>
    <Head />
    <Preview>New Message from your portfolio website</Preview>
    <Tailwind>
      <Body>
        <Container>
          <Section>
            <Heading>You received the following message from the contact form</Heading>
            <Text>{message}</Text>
          </Section>
        </Container>
      </Body>
    </Tailwind>
    </Html>
}
