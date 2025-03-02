import { FC } from 'preact/compat';
import { icons, IconName } from './icons';

const sizes = {
	sm: 12,
	md: 14,
	lg: 16,
} as const;

type SIZES = keyof typeof sizes;

export type IconProps = {
	size?: SIZES;
	name: IconName;
};

export const Icon: FC<IconProps> = ({ name, size = 'md' }) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
			width={sizes[size]}
			height={sizes[size]}
			className="stroke-2 stroke-current"
		>
			{icons[name]}
		</svg>
	);
};
