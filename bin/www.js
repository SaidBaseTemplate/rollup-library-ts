#!/usr/bin/env node
import { program } from 'commander';
import chalk from 'chalk';
import inquirer from 'inquirer';

class Commands {
    constructor() {
        this.main = "rollup-library-ts";
    }
    /**
     * 对外暴露，获取命令集
     */
    resolve() {
        return {
            hello: {
                alias: "",
                description: "Ask you how are you.",
                examples: [this.main + "hello"]
            },
        };
    }
}

var name = "rollup-library-ts";
var version = "0.0.1";
var description = "rollup library ts template";
var main$1 = "bin/www.js";
var type = "module";
var scripts = {
	dev: "rimraf bin && rollup -c rollup.config.js -w",
	build: "rimraf bin && rollup -c rollup.config.js",
	link: "npm unlink -g rollup-library-ts && npm link"
};
var bin = {
	"rollup-library-ts": "./bin/www.js"
};
var keywords = [
	"rollup",
	"ts",
	"library",
	"template",
	"base"
];
var repository = {
	type: "git",
	url: "https://github.com/SaidBaseTemplate/rollup-library-ts.git"
};
var author = "guizimo";
var license = "MIT";
var devDependencies = {
	"@babel/core": "^7.24.7",
	"@babel/plugin-proposal-class-properties": "^7.18.6",
	"@babel/preset-env": "^7.24.7",
	"@rollup/plugin-alias": "^5.1.0",
	"@rollup/plugin-babel": "^6.0.4",
	"@rollup/plugin-commonjs": "^26.0.1",
	"@rollup/plugin-json": "^6.1.0",
	"@types/inquirer": "^9.0.7",
	rimraf: "^5.0.7",
	rollup: "^4.18.0",
	"rollup-plugin-typescript2": "^0.36.0",
	tslib: "^2.6.3",
	typescript: "^5.4.5"
};
var dependencies = {
	chalk: "^5.3.0",
	commander: "^12.1.0",
	inquirer: "^9.2.23"
};
var myPkg = {
	name: name,
	version: version,
	description: description,
	main: main$1,
	type: type,
	scripts: scripts,
	bin: bin,
	keywords: keywords,
	repository: repository,
	author: author,
	license: license,
	devDependencies: devDependencies,
	dependencies: dependencies
};

/**
 * 打印
 * @param type 类型
 * @param msg 信息
 * @param bold 是否加粗
 */
const chalkLog = (type, msg, bold) => {
    let color = "yellow";
    if (type === "success")
        color = "green";
    else if (type === "error")
        color = "red";
    // @ts-ignore
    const handler = bold ? chalk.bold[color](msg) : chalk[color](msg);
    return console.log(handler);
};
class Logger {
    success(msg, bold = false) {
        return chalkLog("success", msg, bold);
    }
    warn(msg, bold = false) {
        return chalkLog("warn", msg, bold);
    }
    error(msg, bold = false) {
        return chalkLog("error", msg, bold);
    }
}

const helloExec = async () => {
    const logger = new Logger();
    const answer = await inquirer.prompt([
        {
            message: "Hello, how are you?",
            type: "confirm",
            name: "isOver",
            default: "false",
        },
    ]);
    if (answer.isOver) {
        logger.success('Goodbye!');
    }
    else {
        return;
    }
};

var execs = {
    hello: helloExec
};

function main() {
    // 初始化日志
    const logger = new Logger();
    // 初始化命令行参数
    program.name("rollup-library-ts").description("A cli tool for library");
    // 设置命令在前，选项在后
    program.version("rollup-library-ts" + "@" + myPkg.version).usage("<command> [option]");
    // 初始化命令行参数
    const commands = new Commands();
    const commandResolves = commands.resolve();
    for (let key in commandResolves) {
        const { alias, description } = commandResolves[key];
        program
            .command(key) // 注册命令
            .alias(alias) // 配置命令别名
            .description(description) // 配置命令描述
            .action(function (name, { args }) {
            try {
                // 除了上述的命令，其他统统匹配到这里
                if (key === "*")
                    return logger.error(description);
                // @ts-ignore
                return execs[key](args);
            }
            catch (e) {
                logger.error('Unrecognized commands "' + key + '".');
            }
        });
    }
    // 解析命令行参数
    // @ts-ignore
    program.parse(program.argv);
}
main();
