'use client';

import React from 'react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { darkTheme } from '@base-app/theme/dark';

const RootLayout = ({ children }: { children: React.ReactNode }) => (
  <html lang="en">
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <body>{children}</body>
    </ThemeProvider>
  </html>
);

export default RootLayout;
