import { defaultConfig } from '@tamagui/config/v4';
import { createTamagui } from '@tamagui/core';
import { dark, light, tokens } from './themes';

const config = createTamagui({
  ...defaultConfig,
  // fonts,
  tokens,
  themes: {
    ...defaultConfig.themes, 
    light: {
      ...defaultConfig.themes.light, 
      ...light
    },
    dark: {
      ...defaultConfig.themes.dark, 
      ...dark
    }
  },
  // ... 其他配置, 如 media queries, shorthands
})

// 5. (重要!) 类型导出，为了自动补全
type Conf = typeof config
declare module '@tamagui/core' {
  interface TamaguiCustomConfig extends Conf {}
}

export default config