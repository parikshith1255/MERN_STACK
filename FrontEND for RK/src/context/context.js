import React from "react";
import { getAuthToken } from '../components/Auth'



import { createContext, useState,useEffect, useContext } from "react";
//wearhouse
const AppContext=React.createContext();

const ApiUrl=`http://localhost:4044/mdb/index`;

 
//provider
 const AppProvider = ( {children} )=>{
    const [feeDueCount,setFeeDueCount]=useState(null);
    const [list,setList]= useState([]);
    const [guestDetails, setguestDetails]=useState([]);
    const [token, setToken] = useState('');
    const [isAuthenticated, setisAuthenticated]=useState(false)
    const [selectedGuest, setselectedGuest] = useState(null);
    const [isLogot,setIsLogout]=useState(false)

 

     


 const getGuestList = async ()=>{
    const res= await fetch(ApiUrl);

    const data= await res.json();
    setList(data);
     

 }

  
 const getGuestDetails = async ()=>{
   const res= await fetch(ApiUrl);

   const data= await res.json();
   setguestDetails(data);
    

}

useEffect(()=>{
    getGuestList(ApiUrl)
    console.log(list)
},[]);
   
return (<AppContext.Provider value={{getGuestList,setList,list, guestDetails,getGuestDetails,token ,setToken,isAuthenticated,setisAuthenticated

  ,setselectedGuest ,selectedGuest,setIsLogout,setFeeDueCount

}}>{children}</AppContext.Provider>)
 }
 const useGlobalContext=()=>{
    return useContext(AppContext);
}
 export {AppContext,AppProvider,useGlobalContext,};



