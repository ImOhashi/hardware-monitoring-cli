import commander from "commander";

import { writeTitle } from "./utils";
import { consoleTest, soma } from "./tools";

writeTitle(process.env.npm_package_name, "red");

commander.version(process.env.npm_package_version);

commander
  .command("console [name] [secondName]")
  .option("-c, --color [name]", "Color of name")
  .action(consoleTest);

commander
  .command("soma [number1] [number2]")
  .action(soma)

commander.parse(process.argv);
