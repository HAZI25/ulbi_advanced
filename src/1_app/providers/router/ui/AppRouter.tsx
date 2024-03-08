import { AboutPage } from '2_pages/AboutPage';
import { MainPage } from '2_pages/MainPage';
import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { ROUTER_PATHS } from '6_shared/constants/routes';
import { NotFoundPage } from '2_pages/NotFoundPage';
import { PageLoader } from '3_widgets/PageLoader';

const AppRouter = () => {
	return (
		<div className="page">
			<Suspense fallback={<PageLoader />}>
				<Routes>
					<Route path={ROUTER_PATHS.MAIN} element={<MainPage />} />
					<Route path={ROUTER_PATHS.ABOUT} element={<AboutPage />} />
					<Route path={ROUTER_PATHS.NOT_FOUND} element={<NotFoundPage />} />
				</Routes>
			</Suspense>
		</div>
	);
};

export default AppRouter;
