import { useSelector } from 'react-redux';
import { RootState } from '../store';
import { darkTheme, lightTheme } from '../theme/theme';

export const useThemeMode = () => {
  const mode = useSelector((state: RootState) => state.theme.mode);
  return mode === 'dark' ? darkTheme : lightTheme;
};
