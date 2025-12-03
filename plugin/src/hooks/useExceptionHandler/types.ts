export interface ExceptionHandlerType {
  message: string | null;
  statusCode?: number | null;
  error?: string | null;
  name?: string | null;
  stack?: string | null;
}

export interface ExceptionHandlerContextInterface extends ExceptionHandlerType {
  handleException: (exception: ExceptionHandlerType) => void;
}
