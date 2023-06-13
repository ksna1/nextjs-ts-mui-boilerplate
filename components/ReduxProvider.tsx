'use client';

import { store } from '@base-app/redux/store';
import React from 'react';
import { Provider } from 'react-redux';

const ReduxProvider = ({ children }: { children: React.ReactNode }) => (
  <Provider store={store}>{children}</Provider>
);

export default ReduxProvider;
