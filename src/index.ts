import commander from "commander";
import { config } from "dotenv";

import database from "./database/connection";
import { writeTitle } from "./utils";
import { OperatingSystem } from "./tools";

const os = new OperatingSystem();

config();

database.connection();

writeTitle(process.env.npm_package_name, "red");

commander.version(process.env.npm_package_version);

commander.command("sys-all-users").action(os.getAllSystemUsers);

commander.parse(process.argv);
