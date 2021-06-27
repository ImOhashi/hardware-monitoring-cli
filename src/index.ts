import commander from "commander";
import { config } from "dotenv";

import { RabbitmqServer } from "./broker";
import { writeTitle } from "./utils";
import { OperatingSystem, Battery, Cpu } from "./tools";

const rabbit = new RabbitmqServer();
const os = new OperatingSystem();
const battery = new Battery();
const cpu = new Cpu();

config();

rabbit.connection();

writeTitle(process.env.npm_package_name, "red");

commander.version(process.env.npm_package_version);

commander.command("all-users").action(os.getAllSystemUsers);

commander.command("battery-info").action(battery.getAllBatteryInfo);

commander.command("cpu-info").action(cpu.getAllCpuInfo);
commander.command("cpu-temperature").action(cpu.getCpuTemperature);

commander.parse(process.argv);
