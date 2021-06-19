import { battery } from "systeminformation";

export class Battery {
  public async getAllBatteryInfo(): Promise<void> {
    const batteryInfo = await battery();
    console.table(batteryInfo)
  }
}
