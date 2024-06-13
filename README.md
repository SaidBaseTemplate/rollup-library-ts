# rollup-library-ts
`Rollup+Ts`项目模板，可用于快速开发命令行工具、库、插件等。

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


