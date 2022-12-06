import styled, { keyframes } from 'styled-components';

export const Container = styled.div`
	display: flex;
	flex-direction: column;
`;

export const ToDoListContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 65px 90px 90px;
	gap: 40px;
`;

export const HeaderContainer = styled.div`
	display: flex;
	align-items: center;
	flex-direction: column;
	margin: 65px auto 0px auto;
	width: 50%;
	/* background-color: red; */
`;

export const ToDoTitle = styled.h1`
	margin-bottom: 0px;
`;

export const ToDoParagraph = styled.p`
	margin-top: 4px;
	font-family: 'Untitled Sans';
	font-style: normal;
	font-weight: 400;
	font-size: 20px;
	text-align: center;
`;

const ToDoCardTransition = keyframes`
	from {
		transform: rotate(0deg);
	}
	to {
		transform: rotate(-5deg);
	}
`;

export const ToDoCard = styled.div`
	display: flex;
	justify-content: center;
	width: 35%;
	height: 100%;
	gap: 5px;
	border: 4px solid #cfcfcf;
	border-radius: 10px;
	position: relative;
	cursor: pointer;

	:hover {
		background: #90909055;
		animation: ${ToDoCardTransition} 1s ease-in-out both;
	}
`;

export const ArrowIcon = styled.image`
	width: 18px;
	height: 29px;
	background-image: url('assets/Arrow.svg');
	background-size: cover;
	position: absolute;
	left: 315px;
	top: 23px;
`;

export const CardBtn = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 14px;
	padding: 8px 16px 8px 16px;
	border-radius: 8px;
	cursor: move;

	:hover {
		/* background: #90909055; */
	}

	> h1 {
		font-size: 16px;
		font-weight: 500;
	}
`;

export const CircleBtn = styled.span`
	width: 6px;
	height: 6px;
	border: 1px solid #909090;
	border-radius: 100%;
	font-family: 'Recoleta';
	font-style: normal;
	font-weight: 400;
	font-size: 16px;
	text-align: center;
`;

export const Tasks = styled.div`
	display: flex;
	align-items: center;
	gap: 14px;
	width: 95%;
	padding: 0 10px 0 10px;
	border-radius: 8px;
	cursor: move;

	:hover {
		background: #90909055;
	}

	> h1 {
		font-size: 16px;
		font-weight: 500;
	}
`;

export const Ellipse5 = styled.span`
	width: 6px;
	height: 6px;
	border-radius: 100%;

	background: #909090;
`;
