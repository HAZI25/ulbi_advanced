import { useTranslation } from 'react-i18next';
import cls from './NotFoundPage.module.scss';

const NotFoundPage = () => {
	const { t } = useTranslation();

	return <div className={cls.NotFountPage}>{t('page_not_found')}</div>;
};

export default NotFoundPage;
