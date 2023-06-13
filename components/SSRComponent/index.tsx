import { store } from '@base-app/redux/store';

const SSRComponent = () => {
  const currentThemeMode = store.getState().globalFlags.themeMode;

  return (
    <div>
      <div>Current Theme mode: {currentThemeMode}</div>
    </div>
  );
};

export default SSRComponent;
