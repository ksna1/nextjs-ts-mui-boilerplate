'use client';

import { setThemeMode } from '@base-app/redux/slices/globalFlags';
import { store } from '@base-app/redux/store';
import { useRef } from 'react';

const PreloadState = () => {
  const loaded = useRef(false);
  if (!loaded.current) {
    /**
     * @Note : The below line is used to set the intial state for hybrid component i.e Server and client components
     */
    store.dispatch(setThemeMode('light'));
    loaded.current = true;
  }

  return null;
};

export default PreloadState;
