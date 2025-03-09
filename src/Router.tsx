import { lazy, Router, Route } from 'preact-iso';

const Page1 = lazy(() => import('#src/pages/Page1'));
const Page2 = lazy(() => import('#src/pages/Page2'));

export const AppRouter = ({
	onLoadStart,
	onLoadEnd,
}: {
	onLoadStart: () => void;
	onLoadEnd: () => void;
}) => {
	return (
		<Router onLoadStart={onLoadStart} onLoadEnd={onLoadEnd}>
			<Route path="/" component={Page1} />
			<Route path="/page-2" component={Page2} />
		</Router>
	);
};
