import { ApiResponse } from '@/types/apiResponse';

export const createResponse = <TData>(
  data: TData,
  message: string,
  success: boolean = true
): ApiResponse<TData> => {
  return {
    success,
    message,
    data,
  };
};