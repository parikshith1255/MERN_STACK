 
import './App.css';
import {   BrowserRouter,Route, Routes} from 'react-router-dom';
import Home from './Home';
 
 
  import LoginForm from './loginform';
  
 import Dashboard from './components/AdminDashboard/Dashboard';
import AboutPage from './components/AboutPage';
 
import TestPrivateRoute from './components/TestPrivateRoute';
import { AppProvider, useGlobalContext } from './context/context';
import Navbarheader from './1Layout/Navbarheader';
import NavFooter from './1Layout/NavFooter';
import GuestForm from './components/GuestForm';
 


const App =() => {
   
   
     
   
  return (
    <div className='app'>
   <BrowserRouter>
  
<AppProvider>
      <Routes>

       
         <Route path='/'  element= {<Home />} />
         <Route path='/navnav'  element= {<GuestForm />} />
          
        <Route path='/Register' element= {<GuestForm/>} />
       
        <Route path='/about'  element= {< AboutPage />} />


        <Route    element= {< TestPrivateRoute />} >
          
          <Route element={<Dashboard/>} path='/fee/*' exact/>
          
          
             </Route>
             /* higher order component */
         
           
        
        
         
         
         <Route path='/login' element={< LoginForm/>}/>
         
          
    
      </Routes>
     </AppProvider>
      </BrowserRouter>
      </div>   
  );
}

export default App;
