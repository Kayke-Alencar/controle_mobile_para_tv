import { requireNativeView } from 'expo';
import * as React from 'react';

import { local_device_searchViewProps } from './local_device_search.types';

const NativeView: React.ComponentType<local_device_searchViewProps> =
  requireNativeView('local_device_search');

export default function local_device_searchView(props: local_device_searchViewProps) {
  return <NativeView {...props} />;
}
