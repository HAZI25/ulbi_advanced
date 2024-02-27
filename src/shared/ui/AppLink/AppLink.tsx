import { Link, LinkProps } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames';
import cls from './AppLink.module.scss';

export enum AppLinkVariant {
	PRIMARY = 'primary',
	INVERTED = 'inverted',
}

interface AppLinkProps extends LinkProps {
	classes?: string[];
	variant?: AppLinkVariant;
}

const AppLink = (props: AppLinkProps) => {
	const {
		to,
		classes,
		children,
		variant = AppLinkVariant.PRIMARY,
		...rest
	} = props;

	return (
		<Link
			to={to}
			className={classNames(cls.AppLink, cls[variant], classes)}
			{...rest}
		>
			{children}
		</Link>
	);
};

export default AppLink;
