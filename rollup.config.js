import typescript from '@rollup/plugin-typescript';
import { getBabelOutputPlugin } from '@rollup/plugin-babel';

const enabledFormats = [
    'cjs',
    'es'
]

const destFolder = 'dist'

function generateDestPath (options) {
    return `${destFolder}/${options.format}/${options.name}.${options.format}.js`
}

export default [
    {
        input: './src/index.ts',
        output: enabledFormats.map((format) => ({
            file: generateDestPath({
                name: 'bundle',
                format: format
            }),
            format: format
        })),
        plugins: [
            getBabelOutputPlugin({
                presets: ['@babel/preset-env']
            }),
            typescript()
        ]
    },
    {
        input: './src/index.ts',
        output: {
            file: 'dist/index.js',
            format: 'cjs'
        },
        plugins: [
            getBabelOutputPlugin({
                presets: ['@babel/preset-env']
            }),
            typescript()
        ]
    }
]
