import { ButtonHTMLAttributes } from 'react';
import cls from './Button.module.scss';
import { classNames } from '6_shared/lib/classNames';

export enum ButtonVariant {
	CLEAR = 'clear',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	variant?: ButtonVariant;
}

const Button = (props: ButtonProps) => {
	const { className, children, variant = ButtonVariant.CLEAR, ...rest } = props;
	return (
		<button
			className={classNames(cls.Button, cls[variant], className)}
			{...rest}>
			{children}
		</button>
	);
};

export default Button;
