import { z } from 'zod';

export const orthographyCheckSchema = z.object({
  prompt: z.string({
    required_error: 'El campo prompt es obligatorio',
    invalid_type_error: 'El prompt debe ser un texto'
  }),
  maxTokens: z.number({
    invalid_type_error: 'maxTokens debe ser un número'
  }).optional()
});
