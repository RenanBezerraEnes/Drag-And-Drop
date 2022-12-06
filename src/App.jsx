import { ToDoList } from './components/To-Do-List';
import * as S from './styles';
function App() {
	return (
		<S.Container>
			<S.GlobalStyle />
			<ToDoList />
		</S.Container>
	);
}

export default App;
