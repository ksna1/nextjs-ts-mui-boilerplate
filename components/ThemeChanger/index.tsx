'use client';

import { getGlobalFlagsSelector } from '@base-app/redux/selectors/globalFlags';
import { setThemeMode } from '@base-app/redux/slices/globalFlags';
import { useAppDispatch, useAppSelector } from '@base-app/utils/hooks';
import { StyledButton } from './styles';

const ThemeChangerInput = () => {
  const { themeMode } = useAppSelector(getGlobalFlagsSelector);
  const dispatch = useAppDispatch();

  const handleClick = () => {
    dispatch(setThemeMode(themeMode === 'light' ? 'dark' : 'light'));
  };
  return (
    <div>
      <p>Current Theme: {themeMode}</p>
      <StyledButton onClick={handleClick}>Change Theme</StyledButton>
    </div>
  );
};

export default ThemeChangerInput;
