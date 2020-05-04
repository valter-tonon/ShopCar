import React from 'react';
import { Provider } from 'react-redux'
import store from './store'

import Layout from './layout';
import Pages from './pages';
import MessageAlert from './components/AlertMessage';

export default function App() {
	return (
		<Provider store={store}>
			  <Layout>
			  <MessageAlert/>
				<Pages />
			</Layout>
		</Provider>
	);
}
