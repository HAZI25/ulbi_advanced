import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import './6_shared/config/i18n';
import { ThemeProvider } from '1_app/providers/ThemeProvider';
import App from '1_app/App';

createRoot(document.getElementById('root')).render(
	<BrowserRouter>
		<ThemeProvider>
			<App />
		</ThemeProvider>
	</BrowserRouter>,
);
