import { FC, ReactNode } from 'preact/compat';

type MainLayoutProps = {
	children: ReactNode;
	isRouting?: boolean;
};

export const MainLayout: FC<MainLayoutProps> = ({ children, isRouting }) => {
	return (
		<main className="min-h-full w-full bg-red-100 p-lg">
			<h2>Hello world : {isRouting ? 'routing' : 'not routing'} </h2>
			<a href="/page-2">Go to page 2</a>
			<a href="/">Go to page 1</a>
			{children}
		</main>
	);
};
