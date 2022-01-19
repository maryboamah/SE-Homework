
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import StarShipCard from './components/StarShipCard';
import Nav from './components/Nav';
import NextPage from './components/NextPage';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  return (
<BrowserRouter>
    <div>
    <Header/>
      <Routes>

<Route path ='/' element={<StarShipCard/>}></Route>
<Route path ='home' element={<StarShipCard/>}></Route>
<Route path ='/Page2' element ={<NextPage/>}></Route>
      </Routes>
    
  
    <Footer/>
      <Nav/>
    </div>
    </BrowserRouter>
  );
}

export default App;
