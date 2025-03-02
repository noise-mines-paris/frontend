import { Button, colors, sizes, variants } from './Button';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
export default {
	title: 'Components/Button',
	component: Button,
	tags: ['autodocs'],
	argTypes: {
		onClick: { action: 'onClick' },
		color: {
			options: colors,
			control: { type: 'radio' },
		},
		variant: {
			options: variants,
			control: { type: 'radio' },
		},
		size: {
			options: sizes,
			control: { type: 'radio' },
		},
	},
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const FullConfiguration = {
	args: {
		color: 'primary',
		label: 'Button',
		variant: 'contained',
		size: 'md',
		onClick: () => console.log('Hello world'),
		iconLeft: 'plus',
	},
};

export const Primary = {
	args: {
		color: 'primary',
		label: 'Button',
	},
};

export const Secondary = {
	args: {
		color: 'secondary',
		label: 'Button',
	},
};

export const Large = {
	args: {
		size: 'lg',
		label: 'Button',
	},
};

export const Medium = {
	args: {
		size: 'md',
		label: 'Button',
	},
};
