import {createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle`
	:root {
		--fanfouBlue: #0cf;
		--linkBlue: #06c;
		--textBlack: #222;
	}

	* {
		font-size: 14px;
	}
`;

export const queries = {
	mobile: '(max-width: 767px)',
	pad: '(min-width: 768px) and (max-width: 1024px)',
	web: '(min-width: 1025px)'
};
