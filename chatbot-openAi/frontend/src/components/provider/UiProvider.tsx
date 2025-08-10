import React from 'react';
import { Box, Flex } from '@chakra-ui/react';
import { Sidebar } from '..';

interface Props {
  children: React.ReactNode;
}

export default function UiProvider({ children }:Props) {
  return (
    <Flex direction="row" mt="6">
      <Sidebar />

      <Box w='100%' p="5" h="calc(100vh - 50px)" mx={{ base: '3', sm: '10', md:'15' }} bg="whiteAlpha.200" borderRadius="3xl">
        <Flex h="full" flexDirection="row">
          <Flex direction="column" flex="1" h="full" p="1">
            {children}
          </Flex>
        </Flex>
      </Box>
    </Flex>
  );
}
