import React from 'react';
import { useFormStatus } from 'react-dom';
import { Button, Input, Skeleton, Spinner, Textarea, VStack } from '@chakra-ui/react';

const FormContent = () => {

  const { pending } = useFormStatus();

  return (
    <VStack align="stretch" gap={4}>
      
      {pending && <Skeleton h='480px' w='512px' />}

      <Input
        type="file"
        name="imageFile"
        placeholder="image"
        accept="image/*"
        p={1}
        bg="white"
      />

      <Textarea placeholder="Ej: Estilo moderno minimalista" name='prompt' resize="vertical" rows={4} />

      <Button colorScheme="teal" type="submit" disabled={pending}>
      {
        pending 
        ? <Spinner size="sm" mr={2} /> 
        : "Enviar"
      }
      </Button>
    </VStack>
  )
}

export default FormContent;