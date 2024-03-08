import Button from '6_shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import cls from './PageError.module.scss';

const PageError = () => {
	const { t } = useTranslation();

	const reloadPage = () => {
		location.reload();
	};

	return (
		<div className={cls.PageError}>
			<p>{t('error_occurred')}</p>
			<Button onClick={reloadPage}>{t('reload_page')}</Button>
		</div>
	);
};

export default PageError;
