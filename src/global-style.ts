import {createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle`
	:root {
		--fanfouBlue: #0cf;
		--linkBlue: #06c;
		--textBlack: #222;

		--mobileQuery: ;
	}
`;

export const queries = {
	mobile: '(max-width: 767px)',
	pad: '(max-width: 1024px)',
	web: '(min-width: 1024px)'
};
