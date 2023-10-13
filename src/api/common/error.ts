export class ServiceUnavailableError extends Error {
  constructor(message: string, options?: ErrorOptions) {
    super(message, options)
  }
}

export class NotImplementedError extends Error {
  constructor(message: string, options?: ErrorOptions) {
    super(message, options)
  }
}
