export class AmqpError extends Error {
  constructor(paramName?: Error) {
    super(`Amqp isn't connected \n${paramName}`);
    this.name = "AmqpError";
  }
}
