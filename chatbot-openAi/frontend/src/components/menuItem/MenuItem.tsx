import React from 'react';
import Link from 'next/link';
import { IMenuItem } from '@/interfaces';
import { Box, Flex, Text } from '@chakra-ui/react';

const MenuItem = ({ icon, title, to, description }: IMenuItem) => {
  return (
    <Link href={to} style={{display:'flex', flexDirection:'row', alignItems:'center', gap:'8px', paddingTop:'5px', paddingBottom:'5px'}}>
      <Box fontSize='2xl' mr='4' color='indigo.400'>{icon}</Box>
      <Flex direction='column' justifyContent='center'>
        <Text fontSize='lg' fontWeight='semibold' color='white'>{title}</Text>
        <Text fontSize='sm' fontStyle='italic' color='gray.400'>{description}</Text>
      </Flex>
    </Link>
  )
}

export default MenuItem;