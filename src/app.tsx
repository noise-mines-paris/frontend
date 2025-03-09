import { useState } from 'preact/hooks';
import { LocationProvider, ErrorBoundary } from 'preact-iso';
import { MainLayout } from './features/MainLayout';
import { AppRouter } from './Router';

export const App = () => {
	const [isRouting, setIsRouting] = useState(false);

	return (
		<LocationProvider scope="/">
			<ErrorBoundary onError={(e) => console.log(e)}>
				<MainLayout isRouting={isRouting}>
					<AppRouter
						onLoadStart={() => setIsRouting(true)}
						onLoadEnd={() => setIsRouting(false)}
					/>
				</MainLayout>
			</ErrorBoundary>
		</LocationProvider>
	);
};
