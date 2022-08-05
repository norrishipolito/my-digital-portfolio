import {
  Box,
  Container,
  Heading,
  SimpleGrid,
  Icon,
  Text,
  Stack,
  HStack,
  VStack,
} from '@chakra-ui/react';
import { CheckIcon } from '@chakra-ui/icons';

// Replace test data with your own
const features =  [
    {
      id: 1,
      title: '1st Week',
      text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam.',
    },
    {
      id: 2,
      title: '2nd Week',
      text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam.',
    },
    {
      id: 3,
      title: '3rd Week',
      text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam.',
    },
    {
      id: 4,
      title: '4th Week',
      text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam.',
    },
    {
      id: 5,
      title: '5th Week',
      text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam.',
    }
  ]

export default function GridListWithHeading() {
  return (
    <Box p={4}>
      <Stack spacing={4} as={Container} maxW={'4xl'} textAlign={'center'}>
        <Heading fontSize={'3xl'}>Weekly Activities</Heading>
        <Text color={'white'} fontSize={'xl'}>
          Just a summary of what I did at Lexmark in a week
        </Text>
      </Stack>

      <Container maxW={'6xl'} mt={10}>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10}>
          {features.map((feature) => (
            <HStack key={feature.id} align={'top'}>
              <Box color={'green.400'} px={2}>
                <Icon as={CheckIcon} />
              </Box>
              <VStack align={'start'}>
                <Text fontWeight={600}>{feature.title}</Text>
                <Text color={'gray.300'}>{feature.text}</Text>
              </VStack>
            </HStack>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
}