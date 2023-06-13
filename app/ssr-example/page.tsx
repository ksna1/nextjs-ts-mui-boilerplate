import SSRComponent from '@base-app/components/SSRComponent';
import { setThemeMode } from '@base-app/redux/slices/globalFlags';
import { store } from '@base-app/redux/store';

const SSRPage = () => {
  // In SSR pages we have to dispatch and fetch state directly using store object
  store.dispatch(setThemeMode('dark'));
  return (
    <main>
      <SSRComponent />
    </main>
  );
};

export default SSRPage;
