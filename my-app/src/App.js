import './App.css';
import MediaRecord from './componentes/MediaRecord'//Aqui estou importando o componente

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* Aqui estou adicionando o componente */}
        <MediaRecord />
      </header>
    </div>
  );
}

export default App;
