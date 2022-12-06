import styled, { keyframes } from 'styled-components';

export const Container = styled.div`
	box-sizing: border-box;
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 32px 28px 0px 28px;
	width: 401.33px;
	height: 458px;
	gap: 48px;

	background: #fafafa;
	border: 1px solid #ffffff;
	box-shadow: 0px 439px 268px rgba(0, 0, 0, 0.06),
		0px 202.963px 123.905px rgba(0, 0, 0, 0.0445005),
		0px 116.131px 70.8953px rgba(0, 0, 0, 0.0376069),
		0px 70.4906px 43.033px rgba(0, 0, 0, 0.0323969),
		0px 42.4737px 25.9293px rgba(0, 0, 0, 0.0276031),
		0px 23.6521px 14.4391px rgba(0, 0, 0, 0.0223931),
		0px 10.1726px 6.21015px rgba(0, 0, 0, 0.0154995);
	border-radius: 40px;

	overflow: hidden;
`;

export const TitleContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: flex-start;
	padding: 0px 16px 0px 30px;
	position: relative;

	width: 100%;
	height: 55px;
`;

export const Title = styled.h1`
	width: 97px;
	height: 49px;
	font-family: 'Recoleta';
	font-style: normal;
	font-weight: 500;
	font-size: 36px;
	line-height: 49px;
	text-align: center;
	color: #212121;
`;

export const DotsContainer = styled.div`
	display: flex;
	gap: 12px;
	height: 40px;
	margin-top: -44px;
	margin-left: 10px;
`;

export const Dots = styled.p`
	width: 6px;
	height: 6px;
	border-radius: 50%;
	background: #212121;
`;

export const TasksContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 0px 0px 32px 0px;
	gap: 8px;
	width: 100%;
	height: 100%;
	margin-bottom: 20px;
	overflow-y: scroll;
	margin-top: -19px;

	::-webkit-scrollbar {
		background: transparent;
		width: 0;
	}

	::-webkit-scrollbar-track {
		background: transparent;
	}

	::-webkit-scrollbar-thumb {
		background: transparent;
	}
`;

export const SubContainerTasks = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100%;
	height: 100%;
	gap: 5px;
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

export const BtnContainer = styled.div`
	display: flex;
	gap: 8px;
	padding-bottom: 14px;
`;

const cardTransition = keyframes`
	from {
		opacity: 0;
	}
	to {
		opacity: 1;
		background: #f2f2f2;
		height: 181px;
	}
`;

export const Frame15 = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: flex-start;
	gap: 8px;

	width: 345.33px;
	height: 0px;
	border-radius: 20px;
	animation: ${cardTransition} 0.6s ease-in-out both;
`;

const TitleTransition = keyframes`
	from {
		font-size: 0;
	}
	to {
		font-size: 20px;
	}
`;

export const Frame15Title = styled.div`
	display: flex;
	align-items: center;
	gap: 10px;
	padding: 0px 10px 0px 10px;
	> h1 {
		font-size: 0px;
		animation: ${TitleTransition} 0.5s ease-in-out both;
	}
`;

const Rectangle1Transition = keyframes`
	from {
		font-size: 0;
	}
	to {
		width: 57px;
		height: 1px;
		background: #212121;
	}
`;

export const Rectangle1 = styled.span`
	width: 0px;
	height: 0px;
	border-radius: 100px;
	margin-left: 25px;
	animation: ${Rectangle1Transition} 1s ease-in-out both;
`;

const TaskTransition = keyframes`
	from {
		opacity: 0;
	}
	to {
		opacity: 1;
	}
`;

export const TaskContent = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: center;
	padding: 0px 0px 0px 24px;
	gap: 12px;
	animation: ${TaskTransition} 2s linear both;
	width: 100%;
	height: 100%;
`;

export const TextArea = styled.input`
	width: 291.33px;
	height: 57px;

	font-family: 'Recoleta';
	font-style: normal;
	font-weight: 400;
	font-size: 16px;
	line-height: 22px;
	background: #f2f2f2;
	border: none;
	color: rgba(0, 0, 0, 0.25);
	text-align: start;
`;

export const DivDiscardBtn = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	padding: 4px 16px;
	gap: 6px;

	width: 141.67px;
	height: 30px;
	box-sizing: border-box;

	background: #e7d6d6;
	border-radius: 8px;
	cursor: pointer;
`;

export const SpanDiscard = styled.span`
	width: 56px;
	height: 22px;

	font-family: 'Recoleta';
	font-style: normal;
	font-weight: 800;
	font-size: 16px;
	line-height: 22px;
	padding: 4px 30px 4px 0px;
`;

export const SpanIconDiscard = styled.span`
	width: 20px;
	height: 20px;
	background-image: url('assets/discard-task-icon.svg');
	background-size: cover;
`;

export const DivSaveBtn = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	padding: 4px 16px;
	gap: 6px;

	width: 141.67px;
	height: 30px;
	box-sizing: border-box;

	background: #dadee9;
	border-radius: 8px;
	cursor: pointer;
`;

export const SpanSave = styled.span`
	width: 70px;
	height: 22px;

	font-family: 'Recoleta';
	font-style: normal;
	font-weight: 650;
	font-size: 16px;
	line-height: 22px;
	color: #212121;
`;

export const SpanIconSave = styled.span`
	width: 25px;
	height: 20px;
	background-image: url('assets/Save-Task.svg');
	background-size: cover;
`;
