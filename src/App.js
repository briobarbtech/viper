import './App.css';
import { Card } from './components/card';
import { getElements } from './services/client-services';

import Nav from './components/nav';
const element = getElements();
console.log(element);
function App() {
  return (
    <div className="App">
      <header className="App-header">
          <Nav />
          <main>
            
          </main>
      </header>
    </div>
  );
}


export default App;
