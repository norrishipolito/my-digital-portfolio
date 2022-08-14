import { ReactNode, ReactElement, useRef } from 'react';
import {
  Stack,
  Container,
  Box,
  Flex,
  Text,
  Heading,
  SimpleGrid,
  Icon,
  SlideFade,
  useDisclosure,
} from '@chakra-ui/react';
import { FaFlask, FaAward } from 'react-icons/fa';
import { RiHandHeartLine, RiCommunityFill, RiUserHeartLine } from 'react-icons/ri'
import { GiFlexibleStar } from 'react-icons/gi'
import { useInViewport } from 'react-in-viewport';

export default function StatsGridWithImage() {
  const ref = useRef(null)
  const { inViewport } = useInViewport(
    ref,
    { rootMargin: "-200px" },
    { disconnectOnLeave: false },
    {}
  )
  return (
    <SlideFade delay={0.3} in={inViewport} offsetY='20px'>
      <Box position={'relative'} ref={ref}>
        <Flex
          flex={1}
          zIndex={0}
          display={{ base: 'none', lg: 'flex' }}
          backgroundImage="url('/templates/stats-grid-with-image.png')"
          backgroundSize={'cover'}
          backgroundPosition="center"
          backgroundRepeat="no-repeat"
          position={'absolute'}
          width={'50%'}
          insetY={0}
          right={0}>
          <Flex
            // bgGradient={'linear(to-r, #406882 10%, transparent)'}
            w={'full'}
            h={'full'}
          />
        </Flex>
        <Container maxW={'7xl'} zIndex={10} position={'relative'} id='companyprofile'>
          <Stack direction={{ base: 'column', lg: 'row' }}>
            <Stack
              flex={1}
              justify={{ lg: 'center' }}
              py={{ base: 4, md: 20, xl: 60 }}>
              <Box mb={{ base: 8, md: 5 }}>
                <Text
                  fontFamily={'heading'}
                  fontWeight={700}
                  textTransform={'uppercase'}
                  mb={3}
                  fontSize={'xl'}
                  color={'#1a374d'}>
                  About Lexmark
                </Text>
                <Heading
                  mb={5}
                  fontSize={{ base: '3xl', md: '5xl' }}>
                  Overview
                </Heading>
                <Text fontSize={'xl'} color={'gray.300'}>
                  Lexmark creates smart IoT print devices and cloud-native solutions that help customers worldwide achieve their vision of print simplicity, security, savings and sustainability. Combining innovative technology with deep industry expertise, Lexmark serves customers in retail, financial services, healthcare, manufacturing, education, government and more. A recognized industry leader in print hardware, services and security, Lexmark is also lauded for our global corporate citizenship and commitment to sustainability.
                </Text>
              </Box>
              <Box mt={{ base: 8, md: 20 }} >
                <Heading
                  mb={5}
                  fontSize={{ base: '3xl', md: '5xl' }}>
                  Lexmark Values
                </Heading>

              </Box>
              <SimpleThreeColumns />
            </Stack>
          </Stack>
        </Container>
      </Box>
    </SlideFade>
  );
}

const StatsText = ({ children }: { children: ReactNode }) => (
  <Text as={'span'} fontWeight={700} color={'white'}>
    {children}
  </Text>
);

const stats = [
  {
    title: '1M+',
    content: (
      <>
        <StatsText>Devices</StatsText> Under Contract
      </>
    ),
  },
  {
    title: '6,500+',
    content: (
      <>
        Delivered by <StatsText>Partners</StatsText>
      </>
    ),
  },
];
interface FeatureProps {
  title: string;
  text: string;
  icon: ReactElement;
}

const Feature = ({ title, text, icon }: FeatureProps) => {
  return (
    <Stack>
      <Flex
        w={16}
        h={16}
        align={'center'}
        justify={'center'}
        color={'white'}
        rounded={'full'}
        bg={'gray.100'}
        mb={1}>
        {icon}
      </Flex>
      <Text color={'#363640'} fontWeight={600}>{title}</Text>
      <Text color={'gray.300'}>{text}</Text>
    </Stack>
  );
};

export function SimpleThreeColumns() {
  return (
    <Box p={4}>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
        <Feature
          icon={<Icon as={FaFlask} color={'#00c425'} w={10} h={10} />}
          title={'INNOVATION'}
          text={
            'We innovate daily, striving to continuously improve what we do and how we do it.'
          }
        />
        <Feature
          icon={<Icon as={FaAward} color={'#00c425'} w={10} h={10} />}
          title={'EXCELLENCE'}
          text={
            'We deliver products and  services with exceptional quality.'
          }
        />
        <Feature
          icon={<Icon as={GiFlexibleStar} color={'#00c425'} w={10} h={10} />}
          title={'AGILITY'}
          text={
            'Our creative, flexible workplace enables us to adapt quickly and move rapidly to address the evolving needs of our customers.'
          }
        />
        <Feature
          icon={<Icon as={RiUserHeartLine} color={'#00c425'} w={10} h={10} />}
          title={'INTEGRITY'}
          text={
            'We are honest, courageous and transparent in all our interactions, doing what we say and saying what we do.'
          }
        />
        <Feature
          icon={<Icon as={RiCommunityFill} color={'#00c425'} w={10} h={10} />}
          title={'COMMUNITY'}
          text={
            'We generously support both our Lexmark family and the communities in which we live and work.'
          }
        />
        <Feature
          icon={<Icon as={RiHandHeartLine} color={'#00c425'} w={10} h={10} />}
          title={'RESPECT'}
          text={
            'Our inclusive culture fosters the value of diverse input and mutual respect.'
          }
        />
      </SimpleGrid>
    </Box>
  );
}