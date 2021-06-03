import inquirer from "inquirer";

export async function inputValidation(
  name: string,
  message: string
): Promise<any> {
  return await inquirer.prompt({
    type: "input",
    name: name,
    message: message,
    validate: (value) =>
      value ? true : "Não é permitido deixar o campo em branco",
  });
}
