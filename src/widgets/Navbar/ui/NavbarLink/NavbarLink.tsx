import { type ReactNode, memo } from 'react';
import { NavLink } from 'react-router-dom';
import { cn } from '@/shared/lib/helpers/classNames';
import cls from './NavbarLink.module.css';

interface NavbarLinkProps {
	icon: ReactNode;
	text: string;
	to: string;
	className?: string;
}

export const NavbarLink = memo((props: NavbarLinkProps) => {
	const { icon, text, to, className } = props;

	return (
		<NavLink
			to={to}
			className={({ isActive }) =>
				cn(cls.NavbarLink, { [cls.active]: isActive }, [className])
			}
		>
			{icon}
			<p className="text text_type_main-default">{text}</p>
		</NavLink>
	);
});

NavbarLink.displayName = 'NavbarLink';
