import commander from "commander";

import { writeTitle } from "./utils";
import { OperatingSystem } from "./tools";

const os = new OperatingSystem();

writeTitle(process.env.npm_package_name, "red");

commander.version(process.env.npm_package_version);

commander.command("sys-all-users").action(os.getAllSystemUsers);

commander.parse(process.argv);
