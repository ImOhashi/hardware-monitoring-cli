import { paintText, inputValidation } from "../utils";

export async function soma(number1: number, number2: number): Promise<void> {
  if (!number1 && !number2) {
    const doTheNumber1Exists = await inputValidation(
      "number1",
      "Mano entra com um número ae rapidim: "
    );

    const doTheNumber2Exists = await inputValidation(
      "number2",
      "Mano entra com o segundo número ae namoral: "
    );

    const somaOsDoisNumeros = number1 + number2;

    let paintResult;

    if (somaOsDoisNumeros > 20) {
      paintResult = paintText(somaOsDoisNumeros.toString(), "red");
    } else {
      paintResult = paintText(somaOsDoisNumeros.toString(), "green");
    }

    console.log(`\n\n${paintText}`);
  }
}
