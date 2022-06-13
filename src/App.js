import './App.css';
import { Card } from './components/card';
import { getElements } from './services/client-services';

import Nav from './components/nav';

const sectorLineup = document.querySelector('.lineup-list')


async function llamarClientes(){
  try {
    const data = await getElements()
    if (data != null) {
      // ({Title, Map, Site, Abilitý,img_position , img_lineup, video_preview})
      data.forEach( elemento => {
        const tarjetaLineup = <Card 
        Title={elemento.Title}
        Map={elemento.Map}
        Site={elemento.Site}
        Ability={elemento.Ability}
        img_position={elemento.img_position}
        img_lineup={elemento.img_lineup}
        video_preview={elemento.video_preview}
        />;
        console.log(tarjetaLineup)
        
      })
    }else{
      throw new Error();
    }
  } catch (error) {
    
  }
}

llamarClientes();

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <Nav />
          <main>
                 <div className='lineup-list'>

                 </div>
          </main>
      </header>
    </div>
  );
}


export default App;
