import si from "systeminformation";
import CliTable from "cli-table";

export class OperatingSystem {
  public getSystemUsers() {
    return si.users().then((data) => {
      const usersTable = new CliTable({
        head: ["user", "tty", "time", "ip", "date"],
      });

      data.forEach((value) => {
        usersTable.push([
          value.user,
          value.tty,
          value.time,
          value.ip,
          value.date,
        ]);
      });

      console.log(usersTable.toString());
    });
  }
}
