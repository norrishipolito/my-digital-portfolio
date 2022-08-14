import React, { useRef } from 'react';
import {
  Box,
  Heading,
  Link,
  Image,
  Text,
  Divider,
  HStack,
  Tag,
  Wrap,
  WrapItem,
  SpaceProps,
  useColorModeValue,
  Container,
  VStack,
  SlideFade,
  Badge,
} from '@chakra-ui/react';
import { useInViewport } from 'react-in-viewport';
let lex_logo = require("../../../Images/lex-logo.jpg")
let etl = require("../../../Images/etl-tools.jpg")
interface IBlogTags {
  tags: Array<string>;
  marginTop?: SpaceProps['marginTop'];
}

const BlogTags: React.FC<IBlogTags> = (props) => {
  return (
    <HStack spacing={2} marginTop={props.marginTop}>
      {props.tags.map((tag) => {
        return (
          <Tag size='lg' colorScheme='blue' borderRadius='full' key={tag}>
            {tag}
          </Tag>

        );
      })}
    </HStack>
  );
};

interface BlogAuthorProps {
  date: Date;
  name: string;
}

export const BlogAuthor: React.FC<BlogAuthorProps> = (props) => {
  return (
    <HStack marginTop="2" spacing="2" display="flex" alignItems="center">
      <Image
        borderRadius="full"
        boxSize="40px"
        src={lex_logo}
        alt={`Avatar of ${props.name}`}
      />
      <Text fontWeight="medium">{props.name}</Text>
      <Text>—</Text>
      <Text>{props.date.toLocaleDateString()}</Text>
    </HStack>
  );
};

const ArticleList = () => {
  const ref = useRef(null)
  const { inViewport } = useInViewport(
    ref,
    { rootMargin: "-200px" },
    { disconnectOnLeave: false },
    {}
  )
  return (
    <SlideFade delay={0.3} in={inViewport} offsetY='20px'>
      <Container id="department" ref={ref} maxW={'7xl'} mb={'12'} px="12" pt="24" pb="12"   h='calc(100vh)' centerContent justifyContent={'center'}>
        <Box>
        <Heading as="h1">DEPARTMENT/DIVISION ASSIGNMENT</Heading>
        </Box>
        <Box
          marginTop={{ base: '1', sm: '5' }}
          display="flex"
          flexDirection={{ base: 'column', sm: 'row' }}
          justifyContent="space-between">
          <Box
            display="flex"
            flex="1"
            marginRight="3"
            position="relative"
            alignItems="center">
            <Box
              width={{ base: '100%', sm: '85%' }}
              zIndex="2"
              marginLeft={{ base: '0', sm: '5%' }}
              marginTop="5%">
              <Link textDecoration="none" _hover={{ textDecoration: 'none' }}>
                <Image
                  borderRadius="lg"
                  width="500px"
                  height="331px"
                  src={
                    etl
                  }
                  alt="some good alt text"
                  objectFit="contain"
                />
              </Link>
            </Box>
            <Box zIndex="1" width="100%" position="absolute" height="100%">
              <Box
                bgGradient={useColorModeValue(
                  'radial(orange.600 1px, transparent 1px)',
                  'radial(orange.300 1px, transparent 1px)'
                )}
                backgroundSize="20px 20px"
                opacity="0.4"
                height="100%"
              />
            </Box>
          </Box>
          <Box
            display="flex"
            flex="1"
            flexDirection="column"
            justifyContent="center"
            marginTop={{ base: '3', sm: '0' }}>
            <BlogTags tags={['Software Engineering', 'Automation', 'Tools', 'Product Delivery']} />
            <Heading marginTop="1">
              <Link textDecoration="none" _hover={{ textDecoration: 'none' }}>
                Embedded Test Laboratory
              </Link>
            </Heading>
            <Text
              as="p"
              marginTop="2"
              color={useColorModeValue('gray.300', 'gray.200')}
              fontSize="lg">
              We <b>drive</b> and <b>validate</b> the <b>quality</b> of the <b>Firmware and Applications</b> of our printers by assuring that these products <b>meet requirements and delight our customers</b>.
            </Text>
            <BlogAuthor name="Lexmark ETL" date={new Date('2022-07-20')} />
          </Box>
        </Box>

        <Divider marginTop="5" />
        <VStack paddingTop="40px" spacing="2" alignItems="flex-start">
          <Heading as="h2">What We Do</Heading>
          <Text as="p" fontSize="lg" color={'gray.300'}>
            We ensure that embedded firmware and applications are of quality through, Firmware functional testing, Apps functionality and compatibility testing and Integration/Reliability testing.
          </Text>
          <Text as="p" fontSize="lg" color={'gray.300'}>
            We support product delivery, by meeting test commitments and delivering quality firmware and applications &
            continuosly improve test efficiency through automation, tool creation/usage and process improvements.
          </Text>


        </VStack>
      </Container>
    </SlideFade>
  );
};

export default ArticleList;