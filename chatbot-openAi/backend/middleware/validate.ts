import { z } from 'zod';

export function validate(schema: z.ZodTypeAny) {
  return (req: any, res: any, next: any) => {
    const result = schema.safeParse(req.body);
    if (!result.success) {
      const errors = result.error.issues.map((e: z.ZodIssue) => e.message);
      return res.status(400).json({ errors });
    }
    req.body = result.data; 
    next();
  };
}
