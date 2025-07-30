import { registerWebModule, NativeModule } from 'expo';

import { ChangeEventPayload } from './local_device_search.types';

type local_device_searchModuleEvents = {
  onChange: (params: ChangeEventPayload) => void;
}

class local_device_searchModule extends NativeModule<local_device_searchModuleEvents> {
  PI = Math.PI;
  async setValueAsync(value: string): Promise<void> {
    this.emit('onChange', { value });
  }
  hello() {
    return 'Hello world! 👋';
  }
};

export default registerWebModule(local_device_searchModule, 'local_device_searchModule');
