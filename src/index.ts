import commander from "commander";

import { writeTitle } from "./utils";
import { OperatingSystem } from "./tools";

const os = new OperatingSystem();

writeTitle(process.env.npm_package_name, "red");

commander.version(process.env.npm_package_version);

commander.command("sys-users").action(os.getSystemUsers);

commander.parse(process.argv);
