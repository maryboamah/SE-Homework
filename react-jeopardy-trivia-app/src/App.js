
import './App.css';
import Main from './components/Main';
import MoreQuestions from './components/MoreQuestions';
import {BrowserRouter, Router,Routes, Route} from 'react-router-dom'
function App() {
  return (
    <BrowserRouter>
    <div className="App">

      <h1>WELCOME TO JEOPARDY</h1>
    
      
        <Routes>
        <Route path='/' element={<Main />} />
        <Route path='more' element={<MoreQuestions />} />
        </Routes>
        
      
      
     
      
    </div>
    </BrowserRouter>
  );
}

export default App;
