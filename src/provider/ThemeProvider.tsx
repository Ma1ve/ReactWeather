import { ReactNode, useState } from 'react';
import { Theme, ThemeContext } from '../context/ThemeContext';
import { changeCssRootVariables } from '../model/ChangeCssRootVariables';
import { storage } from '../model/Storage';

interface Props {
  children: ReactNode;
}

export const ThemeProvider = ({ children, ...props }: Props) => {
  const [theme, setTheme] = useState<Theme>(Theme.DARK);
  changeCssRootVariables(theme);
  function changeTheme(theme: Theme) {
    setTheme(theme);
    changeCssRootVariables(theme);
  }

  return (
    <ThemeContext.Provider
      value={{
        theme,
        changeTheme,
      }}
      {...props}>
      {children}
    </ThemeContext.Provider>
  );
};
