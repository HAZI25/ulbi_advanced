import { Link, LinkProps } from 'react-router-dom';
import { classNames } from '6_shared/lib/classNames';
import cls from './AppLink.module.scss';

export enum AppLinkVariant {
	PRIMARY = 'primary',
	INVERTED = 'inverted',
}

interface AppLinkProps extends LinkProps {
	variant?: AppLinkVariant;
}

const AppLink = (props: AppLinkProps) => {
	const {
		to,
		className,
		children,
		variant = AppLinkVariant.PRIMARY,
		...rest
	} = props;

	return (
		<Link
			to={to}
			className={classNames(cls.AppLink, cls[variant], className)}
			{...rest}
		>
			{children}
		</Link>
	);
};

export default AppLink;
