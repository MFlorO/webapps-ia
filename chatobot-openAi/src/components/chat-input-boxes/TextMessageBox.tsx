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

    const handleSendMessage = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setMessage('')
    }

  return (
    <form 
    onSubmit={handleSendMessage} 
    style={{display:'flex', flexDirection:'row', alignItems:'center', height:'20px', 
        borderRadius:'70px', backgroundColor:'white', width:'100%', paddingLeft:'1rem', paddingRight:'1rem'
    }}
    >
        <Flex flexGrow='revert'>
            <Flex pos='relative' w='100%'>
                <Input 
                    type='text' name='message' placeholder={placeholder} autoFocus 
                    autoComplete={disableCorrections ? 'off' : 'on'} autoCorrect={disableCorrections ? 'off' : 'on'} spellCheck={disableCorrections ? 'true' : 'false'}
                    display='flex' w='100%' borderRadius='xl' color='gray.800' pl='4' h='10%'  
                    _focus={{outline:'none', border:'1px solid indigo.300' }}
                />
            </Flex>
        </Flex>

        <Flex ml='4'>
            <Button className='btn-primary'>
                <span className='mr-2'>Enviar</span>
                <FaRegPaperPlane />
            </Button>   
        </Flex>

    </form>
  )
}

export default TextMessageBox;