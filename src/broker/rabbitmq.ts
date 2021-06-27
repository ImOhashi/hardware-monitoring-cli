import amqp from "amqplib";

import { AmqpError } from "../error";

export class RabbitmqServer {
  private channel: amqp.Channel;

  public async connect(): Promise<void> {
    try {
      const conn = await amqp.connect(
        `amqp://${process.env.AMQP_USER}:${process.env.AMQP_PASS}@${process.env.AMQP_HOST}:${process.env.AMQP_PORT}`
      );
      console.log("Queue connected!");

      this.channel = await conn.createChannel();
      console.log("Queue created!");
    } catch (err) {
      throw new AmqpError(err);
    }
  }

  public async publishInExchange(
    exchange: string,
    routingKey: string,
    message: string
  ): Promise<boolean> {
    return this.channel.publish(exchange, routingKey, Buffer.from(message));
  }
}
