import commander from "commander";

import { writeTitle } from "./utils";
import { consoleTest } from "./tools";

writeTitle(process.env.npm_package_name, "red");

commander
  .version(process.env.npm_package_version)
  .command("console [name] [secondName]")
  .option("-c, --color [name]", "Color of name")
  .action(consoleTest)
  .parse(process.argv);
