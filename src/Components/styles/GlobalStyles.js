/* eslint-disable no-tabs */
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
	* {
		box-sizing: border-box;
		margin: 0;
		padding: 0;
		text-decoration: none;
		border: none;
	}

	body {
		background-color: #eeeeee;
		font-family: 'ABeeZee', sans-serif;
	}
`;

export default GlobalStyle;
