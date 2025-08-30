import { defaultConfig } from '@tamagui/config/v4';
import { createTamagui } from 'tamagui';
import { themes } from './themes/themes';

const config = createTamagui({
  ...defaultConfig,
  themes,
  // ... 其他配置, 如 media queries, shorthands
})

// (重要!) 类型导出，为了自动补全
type Conf = typeof config
declare module '@tamagui/core' {
  interface TamaguiCustomConfig extends Conf {}
}

export default config
