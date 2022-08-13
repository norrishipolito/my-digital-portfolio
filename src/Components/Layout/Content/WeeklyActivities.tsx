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
      text: 'My first week at lexmark was all about introductions to the team and company. Learning what the team is doing and getting to know the stakeholder for my assigned project which is for the Penetration Test Laboratory Information System. ',
    },
    {
      id: 2,
      title: '2nd Week',
      text: 'I was given my first task which is to research about what is Software Engineering, SCRUM, Agile and tools to use for the project. Also, I created a database design specifically for the data that we need to fetch and I started coding for the project using ASP.NET MVC framework while studying the ADO.NET framework.',
    },
    {
      id: 3,
      title: '3rd Week',
      text: 'For my 3rd week, I continued working for the implementation of the database design and integrating the job scheduling for the application. So, I studied QUARTZ.NET for the job scheduling and I added some logging features in the application for output testing purposes.',
    },
    {
      id: 4,
      title: '4th Week',
      text: 'Lexmark held its New Employee Orientation program for almost 2 days, then I had my application demo with the stakeholder. Afterwards, I had to update the changes needed for the application.',
    },
    {
      id: 5,
      title: '5th Week',
      text: 'The week started with weekly check-up with my mentor which is all about what I made and challenges I faced during making the implemented application. Then, the Scan Results from penetration testing was introduced and I had to make the database design of the results and start implementing the task which is parsing the text file and saving it to the database.',
    },
    {
      id: 6,
      title: '6th Week',
      text: 'I finished the parsing and saving the text file for the regular scan which is requested by the stakeholder, then I had my demo of what I made. We had our department meeting and for the rest of the week, I continued working with the other scan results.',
    }
  ]

export default function GridListWithHeading() {
  return (
    <Box p={4}>
      <Stack spacing={4} as={Container} maxW={'4xl'} textAlign={'center'}>
        <Heading fontSize={'3xl'}>Weekly Activities</Heading>
        <Text color={'white'} fontSize={'xl'}>
        A rundown of my work experience at Lexmark
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
                <Text color={'gray.300'}>{feature.text} </Text>
              </VStack>
            </HStack>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
}