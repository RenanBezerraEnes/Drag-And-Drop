import React from 'react';
import * as S from './styles';

export const Done = () => {
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
				<S.Title>
					<spna>
						<img src="/assets/Vector.svg"></img>
					</spna>
					Done
				</S.Title>
				<S.DotsContainer>
					<S.Dots />
					<S.Dots />
					<S.Dots />
				</S.DotsContainer>
			</S.TitleContainer>
			<S.TasksContainer>
				<S.SubContainerTasks
					id="125"
					onDrop={(e) => drop(e)}
					onDragOver={(e) => e.preventDefault()}
				></S.SubContainerTasks>
			</S.TasksContainer>
		</S.Container>
	);
};
