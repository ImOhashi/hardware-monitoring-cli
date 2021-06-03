import { paintText, inputValidation } from "../utils";

export async function consoleTest(name, secondName, options) {
  if (!name && !secondName) {
    const isName = await inputValidation("name", "Digite um nome: ");

    const isSecondName = await inputValidation(
      "secondName",
      "Digite um sobrenome: "
    );

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
}
