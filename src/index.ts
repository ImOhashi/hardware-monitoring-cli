import commander from "commander";

commander
  .version(process.env.npm_package_version)
  .description(
    `AUTHORS: ${process.env.npm_package_author}\n\nDESCRIPTION: ${process.env.npm_package_description}`
  )
  .option(
    "-c, --console <name>",
    "Gera uma mensagem no console com o nome passado ao rodar o comando"
  )
  .parse(process.argv);

const options: commander.OptionValues = commander.opts();

if (options.console) console.log(`Hello ${options.console}`);
