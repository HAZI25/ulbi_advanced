import { classNames } from '6_shared/lib/classNames/classNames';
import { useTheme } from '../lib/useTheme';
import LightIcon from '../assets/theme-light.svg';
import DarkIcon from '../assets/theme-dark.svg';
import { Theme } from '../model/ThemeContext';
import Button, { ButtonVariant } from '6_shared/ui/Button/Button';

interface ThemeSwitcherProps {
	className?: string;
}

const ThemeSwitcher = (props: ThemeSwitcherProps) => {
	const { toggleTheme, theme } = useTheme();

	const { className } = props;
	return (
		<Button
			variant={ButtonVariant.CLEAR}
			onClick={toggleTheme}
			className={classNames(className)}>
			{theme === Theme.LIGHT ? <LightIcon /> : <DarkIcon />}
		</Button>
	);
};

export default ThemeSwitcher;
