import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routeConfig } from 'shared/config/routeConfig';

const AppRouter = () => {
	return (
		<Suspense fallback={<p>Loading...</p>}>
			<Routes>
				{routeConfig.map((value) => {
					return (
						<Route key={value.path} element={value.element} path={value.path} />
					);
				})}
			</Routes>
		</Suspense>
	);
};

export default AppRouter;
