import si from "systeminformation";
import CliTable from "cli-table";

import { Redis } from "../cache";

export class OperatingSystem {
  public async getAllSystemUsers(): Promise<void> {
    try {
      const redis = new Redis();

      const cachedUsers = await redis.get("local-users");

      if (cachedUsers) {
        console.log(cachedUsers);
        return;
      } else {
        const users = await si.users();

        const usersTable = new CliTable({
          head: ["user", "tty", "time", "ip", "date"],
        });

        users.forEach((value) => {
          usersTable.push([
            value.user,
            value.tty,
            value.time,
            value.ip,
            value.date,
          ]);
        });

        redis.set("local-users", usersTable, 15 * 60);

        console.log(usersTable.toString());
      }
    } catch (err) {
      throw new Error(err);
    }
  }
}
