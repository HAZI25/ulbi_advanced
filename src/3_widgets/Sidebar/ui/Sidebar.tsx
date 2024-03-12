import { classNames } from '6_shared/lib/classNames/classNames';
import cls from './Sidebar.module.scss';
import { useState } from 'react';
import { ThemeSwitcher } from '4_features/ThemeSwitcher';
import { LangSwitcher } from '4_features/LangSwitcher';
import { useTranslation } from 'react-i18next';
import Button from '6_shared/ui/Button/Button';

interface SidebarProps {
	className?: string;
}

const Sidebar = (props: SidebarProps) => {
	const { className } = props;

	const { t } = useTranslation();

	const [collapsed, setCollapsed] = useState(false);

	return (
		<div
			className={classNames(cls.Sidebar, className, {
				[cls.collapsed]: collapsed,
			})}
			data-testid="sidebar">
			<Button
				data-testid="sidebar-toggle"
				onClick={() => setCollapsed(!collapsed)}>
				{t('toggle')}
			</Button>
			<div className={cls.switchers}>
				<ThemeSwitcher />
				<LangSwitcher />
			</div>
		</div>
	);
};

export default Sidebar;
