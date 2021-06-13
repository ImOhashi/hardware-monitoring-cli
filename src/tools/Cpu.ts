import { cpu, cpuTemperature } from "systeminformation";

export class Cpu {
  public async getAllCpuInfo(): Promise<void> {
    const cpuInfo = await cpu();

    delete cpuInfo.flags;

    console.table(cpuInfo);
  }

  public async getCpuTemperature(): Promise<void> {
    const cpuTemperatureInfo = await cpuTemperature();

    console.table(cpuTemperatureInfo);
  }
}
