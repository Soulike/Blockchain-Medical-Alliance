# ModuleConfig

模块配置文件夹。

该文件夹下放置对某个模块按需加载的配置。模块按需加载可以减小 Webpack 打包之后的文件体积。

例如对于 bootstrap，就只加载了需要的 SCSS 与 JS。如果有新的需要，再进行添加。