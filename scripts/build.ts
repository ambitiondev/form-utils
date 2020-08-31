import { BundleOptions } from '../types/build'

export const enabledFormats: object = [
    'cjs',
    'es',
    'umd'
]

export const destFolder = 'dist'

export function generateDestPath (options: BundleOptions): string {
    return `${destFolder}/${options.name}.${options.format}.js`
}
