import * as React from 'react';

import { local_device_searchViewProps } from './local_device_search.types';

export default function local_device_searchView(props: local_device_searchViewProps) {
  return (
    <div>
      <iframe
        style={{ flex: 1 }}
        src={props.url}
        onLoad={() => props.onLoad({ nativeEvent: { url: props.url } })}
      />
    </div>
  );
}
