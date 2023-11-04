import React from 'react'
import { useNavigate,Navigate } from 'react-router-dom';
import {createContext, useContext ,useState} from 'react';
import{ useGlobalContext,AppContext } from './context/context';
import { setAuthToken,getAuthToken } from './components/Auth';
 
import './fa.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from './1Layout/Layout';


 



const LoginForm = () => {
  
   
  const [userName, setuserName] = useState('');
  const [userPassword, setuserPassword] = useState('');
   const navigate = useNavigate();
   const {setisAuthenticated}=useGlobalContext();
   const token=getAuthToken()

  const handleLogin =async(e) => {
    
try{
    e.preventDefault();
    console.log(userName, userPassword)
    
    const options = {
       method :"POST",
       headers :{   'Content-Type': 'application/json',
      "Authorization": ` ${token}`},
        body: JSON.stringify({ userName, userPassword })
                      }
                      const Api_url="http://localhost:4044/mdb/loginAuth"

   const res= await fetch(Api_url, options);
   
   const resData= await res.json();


  
  if(res.status===300)  { 
    setisAuthenticated(true);
    setAuthToken(resData.token)
    
    navigate('/fee');
      
        
       
      }else if(res.status===400){
        window.alert("invalid credentionals......")
      }






  }catch(error){console.log(error)}
     
  };
  return (
    <Layout>
      <section class="vh-100 bg-image"
   >
  <div class="mask d-flex align-items-center h-100 gradient-custom-3">
    <div class="container h-100">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col-12 col-md-9 col-lg-7 col-xl-6">
          <div class="card"  >
            <div class="card-body p-5">
              <h2 class="text-uppercase text-center mb-9">LOGIN TO YOUR ACCOUNT</h2>

              <form onSubmit={handleLogin}>

                 

                <div class="form-outline mb-4">
                <input type="text" value={userName} onChange={(e) => setuserName(e.target.value)} />
                  <label class="form-label" for="form3Example3cg">Your Email</label>
                   
                </div>

                <div class="form-outline mb-4">
                <input type="password" value={userPassword} onChange={(e) => setuserPassword(e.target.value)} />
                  <label class="form-label" for="form3Example4cg">Password</label>
                </div>

                 

                

                <div class="d-flex justify-content-center">
                  <button type="submit"
                    class="btn btn-success btn-block btn-lg gradient-custom-4 text-body" >LOGIN</button>
                </div>

                <p class="text-center text-muted mt-5 mb-0">Forgot your password? <a href="#!"
                    class="fw-bold text-body"><u>Reset here</u></a></p>

              </form>

            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    </Layout>
  )
}

export default LoginForm
