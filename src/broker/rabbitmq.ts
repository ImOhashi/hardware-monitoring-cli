import { Connection, Channel, connect } from "amqplib";

import { Logger } from "../utils";
import { AmqpError } from "../error";
import { AmqpExchange } from "./amqpExchange";

export class RabbitmqServer {
  private conn: Connection;
  private channel: Channel;

  async connection(): Promise<void> {
    try {
      this.conn = await connect(
        `amqp://${process.env.AMQP_USER}:${process.env.AMQP_PASS}@${process.env.AMQP_HOST}:${process.env.AMQP_PORT}`
      );
      this.channel = await this.conn.createChannel();
      Logger.info("AMQP server connected!");
    } catch (err) {
      throw new AmqpError(err);
    }
  }

  async publishInExchange(
    routingKey: string,
    message: string
  ): Promise<boolean> {
    return this.channel.publish(
      AmqpExchange.DIRECT,
      routingKey,
      Buffer.from(message)
    );
  }

  async publishInQueue(message: string) {
    return this.channel.sendToQueue(
      process.env.AMQP_QUEUE,
      Buffer.from(message)
    );
  }
}
