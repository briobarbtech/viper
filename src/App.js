import './App.css';
import { Card } from './components/card';
import { EyeButton } from './components/eyeButton';

import Nav from './components/nav';

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <Nav />
          <Card />
          <Card />
          <Card />
      </header>
    </div>
  );
}

export default App;
