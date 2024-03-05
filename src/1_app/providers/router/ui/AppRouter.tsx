import { AboutPage } from '2_pages/AboutPage';
import { MainPage } from '2_pages/MainPage';
import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { ROUTER_PATHS } from '6_shared/constants/routes';

const AppRouter = () => {
	return (
		<div className="page">
			<Suspense fallback={<p>Loading...</p>}>
				<Routes>
					<Route path={ROUTER_PATHS.MAIN} element={<MainPage />} />
					<Route path={ROUTER_PATHS.ABOUT} element={<AboutPage />} />
				</Routes>
			</Suspense>
		</div>
	);
};

export default AppRouter;
