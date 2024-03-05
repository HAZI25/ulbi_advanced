import { classNames } from '6_shared/lib/classNames';
import cls from './Navbar.module.scss';
import AppLink, { AppLinkVariant } from '6_shared/ui/AppLink/AppLink';
import { useTranslation } from 'react-i18next';

interface NavbarProps {
	classes?: string[];
}

export const Navbar = (props: NavbarProps) => {
	const { classes } = props;

	const { t } = useTranslation();

	return (
		<div className={classNames(cls.Navbar, classes)}>
			<div className={cls.links}>
				<AppLink variant={AppLinkVariant.INVERTED} to={'/'}>
					{t('mainPage')}
				</AppLink>
				<AppLink variant={AppLinkVariant.INVERTED} to={'/about'}>
					{t('aboutPage')}
				</AppLink>
			</div>
		</div>
	);
};
