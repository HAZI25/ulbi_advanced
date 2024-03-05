import { classNames } from '6_shared/lib/classNames';
import cls from './Sidebar.module.scss';
import { useState } from 'react';
import { ThemeSwitcher } from '4_features/ThemeSwitcher';
import { LangSwitcher } from '4_features/LangSwitcher';

interface SidebarProps {
	className?: string;
}

const Sidebar = (props: SidebarProps) => {
	const { className } = props;

	const [collapsed, setCollapsed] = useState(false);

	return (
		<div
			className={classNames(cls.Sidebar, className, {
				[cls.collapsed]: collapsed,
			})}
		>
			<button onClick={() => setCollapsed(!collapsed)}>Toggle</button>
			<div className={cls.switchers}>
				<ThemeSwitcher />
				<LangSwitcher />
			</div>
		</div>
	);
};

export default Sidebar;
