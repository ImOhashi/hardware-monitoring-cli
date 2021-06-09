import { red } from "chalk";
import { paintText, inputValidation } from "../utils";

export async function soma(number1: number, number2: number): Promise<void> {
  if (!number1 && !number2) {
    const doTheNumber1Exists = await inputValidation(
      "number1",
      "Please enter with a number: "
    );

    const doTheNumber2Exists = await inputValidation(
      "number2",
      "Now, other number: "
    );

    const somaOsDoisNumeros =
      parseInt(doTheNumber1Exists.number1) +
      parseInt(doTheNumber2Exists.number2);

    const paintResult =
      somaOsDoisNumeros >= 20
        ? paintText(somaOsDoisNumeros.toString(), "red")
        : paintText(somaOsDoisNumeros.toString(), "cyan");

    console.log(`\n\n${paintResult}`);
  }
}
