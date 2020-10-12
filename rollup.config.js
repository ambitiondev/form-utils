import path from 'path'
import { terser } from 'rollup-plugin-terser'
import typescript from 'rollup-plugin-typescript2';

const moduleName = 'form-utils'

const resolve = _path => path.resolve(__dirname, './', _path)

function outputConfig(suffix, format, opts = {}) {
  return Object.assign(
    {
      file: resolve(`./dist/${moduleName}${suffix}.js`),
      name: 'FormUtils',
      exports: 'named',
      sourcemap: true,
      format,
    },
    opts
  )
}

function baseConfig() {
  return {
    input: resolve('./src/index.ts'),
    output: [
      outputConfig('', 'umd'),
      outputConfig('.esm', 'esm'),
      outputConfig('.common', 'cjs'),
    ],
    plugins: [
      typescript({
        clean: true,
        useTsconfigDeclarationDir: true,
      })
    ],
  }
}

export default args => {
  const configs = [baseConfig()]

  if (args.configProd === true) {
    const prodConfig = baseConfig()
    prodConfig.plugins.push(terser())

    for (const item of prodConfig.output) {
      item.file = item.file.replace('.js', '.min.js')
      item.sourcemap = false
    }

    configs.push(prodConfig)
  }

  return configs
}
