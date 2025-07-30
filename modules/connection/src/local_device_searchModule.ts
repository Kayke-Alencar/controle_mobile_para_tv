import { NativeModule, requireNativeModule } from 'expo';

import { local_device_searchModuleEvents } from './local_device_search.types';

declare class local_device_searchModule extends NativeModule<local_device_searchModuleEvents> {
  PI: number;
  hello(): string;
  setValueAsync(value: string): Promise<void>;
}

// This call loads the native module object from the JSI.
export default requireNativeModule<local_device_searchModule>('local_device_search');
