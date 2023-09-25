import './App.css'
import ToggleMultiple from './components/ToggleMultiple';
import Toggle from './components/Toggle';
import Clock from './components/Clock';

function App() {
  return (
    <>
      <h2>1 - Usando o Estado</h2>
      <Toggle />

      <h2>2 - Múltiplos Estados</h2>
      <ToggleMultiple />

      <h2>3 - Relógio em tempo real</h2>
      <Clock />
    </>
  );
}

export default App;
