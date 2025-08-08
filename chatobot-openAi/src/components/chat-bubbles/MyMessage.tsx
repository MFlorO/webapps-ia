import React from 'react';
import { Box, Flex, Grid } from '@chakra-ui/react';

interface Props {
  text: string;
}

const MyMessage = ({ text }: Props) => {
  return (
    <Grid gridColumnStart={6} gridColumnEnd={13} p={3} borderRadius='lg'>
      <Flex alignItems='center' direction='row-reverse'>
        <Flex alignItems='center' justifyContent='center' h={10} w={10} borderRadius='full' bgColor='green.600' flexShrink={0}>
          F
        </Flex>
      </Flex>
      <Flex pos='relative' ml={3} fontSize='sm' bgColor='black' color='white' opacity={25} pt={3} pb={3} px={4} shadow='md' rounded='xl'>
        <Box>{ text }</Box>
      </Flex>
    </Grid>
  )
}

export default MyMessage;