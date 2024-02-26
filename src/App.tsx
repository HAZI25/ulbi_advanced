import { Link, Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage/MainPage';
import { LazyAboutPage } from './pages/AboutPage/AboutPage.lazy';
import { Suspense } from 'react';
import './styles/index.scss';
import { useTheme } from './theme/useTheme';
import { classNames } from './helpers/classNames';

const App = () => {
	const { theme, toggleTheme } = useTheme();

	return (
		<div className={classNames('app', theme)}>
			<button onClick={toggleTheme}>Toggle</button>
			<Link to={'/'}>Главная</Link>
			<br />
			<Link to={'/about'}>О сайте</Link>
			<Suspense fallback={<p>Loading...</p>}>
				<Routes>
					<Route path="/" element={<MainPage />} />
					<Route path="/about" element={<LazyAboutPage />} />
				</Routes>
			</Suspense>
		</div>
	);
};

export default App;
