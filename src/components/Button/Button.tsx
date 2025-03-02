import { FC } from 'preact/compat';
import { clsx } from 'clsx';
import { Icon, type IconName } from '../Icon';

export const colors = ['primary', 'secondary'] as const;
type COLORS = (typeof colors)[number];

export const sizes = ['sm', 'md', 'lg'] as const;
type SIZES = (typeof sizes)[number];

export const variants = ['outlined', 'contained', 'text'] as const;
type VARIANTS = (typeof variants)[number];

const buttonVariants = {
	base: [
		'border border-solid',
		'rounded-sm',
		'hover:cursor-pointer',
		'shadow-sm',
		'transition-color duration-300',
		'flex flex-row items-center',
	],
	colorByVariant: {
		contained: {
			primary: [
				'border-transparent',
				'text-onprimary-main bg-primary-main shadow-primary-light',
				'hover:text-onprimary-dark hover:bg-primary-dark hover:shadow-primary-main',
			],
			secondary: [
				'border-transparent',
				'text-onsecondary-main bg-secondary-main shadow-secondary-light',
				'hover:text-onsecondary-dark hover:bg-secondary-dark hover:shadow-secondary-main',
			],
		},
		outlined: {
			primary: [
				'text-primary-main bg-surface border-onsurface shadow-primary-light',
				'hover:text-primary-dark hover:bg-primary-light/25 hover:border-onsurface-hover hover:shadow-primary-main',
			],
			secondary: [
				'text-secondary-main bg-surface border-onsurface shadow-secondary-light',
				'hover:text-secondary-dark hover:bg-secondary-light/25 hover:border-onsurface-hover hover:shadow-secondary-main',
			],
		},
		text: {
			primary: [
				// 'shadow-transparent',
				'border-transparent',
				'text-primary-main bg-surface',
				'hover:text-primary-dark hover:bg-primary-light/25',
			],
			secondary: [
				// 'shadow-transparent',
				'border-transparent',
				'text-secondary-main bg-surface',
				'hover:text-secondary-dark hover:bg-secondary-light/25',
			],
		},
	},
	size: {
		sm: ['px-xs py-2xs text-xs gap-xs'],
		md: ['px-md py-xs text-sm gap-sm'],
		lg: ['px-xl py-sm text-base gap-md'],
	},
};

export type ButtonProps = {
	color?: COLORS;
	disabled?: boolean;
	size?: SIZES;
	label?: string;
	iconLeft?: IconName;
	variant?: VARIANTS;
	onClick: () => void;
	className?: string;
};

export const Button: FC<ButtonProps> = ({
	color = 'primary',
	disabled = false,
	size = 'md',
	variant = 'contained',
	label,
	iconLeft,
	onClick,
	className = '',
}) => {
	return (
		<button
			type="button"
			onClick={onClick}
			aria-description={label}
			disabled={disabled}
			className={clsx(
				className || '',
				buttonVariants.base,
				buttonVariants.size[size],
				buttonVariants.colorByVariant[variant][color]
			)}
		>
			{iconLeft && <Icon name={iconLeft} size={size} />}
			{label}
		</button>
	);
};
