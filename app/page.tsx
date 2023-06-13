'use client';

import ReduxProvider from '@base-app/components/ReduxProvider';
import ThemeChangerInput from '@base-app/components/ThemeChanger';

const Home = () => (
  <main>
    <ReduxProvider>
      <ThemeChangerInput />
    </ReduxProvider>
  </main>
);

export default Home;
