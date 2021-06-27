import { Connection, Channel, connect } from "amqplib";

import { Logger } from "../utils";

export class RabbitmqServer {
  private conn: Connection;
  private channel: Channel;

  async connection(): Promise<void> {
    this.conn = await connect(
      `amqp://${process.env.AMQP_USER}:${process.env.AMQP_PASS}@${process.env.AMQP_HOST}:${process.env.AMQP_PORT}`
    );
    this.channel = await this.conn.createChannel();
    Logger.info("AMQP server connected!");
    await this.publishInQueue("teste");
  }

  async publishInQueue(message: string) {
    return this.channel.sendToQueue(
      process.env.AMQP_QUEUE,
      Buffer.from(message)
    );
  }
}
