import { users } from "systeminformation";

export class OperatingSystem {
  public async getAllSystemUsers(): Promise<void> {
    const usersInfo = await users();
    console.table(usersInfo)
  }
}
