import React, { useState } from 'react';
import { ToDoContainer } from '../To-Do';
import { InProgress } from '../In-Progress';
import { Done } from '../Done';
import * as S from './styles';

export const ToDoList = () => {
	const [listTodo, setListTodo] = useState([
		{ id: '1' },
		{ id: '2' },
		{ id: '3' },
	]);
	const [listProgress, setListProgress] = useState([
		{ id: '4' },
		{ id: '5' },
		{ id: '6' },
	]);

	const [listDone, setListDone] = useState([
		{ id: '5' },
		{ id: '6' },
		{ id: '7' },
	]);

	function generateId() {
		const listLength = [listProgress.length, listDone.length, listTodo.length];
		const listSorted = listLength.sort((a, b) => b - a);
		return { id: listSorted[0] + 1 };
	}

	function drag(ev) {
		const generate = generateId();

		ev.dataTransfer.setData('NewItemId', generate.id);
		ev.dataTransfer.setData('Id', ev.target.id);
	}

	return (
		<S.Container>
			<S.HeaderContainer>
				<img
					src="/assets/MainVector.svg"
					style={{ width: '112px', height: '108px' }}
				/>
				<S.ToDoTitle>Room of Thoughts</S.ToDoTitle>
				<S.ToDoParagraph>Don't think, throw in the room</S.ToDoParagraph>
				<S.ToDoCard>
					<S.CardBtn draggable="true" onDragStart={(e) => drag(e)} id="btn">
						<S.CircleBtn />
						Start dragging this task to create a new one
						<S.ArrowIcon />
					</S.CardBtn>
				</S.ToDoCard>
			</S.HeaderContainer>
			<S.ToDoListContainer>
				<ToDoContainer list={listTodo} addItem={setListTodo} />
				<InProgress list={listProgress} addItem={setListProgress} />
				<Done list={listDone} addItem={setListDone} />
			</S.ToDoListContainer>
		</S.Container>
	);
};
