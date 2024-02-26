import React, { ReactNode, useMemo, useState } from 'react';
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from './ThemeContext';

interface ThemeProviderProps {
	children: ReactNode;
}

const defaultTheme = (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) ||
	Theme.LIGHT) as Theme;

const ThemeProvider = ({ children }: ThemeProviderProps) => {
	const [theme, setTheme] = useState<Theme>(defaultTheme);

	const themeValue = useMemo(() => ({ theme, setTheme }), [theme]);

	return (
		<ThemeContext.Provider value={themeValue}>{children}</ThemeContext.Provider>
	);
};

export default ThemeProvider;
