
import './App.css';
import Bath from './components/Bath';
import BedRoom from './components/BedRoom';
import Kitchen from './components/Kitchen';
import LivingRoom from './components/LivingRoom';
import Oven from './components/Oven';
import Sink from './components/Sink';

function App() {
  return (
    <div className="App">
      
      <BedRoom bednumber = {1} description = "Bed Room 1"/>
      <div  className='kitchens'><Kitchen description ="Kitchen"/>
      <Oven description= "Oven"/>
      <Sink description ="Oven"/>
      </div>
      <Bath type ="full" description ="Full Bath"/>
      
      <BedRoom bednumber={2} description ="Bed Room 2"/>
      <LivingRoom description ="Living Room"/>
      <Bath type ="half" description ="Half Bath"/>
      <BedRoom bednumber ={3} description ="Bed Room 3"/>
      
    </div>
  );
}

export default App;
