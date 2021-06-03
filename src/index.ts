import commander from "commander";
import inquirer from "inquirer";

import { writeTitle, paintText } from "./utils";

writeTitle(process.env.npm_package_name, "red");

commander
  .version(process.env.npm_package_version)
  .command("console [name] [secondName]")
  .option("-c, --color [name]", "Color of name")
  .action(async (name, secondName, options) => {
    if (!name && !secondName) {
      const isName = await inquirer.prompt({
        type: "input",
        name: "name",
        message: "Digite um nome: ",
        validate: (value) =>
          value ? true : "Não é permitido deixar o campo em branco",
      });

      const isSecondName = await inquirer.prompt({
        type: "input",
        name: "secondName",
        message: "Digite um sobrenome: ",
        validate: (value) =>
          value ? true : "Não é permitido deixar o campo em branco",
      });

      const paintedName = paintText(
        isName.name,
        `${options.color ? options.color : "white"}`
      );

      const paintedSecondName = paintText(
        isSecondName.secondName,
        `${options.color ? options.color : "white"}`
      );

      console.log(`${paintedName} ${paintedSecondName}`);
    }
  })
  .parse(process.argv);
