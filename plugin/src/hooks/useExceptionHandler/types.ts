export interface UseExceptionHandlerType {
  message: string | null;
  statusCode: number | null;
  error: string | null;
}

export interface ExceptionHandlerContextInterface
  extends UseExceptionHandlerType {
  handleException: (exception: UseExceptionHandlerType) => void;
}
