import { paintText, inputValidation } from "../utils";

export async function soma(number1: number, number2: number): Promise<void> {
  if (!number1 && !number2) {
    const doTheNumber1Exists = await inputValidation(
      "number1",
      "Digite um número: "
    );

    const doTheNumber2Exists = await inputValidation(
      "number2",
      "Digite outro número: "
    );

    const somaOsDoisNumeros =
      parseInt(doTheNumber1Exists.number1) +
      parseInt(doTheNumber2Exists.number2);

    const result =
      somaOsDoisNumeros > 20
        ? paintText(somaOsDoisNumeros.toString(), "red")
        : paintText(somaOsDoisNumeros.toString(), "green");

    console.log(`\n\n${result}`);
  }
}
