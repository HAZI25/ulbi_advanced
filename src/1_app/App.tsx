import './styles/index.scss';
import { classNames } from '6_shared/lib/classNames/classNames';
import { AppRouter } from './providers/router';
import { Navbar } from '3_widgets/Navbar';
import { useTheme } from '4_features/ThemeSwitcher';
import { Sidebar } from '3_widgets/Sidebar';

const App = () => {
	const { theme } = useTheme();

	return (
		<div className={classNames('app', theme)}>
			<Navbar />
			<div className="content-page">
				<Sidebar />
				<AppRouter />
			</div>
		</div>
	);
};

export default App;
