import './App.css'
import ToggleMultiple from './components/ToggleMultiple';
import Toggle from './components/Toggle';

function App() {
  return (
    <>
      <h2>1 - Usando o Estado</h2>
      <Toggle />

      <h2>2 - Múltiplos Estados</h2>
      <ToggleMultiple />
    </>
  );
}

export default App;
