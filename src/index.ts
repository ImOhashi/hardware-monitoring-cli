import commander from "commander";

import { writeTitle } from "./utils";
import { OperatingSystem, Battery } from "./tools";

const os = new OperatingSystem();
const battery = new Battery();

writeTitle(process.env.npm_package_name, "red");

commander.version(process.env.npm_package_version);

commander.command("all-users").action(os.getAllSystemUsers);

commander.command("battery-info").action(battery.getAllBatteryInfo);

commander.parse(process.argv);
