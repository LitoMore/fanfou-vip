import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import {GlobalStyle} from './global-style';
import 'modern-normalize/modern-normalize.css';

ReactDOM.render(
	<React.StrictMode>
		<GlobalStyle/>
		<App/>
	</React.StrictMode>,
	document.querySelector('#root')
);
