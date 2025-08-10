"use client"
import React, { FormEvent, useState } from 'react';
import { Button, Flex, Input } from '@chakra-ui/react';
import { FaRegPaperPlane } from "react-icons/fa6";

interface Props{
    onSendMessage: (message:string) => void;
    placeholder: string;
    disableCorrections?: boolean;
}

const TextMessageBox = ({ onSendMessage, placeholder, disableCorrections=false }:Props) => {

    const [message, setMessage] = useState('')

    const handleOnSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        onSendMessage(message);
        console.log('messaage: ', message)
        setMessage('')
    }

  return (
    <form 
    onSubmit={handleOnSubmit} 
    style={{
        display:'flex', flexDirection:'row', alignItems:'center', height:'3rem', justifyContent:'space-between',
        borderRadius:'0.75rem', backgroundColor:'white', width:'100%', paddingLeft:'0.5rem', paddingRight:'0.5rem'
    }}
    >
        <Flex w='70%' h='100%'>
            <Input 
                type='text' name='message' value={message} placeholder={placeholder} onChange={(e) => setMessage( e.target.value )}
                autoFocus autoComplete={disableCorrections ? 'off' : 'on'} autoCorrect={disableCorrections ? 'off' : 'on'} spellCheck={disableCorrections ? 'true' : 'false'}
                display='flex' w='100%' h='100%' borderRadius='xl' color='gray.800' pl='4' border='none'
                _focus={{outline:'none', border:'1px solid indigo.300' }}   
            />
        </Flex>

        <Button w='10%' className='btn-primary' type='submit'>
            <span className='mr-1'>Enviar</span>
            <FaRegPaperPlane />
        </Button>   

    </form>
  )
}

export default TextMessageBox;