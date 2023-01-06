import { defineConfig } from 'unocss'
import transformerDirectives from '@unocss/transformer-directives'
import presetIcons from '@unocss/preset-icons'
import presetUno from '@unocss/preset-uno'

// throw new Error('boom');
export default defineConfig({
  presets: [
    presetIcons(),
    presetUno()
  ],
  shortcuts: [
    // { box: 'max-w-7xl mx-auto bg-gray-100 rounded-md shadow-sm p-4' },
  ],
  transformers: [
    transformerDirectives(),
  ],
})