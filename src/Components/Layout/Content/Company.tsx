import Head from 'next/head';
import {
  Box,
  Heading,
  Container,
  Text,
  Stack,
  Image,
  SlideFade,
} from '@chakra-ui/react';
import React, { useRef } from "react"
import { useInViewport } from "react-in-viewport"
let lexmark = require("../../../Images/Lexmark.png")
export default function CallToActionWithAnnotation() {
  const ref = useRef(null)
  const { inViewport } = useInViewport(
    ref,
    { rootMargin: "-200px" },
    { disconnectOnLeave: false },
    {}
  )
  return (
    <SlideFade delay={0.3} in={inViewport} offsetY='20px'>
      <Box
        id ={'Company'}
        ref={ref} 
        h='calc(100vh)'>
         
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Caveat:wght@700&display=swap"
            rel="stylesheet"
          />
        </Head>

        <Container maxW={'4xl'} h='calc(100vh)' centerContent justifyContent={'center'}>
          <Stack
            as={Box}
            textAlign={'center'}
            spacing={{ base: 8, md: 14 }}
            py={{ base: 20, md: 36 }}>
            <Heading
              fontWeight={600}
              fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }}
              >
              <Text as={'span'}>
                Lexmark <br />
              </Text>
              <Text as={'span'} color={'#00c425'}>
                Research & Development
              </Text>
            </Heading>
            <Text color={'gray.200'}>
              Creating IoT-and-Cloud-Enabled imaging technologies that deliver print simplicity, security, savings & sustainability.
            </Text>
            <Box
              position={'relative'}
              height={'200px'}
              rounded={'2xl'}
              boxShadow={'2xl'}
              width={'full'}
              overflow={'hidden'}>

              <Image
                alt={'Hero Image'}
                fit={'cover'}
                align={'center'}
                w={'100%'}
                h={'100%'}
                src={lexmark}
              />
            </Box>
          </Stack>
        </Container>
      </Box>
    </SlideFade>
  );
}

