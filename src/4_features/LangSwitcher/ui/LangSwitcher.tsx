import Button from '6_shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';

const LangSwitcher = () => {
	const { t, i18n } = useTranslation();

	const toggleLang = () => {
		i18n.changeLanguage(i18n.language === 'en' ? 'ru' : 'en');
	};

	return <Button onClick={toggleLang}>{t('language')}</Button>;
};

export default LangSwitcher;
