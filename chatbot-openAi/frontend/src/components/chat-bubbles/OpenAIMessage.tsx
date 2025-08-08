import React from 'react';
import Markdown from 'react-markdown';
import { Flex, Grid } from '@chakra-ui/react';

interface Props {
  text: string;
}

const GptMessage = ({ text }: Props) => {
  return (
    <Grid gridColumnStart={1} gridColumnEnd={9} p={3} borderRadius='lg'>
      <Flex direction='row' alignItems='start'>
        <Flex alignItems='center' justifyContent='center' h={10} w={10} borderRadius='full' bgColor='green.600' flexShrink={0}>
          G
        </Flex>
      </Flex>
      <Flex pos='relative' ml={3} fontSize='sm' bgColor='black' color='white' opacity={25} pt={3} pb={3} px={4} shadow='md' rounded='xl'>
        <Markdown>{ text }</Markdown>
      </Flex>
    </Grid>
  )
}

export default GptMessage;