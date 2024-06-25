export default class Commands {
  main: string;

  constructor() {
    this.main = 'rollup-library-ts';
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
