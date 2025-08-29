const { getDefaultConfig } = require('expo/metro-config');

const config = getDefaultConfig(__dirname);

config.resolver.unstable_enablePackageExports = true;

config.resolver.resolveRequest = (context, moduleName, platform) => {
  // 如果是 zustand 库，则强制解析为 CommonJS 入口
  if (moduleName.startsWith('zustand')) {
    return {
      type: 'sourceFile',
      filePath: require.resolve(moduleName, { paths: [context.originModulePath] }),
    };
  }
  return context.resolveRequest(context, moduleName, platform);
};

module.exports = config;