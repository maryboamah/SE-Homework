
import './App.css';
 import Header from './components/Header';
 import Nav from './components/Nav';
 import Home from './components/Home';
// import Main from './components/Main';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import About from './components/About';
import Contact from './components/Contact';
import Trivia from './components/Trivia';
import Footer from './components/Footer';
import SearchResults from './components/SearchResults';




function App() {


  return (
    <BrowserRouter>
    <div className="App">
      <Header/>
      <Nav/>
      
     <Routes>
       <Route path='/' element={<Home/>}/>
       <Route path='home' element={<Home/>}/>
       <Route path='about' element={<About/>}/>
       
       <Route path='contact' element={<Contact/>}/>
       <Route path='trivia' element={<Trivia/>}/>
       <Route path='searchresult' element={<SearchResults  />} />

     </Routes>
     
 
      
      
      <Footer/>
    </div>
    </BrowserRouter>
  );
}

export default App;
