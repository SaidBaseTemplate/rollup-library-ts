import inquirer from 'inquirer';
import Logger from '@/utils/Logger';
import { endMessage, errorMessage, welcomeMessage } from '@/config/message';

// 初始化日志服务
const logger = new Logger();

export const helloExec = async () => {
  try {
    welcomeMessage();
    await hello();
    endMessage();
  } catch (e) {
    logger.error(e.message);
    errorMessage();
    process.exit(0);
  }
};

const hello = async () => {
  const answer = await inquirer.prompt([
    {
      message: 'Hello, how are you?',
      type: 'confirm',
      name: 'isOver',
      default: 'false'
    }
  ]);
  if (answer.isOver) {
    logger.success('Goodbye!');
  } else {
    return;
  }
};
