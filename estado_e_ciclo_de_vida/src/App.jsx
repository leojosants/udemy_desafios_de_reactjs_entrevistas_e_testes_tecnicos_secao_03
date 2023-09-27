import './App.css'
import ToggleMultiple from './components/ToggleMultiple';
import Toggle from './components/Toggle';
import Clock from './components/Clock';
import TodoList from './components/TodoList';
import WindowWidthChecker from './components/WindowWidthChecker';

function App() {
  return (
    <>
      <h2>1 - Usando o Estado</h2>
      <Toggle />

      <h2>2 - Múltiplos Estados</h2>
      <ToggleMultiple />

      <h2>3 - Relógio em tempo real</h2>
      <Clock />

      <h2>4 - Lista de tarefas</h2>
      <TodoList />

      <h2>6 - Verificador de largura de tela</h2>
      <WindowWidthChecker />
    </>
  );
}

export default App;
