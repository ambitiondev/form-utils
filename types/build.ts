export interface BundleOptions {
    format: 'amd' | 'cjs' | 'es' | 'umd' | 'system';
    name: 'string';
    transformRuntime: boolean;
}