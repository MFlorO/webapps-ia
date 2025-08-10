"use client"
import React, { useState } from 'react'
import { TypingLoader, AIMessage, MyMessage, TextMessageBox } from '@/components';
import { Flex, Grid } from '@chakra-ui/react';
import { chatWithGemini } from '@/action';

interface IMessage {
  text: string;
  isAI: boolean;
}

const ChatbotGeminiPage = () => {

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [messages, setMessages] = useState<IMessage[]>([]);

  const handlePost = async (prompt:string) => {

    setIsLoading(true);
    setMessages((prev:IMessage[]) => [...prev, {text:prompt, isAI:false}]);

    const { ok, data } = await chatWithGemini(prompt)

    if ( !ok ) {
      setMessages( (prev) => [...prev, { text: 'No se pudo realizar la corrección', isAI: true }] );
    } else {
      setMessages( (prev) => [...prev, { 
        text: data, isAI: true,  
        info: {data}
      }])
    }

    setIsLoading(false)
  }

  return (
    <Flex direction='column' flex='1 1 auto' flexShrink='0' borderRadius='20px' bgColor='rgba(255, 255, 255, 0.05)' h='100%' p='1rem'>
      <Flex direction='column' h='100%' mb='1rem' overflowX='auto' overflow='scroll'>
        <Grid gridTemplateColumns={12} gapY={2}>
          <AIMessage text='Hola, puedes escribir tu texto en español, y te ayudo con las traducciones' />
          {
            messages?.map( (message, index) => (
              message.isAI
              ? <AIMessage key={index} text={message.text} />
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

export default ChatbotGeminiPage;