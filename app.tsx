import './src/App.css';
import {Routes ,Route} from 'react-router-dom';
import {Header} from './src/compenents/shared/Header';
import {Home} from './src/pages/Home';
import {Login} from './src/pages/Login';
import {Signup} from './src/pages/Signup';
import {Chat} from './src/pages/Chat';
import {NotFound} from './src/pages/NotFound';
import { useAuth } from './src/context/AuthContext';
import { useEffect } from 'react';
import {axios} from 'axios';
import {express} from 'express';
function App() {
  const app = express();
  app.use(express.static('dist'));
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
