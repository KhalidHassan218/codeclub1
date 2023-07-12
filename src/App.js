
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap';
import { Routes , Route  } from 'react-router-dom';
import Home from './pages/home/Home';
import About from './pages/about-us/About';
import FindJob from './pages/findJob/FindJob';
import Signup from './pages/signUp/Signup';
import SignIn from './pages/signIn/SignIn';
function App() {
  return (
    <div className="App">
      <Routes>
     <Route path='/' element={<Home/>}/>
     <Route path='/about-us' element={<About/>}/>
     <Route path='/find-jobs' element={<FindJob/>}/>
     <Route path='/sign-up' element={<Signup/>}/>
     <Route path='/sign-in' element={<SignIn/>}/>
 

      </Routes>
    </div>
  );
}

export default App;
