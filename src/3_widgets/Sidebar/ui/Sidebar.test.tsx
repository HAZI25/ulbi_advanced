import { fireEvent, screen } from '@testing-library/react';
import Sidebar from './Sidebar';
import renderWithTranslation from '6_shared/lib/tests/renderWithTranslation';

describe('sidebar', () => {
	it('render', () => {
		renderWithTranslation(<Sidebar />);
		expect(screen.getByTestId('sidebar')).toBeInTheDocument();
	});
	it('toggle', () => {
		renderWithTranslation(<Sidebar />);
		const toggleBtn = screen.getByTestId('sidebar-toggle');
		fireEvent.click(toggleBtn);
		expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
	});
});
