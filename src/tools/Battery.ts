import { battery } from "systeminformation";

import rabbit from "../broker/rabbitmq";

export class Battery {
  public async getAllBatteryInfo(): Promise<void> {
    const batteryInfo = await battery();

    await rabbit.publishInQueue(JSON.stringify(batteryInfo));

    console.table(batteryInfo);
  }
}
