import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import './6_shared/config/i18n';
import { ThemeProvider } from '1_app/providers/ThemeProvider';
import App from '1_app/App';
import { ErrorBoundary } from '1_app/providers/ErrorBoundary';

createRoot(document.getElementById('root')).render(
	<BrowserRouter>
		<ErrorBoundary>
			<ThemeProvider>
				<App />
			</ThemeProvider>
		</ErrorBoundary>
	</BrowserRouter>,
);
