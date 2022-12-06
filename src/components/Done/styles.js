import styled from 'styled-components';

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
	display: flex;
	gap: 5px;
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
