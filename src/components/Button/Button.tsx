export type ButtonProps = {
	color?: 'primary' | 'secondary';
	disabled?: boolean;
	size?: 'sm' | 'md' | 'lg';
	label?: string;
	iconLeft?: string;
	variant?: 'outlined' | 'contained' | 'text';
	onClick: () => void;
};

export const Button = ({
	color = 'primary',
	disabled = false,
	size = 'md',
	variant = 'contained',
	label,
	iconLeft,
	onClick,
}: ButtonProps) => {
	return (
		<button
			type="button"
			style={{
				backgroundColor: color === 'primary' ? '#5F5' : '#999',
				fontSize: size === 'md' ? '14px' : '18px',
				border: variant === 'text' ? '1px transparent solid' : '1px #5F5 solid',
			}}
			onClick={onClick}
			aria-description={label}
			disabled={disabled}
		>
			{iconLeft && <p>{iconLeft}</p>}
			{label}
		</button>
	);
};
