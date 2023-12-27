import './App.css';
import {Routes ,Route} from "react-router-dom";
import Header from './compenents/shared/Header';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Chat from './pages/Chat';
import NotFound from './pages/NotFound';
import { useAuth } from './context/AuthContext';
import { useEffect } from 'react';
import axios from 'axios';
function App() {
  const auth = useAuth();
   console.log(useAuth()?.isLoggedIn);
   useEffect(() => {
      axios.get("/api/v1")
      .then((res) =>{
        console.log(res);
        
      })
      .catch((err)=>{
        console.log(err);
        
      })
   })
  return (
   <main>
     <Header />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/signup' element={<Signup />}/>
        {auth?.isLoggedIn && auth.user && (<Route path='/Chat' element={<Chat />}/>)}
        <Route path='*' element={<NotFound />}/>
      </Routes>
    
   </main>
  )
}

export default App
