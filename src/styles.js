import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
	position: relative;
	width: 100vw;
	height: 100vh;
	background: radial-gradient(
		117.04% 95.93% at 50% 0%,
		#fbfbfb 0%,
		#e8e8e8 100%
	);
	
  }
`;

export const Container = styled.div`
	display: flex;
	flex-direction: column;
`;
