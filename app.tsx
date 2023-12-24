import '/App.css';
import {Routes ,Route} from "react-router-dom";
import Header from './src/compenents/shared/Header';
import Home from './src/pages/Home';
import Login from './src/pages/Login';
import Signup from './src/pages/Signup';
import Chat from './src/pages/Chat';
import NotFound from './src/pages/NotFound';
import { useAuth } from './src/context/AuthContext';
function App() {
  const auth = useAuth();
   console.log(useAuth()?.isLoggedIn);
   
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
