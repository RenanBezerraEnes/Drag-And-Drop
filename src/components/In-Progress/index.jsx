import React, { useState } from 'react';
import * as S from './styles';

export const InProgress = ({ addItem, list }) => {
	const [showDiv, setShowDiv] = useState(false);

	const handlerCard = () => {
		if (showDiv === true) {
			setShowDiv(false);
		} else {
			setShowDiv(true);
		}
	};

	function drop(ev) {
		ev.preventDefault();
		const data = ev.dataTransfer.getData('text');

		if (ev.target.id === '1' || ev.target.id === '2' || ev.target.id === '3') {
		} else {
			ev.target.appendChild(document.getElementById(data));
		}
	}

	function drag(ev) {
		ev.dataTransfer.setData('text', ev.target.id);
	}

	return (
		<S.Container>
			<S.TitleContainer>
				<S.Title>Progress</S.Title>
				<S.DotsContainer>
					<S.Dots />
					<S.Dots />
					<S.Dots />
				</S.DotsContainer>
			</S.TitleContainer>
			<S.TasksContainer>
				<S.SubContainerTasks
					id="129"
					onDrop={(e) => drop(e)}
					onDragOver={(e) => e.preventDefault()}
				>
					{!showDiv ? (
						<>
							{list.map((item) => (
								<S.Tasks
									key={item.id}
									id={item.id}
									draggable="true"
									onDragStart={(e) => drag(e)}
									onClick={handlerCard}
								>
									<S.Ellipse5 />
									<h1>{item.id}</h1>
								</S.Tasks>
							))}
						</>
					) : (
						<S.Frame15>
							<S.Frame15Title>
								<S.Ellipse5 />
								<h1>Get the trash out</h1>
							</S.Frame15Title>
							<S.Rectangle1 />
							<S.TaskContent>
								<S.TextArea placeholder="Description" />
								<S.BtnContainer>
									<S.DivDiscardBtn onClick={handlerCard}>
										<S.SpanIconDiscard />
										<S.SpanDiscard>Discard</S.SpanDiscard>
									</S.DivDiscardBtn>
									<S.DivSaveBtn onClick={handlerCard}>
										<S.SpanIconSave />
										<S.SpanSave>Save Task</S.SpanSave>
									</S.DivSaveBtn>
								</S.BtnContainer>
							</S.TaskContent>
						</S.Frame15>
					)}
				</S.SubContainerTasks>
			</S.TasksContainer>
		</S.Container>
	);
};
