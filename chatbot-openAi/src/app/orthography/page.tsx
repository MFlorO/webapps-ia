import React from 'react'
import { TypingLoader, GptMessage, MyMessage, TextMessageBox } from '@/components';
import { Box, Flex, Grid } from '@chakra-ui/react';

interface IMessage {
  text: string;
  isOpenAI: boolean;
}

const OrthographyPage = () => {

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [messages, setMessages] = useState<IMessage[]>([]);

  const handlePost = async (text:string) => {

    setIsLoading(true);
    setMessages((prev) => [...prev, {text:text, isOpenAI:false}]);

    //TODO: UseCase

    setIsLoading(false)

    //TODO: Añadir mensaje isOpenAI en true
  }

  return (
    <Flex direction='column' flex='1 1 auto' flexShrink='0' borderRadius='20px' bgColor='rgba(255, 255, 255, 0.05)' h='100%' p='1rem'>
      <Flex direction='column' h='100%' mb='1rem' overflowX='auto' overflow='scroll'>
        <Grid gridTemplateColumns={12} gapY={2}>
          <GptMessage text='Hola, puedes escribir tu texto en español, y te ayudo con las traducciones' />
          {
            messages?.map( (message, index) => (
              message.isOpenAI
              ? <OpenAIMessage key={index} text='Esto es OpenAI' />
              : <MyMessage key={index} text={message.text} />
            ))
          }
          {
            isLoading &&
            <Grid gridColumnStart={1} gridColumnEnd={12} className='fade-in'>
              <TypingLoader />
            </Grid>
          }
        </Grid>
      </Flex>
      <Flex>
        <TextMessageBox onSendMessage={handlePost} placeholder='Escribe aquí lo que deseas' disableCorrections />
      </Flex>
    </Flex>
  )
}

export default OrthographyPage;