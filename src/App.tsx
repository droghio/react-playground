import * as React from 'react';
import './App.css';
import Plot from './components/Plot'

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Plot name="TypeScript" enthusiasmLevel={2} />
      </div>
    );
  }
}

export default App;
