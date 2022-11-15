import { Route, Routes } from 'react-router-dom';
import './App.css';
import ErrorPage from './Components/ErrorPage/ErrorPage';
import Footer from './Components/LoginPage/Footer';
import Login from './Components/LoginPage/Login';

function App() {
  return (
    <div>
      
      <Routes>
        <Route exact path='/' element={<Login/>}/>
         <Route exact path='/' element={<Footer/>}/>
        <Route exact path='*' element={<ErrorPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
