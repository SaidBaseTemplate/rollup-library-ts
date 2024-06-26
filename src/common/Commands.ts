import { LIBRARY_NAME } from '@/config/config';

export default class Commands {
  main: string;

  constructor() {
    this.main = LIBRARY_NAME;
  }

  /**
   * 对外暴露，获取命令集
   */
  resolve() {
    return {
      hello: {
        alias: '',
        description: 'Ask you how are you.',
        examples: [this.main + 'hello']
      }
    };
  }
}
