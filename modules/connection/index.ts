// Reexport the native module. On web, it will be resolved to local_device_searchModule.web.ts
// and on native platforms to local_device_searchModule.ts
export { default } from './src/local_device_searchModule';
export { default as local_device_searchView } from './src/local_device_searchView';
export * from  './src/local_device_search.types';
