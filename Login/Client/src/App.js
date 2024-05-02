import './App.css';
import { Signup } from './Signup';
import { Login } from './Login';
import { Home } from './Home';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import { useState } from 'react';

function App() {
  const [logmail,setLogmail]=useState('')
  const [logpass,setLogpass]=useState('')

  const [regmail,setRegmail]=useState('')
  const [regpass,setRegpass]=useState('')

  return (
    <Router>      
    <div className="App">
    <Routes>
      <Route path='/' element={<Login logmail={logmail} logpass={logpass} setLogmail={setLogmail} setLogpass={setLogpass} />}/>
      <Route path='/Home' element={<Home/>}/>
      <Route path='/Signup' element={<Signup regmail={regmail} regpass={regpass} setRegmail={setRegmail} setRegpass={setRegpass} />}/>
    </Routes>
    </div>     
    </Router>
  );
}

export default App;
