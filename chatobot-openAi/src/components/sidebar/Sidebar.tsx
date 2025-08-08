import { Box, Flex, Heading, Text } from '@chakra-ui/react';
import { menuRoutes } from '../menuItem/routes';
import MenuItem from '../menuItem/MenuItem';

export default function Sidebar() {
  return (
    <Box flexDirection="column" w="370px" minH="calc(100vh - 3.0rem)" ml="5" p="5" bg="whiteAlpha.200" borderRadius="3xl" display={{ base: 'none', sm: 'flex' }}>
      <Heading bgClip="text" color="transparent" fontWeight="bold" fontSize={{ base: 'lg', lg: '3xl' }} bgGradient="linear(to-br, white, rgba(255,255,255,0.5))">
        ReactGPT
        <Text as="span" color="indigo.500">.</Text>
      </Heading>

      <Text fontSize="xl">Bienvenido</Text>

      <Flex h='3px' my="3" borderColor="gray.700" />

      { menuRoutes?.map( (itemMenu) => <MenuItem key={itemMenu.to} {...itemMenu}  /> ) }

    </Box>
  );
}
