"use client";
import { FormEvent, useRef, useState } from 'react';
import { Box, Button, Flex, Input, Text } from '@chakra-ui/react';
import { FaRegPaperPlane } from "react-icons/fa6";

interface Props {
  onSendMessage: (message: string)=>void;
  placeholder?: string;
  disableCorrections?: boolean;
  accept?: string; // image/*
}


const TextMessageBoxFile = ({ onSendMessage, placeholder, disableCorrections = false, accept }: Props) => {

  const [message, setMessage] = useState('');

  const [selectedFile, setSelectedFile] = useState<File | null>()
  const inputFileRef = useRef<HTMLInputElement>(null);

  const handleSendMessage = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if ( message.trim().length === 0 ) return;

    onSendMessage( message );
    setMessage('');
  }

  return (
    <form
      onSubmit={ handleSendMessage }
      style={{display:"flex", flexDirection:"row", alignItems:"center", height:'20px', borderRadius:'80px', backgroundColor:'white', width:'100%', paddingLeft:'1rem', paddingRight:'1rem'}}
    >
      <Box mr={3}>
        <Button
          type="button"
          className="flex items-center justify-center text-gray-400 hover:text-gray-600"
          onClick={ () => inputFileRef.current?.click() }
        >
           
        </Button>

        <input 
          type="file" 
          ref={ inputFileRef }
          accept={ accept } 
          onChange={ (e) => setSelectedFile( e.target.files?.item(0) ) }
          hidden
      />
      </Box>



      <Flex flexGrow={1}>
        <Flex pos='relative' w='100%'>
          <Input 
            type="text" 
            autoFocus
            name="message"
            className="  text-gray-800 focus:outline-none focus:border-indigo-300 "
            placeholder={ placeholder }
            autoComplete={ disableCorrections ? 'on': 'off' }
            autoCorrect={ disableCorrections ? 'on': 'off' }
            spellCheck={ disableCorrections ? 'true': 'false' }
            value={ message }
            onChange={ (e) => setMessage( e.target.value ) }
            display='flex'
            w='100%'
            h={10}
            borderRadius='80px'
            pl={4}
            color='gray.800'
          />
        </Flex>
      </Flex>


      <Box ml={4}>
          <Button 
            className="btn-primary"
            disabled={ !selectedFile }
          >
            {
              ( !selectedFile )
               ? <Text mr={2}>Enviar</Text>
               : <Text mr={2}>{ selectedFile.name.substring(0,10) + '...' }</Text>
            }
               <FaRegPaperPlane />
          </Button>
      </Box>

    </form>
  )
}

export default TextMessageBoxFile;