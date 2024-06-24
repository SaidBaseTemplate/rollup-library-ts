
<p align="center" style="font-size: 30px; font-weight: bold">rollup-library-ts</p>

<p align="center">
  <a href="https://github.com/SaidBaseTemplate/rollup-library-ts"><img src="https://img.shields.io/badge/Packing-Rollup-FF3333
" alt="Rollup"></a>
  <a href="hhttps://github.com/SaidBaseTemplate/rollup-library-ts"><img src="https://img.shields.io/badge/Language-Typescript-3078C6
" alt="Language"></a>
  <a href="https://github.com/SaidBaseTemplate/rollup-library-ts/blob/master/LICENSE"><img src="https://img.shields.io/github/license/SaidBaseTemplate/rollup-library-ts
" alt="License"></a>
<a href="hhttps://github.com/SaidBaseTemplate/rollup-library-ts"><img src="https://img.shields.io/github/stars/SaidBaseTemplate/rollup-library-ts" alt="Stars"></a>
</p>

## ✨ 介绍
`rollup-library-ts` 是一个基于 `Rollup` 和 `TypeScript` 的项目模板，可用于快速开发命令行工具、库、插件等。该模板与 `said-cli` 脚手架配套使用，旨在简化项目初始化和开发过程。

### Rollup

[Rollup](https://www.rollupjs.com/) 是一个用于 `JavaScript` 的模块打包工具，它将小的代码片段编译成更大、更复杂的代码，例如库或应用程序。它使用 `JavaScript` 的 `ES6` 版本中包含的新标准化代码模块格式，而不是以前的 `CommonJS` 和` AMD` 等特殊解决方案。

### TypeScript

[TypeScript](https://ts.nodejs.cn/) 是一种基于 `JavaScript` 构建的强类型编程语言，可为你提供任何规模的更好工具。

## 特性

- 🛠️ 使用 `Rollup` 进行构建，支持多种输出格式（`ESM`、`CJS`、`UMD` 等）
- 📦 集成 `TypeScript`，支持类型检查和静态分析
- ♻️ 配置文件示例和最佳实践，帮助快速上手
- 🔧 支持热更新和开发服务器，提升开发效率

## 快速开始

使用 `said-cli` 创建一个基于 `rollup-library-ts` 模板的新项目。

### 安装 said-cli

如果你还没有安装 `said-cli`，请先全局安装：

```
npm install -g said-cli
```

### 开发

安装依赖

```shell
pnpm i
```

运行

```shell
pnpm run dev
```

打包生成构建产物

```shell
pnpm run build
```

本地软链接命令调试

```shell
pnpm run link
```

### 调试

把命令注册到全局，方便调试使用

```shell
npm link
```

查看所有被链接的全局 `Node.js` 包

```shell
npm ls- g --link
```

删除项目中的链接

```shell
npm unlink
```

删除全局的链接

```shell
npm unlink -g  rollup-library-ts
```

## 文件结构

项目的主要文件和目录结构如下：

```
my-lib
├── dist/                    # 构建输出目录
├── src/                     # 源代码目录
│   └── index.ts             # 入口文件
├── tests/                   # 测试文件目录
│   └── index.test.ts        # 测试文件
├── .gitignore               # Git 忽略文件配置
├── jest.config.js           # Jest 配置文件
├── package.json             # 项目配置文件
├── README.md                # 项目说明文件
├── rollup.config.js         # Rollup 配置文件
└── tsconfig.json            # TypeScript 配置文件
```

## 贡献

欢迎任何形式的贡献！你可以通过以下方式贡献代码：

1. Fork 此仓库
2. 创建你的功能分支 (git checkout -b feature/fooBar)
3. 提交你的更改 (git commit -am 'Add some fooBar')
4. 推送到分支 (git push origin feature/fooBar)
5. 创建一个新的Pull Request

## 许可证

该项目基于 `MIT` 许可证开源。详情请参阅 [LICENSE](https://github.com/SaidBaseTemplate/rollup-library-ts/blob/main/LICENSE) 文件。

## 联系

如果你有任何问题或建议，请通过以下方式联系我：

- **Email**: 17680262548@163.com
- **GitHub Issues**: [这里](https://github.com/SaidBaseTemplate/rollup-library-ts/issues)



感谢你使用 `rollup-library-ts`！希望它能帮助你更快地启动和开发项目。
