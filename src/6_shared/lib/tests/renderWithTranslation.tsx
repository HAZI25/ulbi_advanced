import { render } from '@testing-library/react';
import { ReactNode } from 'react';
import { I18nextProvider } from 'react-i18next';
import i18n from '6_shared/config/i18nForTests';

const renderWithTranslation = (children: ReactNode) => {
	return render(<I18nextProvider i18n={i18n}>{children}</I18nextProvider>);
};

export default renderWithTranslation;
