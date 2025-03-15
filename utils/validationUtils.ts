import { ValidationError as ZodValidationError } from 'zod-validation-error';
import { ZodSchema } from 'zod';
import { fromZodError } from 'zod-validation-error';
import { ValidationError } from './errors/ValidationError';

// Transforme une ValidationError de zod en un tableau de détails
export const getDetailsErrorFromZodError = (error: ZodValidationError) => {
  const detailsError = error.details.map(({ path, message }) => ({
    field: path[path.length - 1] as string,
    message: message,
  }));

  return detailsError;
};

// Valide des données avec un schéma Zod et lève une erreur personnalisée si échec
export const validateData = <TBody>(body: unknown, schema: ZodSchema<TBody>) => {
  const result = schema.safeParse(body);
  if (!result.success) {
    const errors = fromZodError(result.error);
    const detailsError = getDetailsErrorFromZodError(errors);
    throw new ValidationError(detailsError);
  }
  return result.data;
};