// eslint.config.mjs
import antfu from '@antfu/eslint-config'

export default antfu(
    {
        type: 'app',
        typescript: true,
        formatters: true,
        astro: true,
    }
)