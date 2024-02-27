import { classNames } from 'shared/lib/classNames';
import cls from './Navbar.module.scss';
import AppLink, { AppLinkVariant } from 'shared/ui/AppLink/AppLink';

interface NavbarProps {
	classes?: string[];
}

export const Navbar = (props: NavbarProps) => {
	const { classes } = props;

	return (
		<div className={classNames(cls.Navbar, classes)}>
			<div className={cls.links}>
				<AppLink variant={AppLinkVariant.INVERTED} to={'/'}>
					Главная
				</AppLink>
				<AppLink variant={AppLinkVariant.INVERTED} to={'/about'}>
					О сайте
				</AppLink>
			</div>
		</div>
	);
};
