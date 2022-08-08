import {
    Box,
    chakra,
    Flex,
    SimpleGrid,
    Stat,
    StatLabel,
    StatNumber,
    Text,
    useColorModeValue,
  } from '@chakra-ui/react';
  import { ReactNode } from 'react';
  import { BsClock } from 'react-icons/bs';
  import { FiServer } from 'react-icons/fi';
  import { GoLocation } from 'react-icons/go';
  
  interface StatsCardProps {
    title: string;
    stat: string;
    icon: ReactNode;
  }
  function StatsCard(props: StatsCardProps) {
    const { title, stat, icon } = props;
    return (
      <Stat
        px={{ base: 2, md: 4 }}
        py={'5'}
        shadow={'xl'}
        border={'1px solid'}
        borderColor={useColorModeValue('gray.800', 'gray.500')}
        rounded={'lg'}>
        <Flex justifyContent={'space-between'}>
          <Box pl={{ base: 2, md: 4 }}>
            <StatLabel fontWeight={'medium'}>
              {title}
            </StatLabel>
            <StatNumber fontSize={'2xl'} fontWeight={'medium'}>
              {stat}
            </StatNumber>
          </Box>
          <Box
            my={'auto'}
            color={useColorModeValue('gray.800', 'gray.200')}
            alignContent={'center'}>
            {icon}
          </Box>
        </Flex>
      </Stat>
    );
  }
  
  export default function BasicStatistics() {
    return (
      <Box maxW="7xl" mx={'auto'} pt={5} px={{ base: 2, sm: 12, md: 17 }}>
        <chakra.h1
          textAlign={'center'}
          fontSize={'4xl'}
          py={10}
          fontWeight={'bold'}>
          My time with Lexmark has been quite exceptional
        </chakra.h1>
        <Flex justifyContent='center' gap ="10">
          <Box  minW='sm'>
          <StatsCard
          title={'Hours'}
            stat={'320'}
            icon={<BsClock size={'3em'} />}
          />
          </Box>
          <Box maxW='xs'>
          <Text textAlign='justify'>I estimate that the number of hours that I accumulated is more or equal to <Text fontWeight='bold' display='inline' > 320 hours </Text> including the daily standups, programming, meeting and presentation.</Text>
          </Box>
          {/* <StatsCard
            title={'Servers'}
            stat={'1,000'}
            icon={<FiServer size={'3em'} />}
          />
          <StatsCard
            title={'Datacenters'}
            stat={'7'}
            icon={<GoLocation size={'3em'} />}
          /> */}
        </Flex>
        <chakra.h1
          textAlign={'center'}
          fontSize={'4xl'}
          pt={'10rem'}
          fontWeight={'bold'}>
          Documentations
        </chakra.h1>
      </Box>
    );
  }