"use client";
import React from "react";
import { useFormState } from "react-dom";
import { Box, Heading, Image } from "@chakra-ui/react";
import { createPrediction, getPrediction } from "@/server-actions/createPrediction.server-action";
import FormContent from "./FormContent";
import { sleep } from "@/utils/sleep";
import { IPrediction, IPredictionStatus } from "@/interfaces/form.interfaces";

const Form = () => {

  const [state, formAction] = useFormState<IPrediction | null, FormData>(handleSubmit, null);

  function handleSubmit(_state: null | IPrediction, formData: FormData): Promise<IPrediction> {
    return (async () => {
      let prediction = await createPrediction(formData);

      while ([IPredictionStatus.processing, IPredictionStatus.starting].includes(prediction.status)) {
        await sleep(4000);
        prediction = await getPrediction(prediction.id);
      }

      return prediction;
    })();
  }

  return (
    <form style={{maxWidth:'600px', padding:'30px', marginLeft:'auto', marginRight:'auto'}} action={formAction}>

      { 
        state?.output && 
        <Box mt={6}>
          <Heading size="md" mb={2}>Resultado:</Heading>
          <Image alt='Previsualización del render' src={state?.output[0]} /> 
        </Box>
      }

      <Heading mb={6} size="lg" textAlign="center">Rediseñá tu espacio con IA</Heading>
       
      <FormContent />
    </form>
  );
};

export default Form;
