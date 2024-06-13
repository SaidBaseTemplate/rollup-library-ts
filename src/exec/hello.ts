import inquirer from "inquirer";
import Logger from "@/utils/Logger";

export const helloExec = async () => {
  const logger = new Logger()
  const answer = await inquirer.prompt([
    {
      message: "Hello, how are you?",
      type: "confirm",
      name: "isOver",
      default: "false",
    },
  ]);
  if (answer.isOver) {
    logger.success('Goodbye!')
  } else {
    return;
  }
}
