// babel.config.js
module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      // 其他插件可以放在这里...
      
      // Reanimated 插件必须是最后一个！
      'react-native-reanimated/plugin', 
    ],
  };
};