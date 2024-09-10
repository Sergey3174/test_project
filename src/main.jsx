import { createRoot } from 'react-dom/client';
import { App } from './App.jsx';
import './index.css';
import { store } from './store.js';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

createRoot(document.getElementById('root')).render(
	<BrowserRouter basename="/test_project">
		<Provider store={store}>
			<App />
		</Provider>
	</BrowserRouter>,
);
