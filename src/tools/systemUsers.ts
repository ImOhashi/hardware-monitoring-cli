import si from "systeminformation";
import CliTable from "cli-table";

export class OperatingSystem {
  public async getAllSystemUsers(): Promise<void> {
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

    console.log(usersTable.toString());
  }
}