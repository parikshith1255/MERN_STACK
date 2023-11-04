// auth.js

import { Token } from '@mui/icons-material';
import Cookies from 'js-cookie';
import { useGlobalContext } from '../context/context';

export const setAuthToken = (token) => {
  Cookies.set('token', token); // Set the token in a cookie
};

export const getAuthToken = () => {
  return Cookies.get('token'); // Get the token from the cookie
};

export const removeAuthToken = () => {
  Cookies.remove('token'); // Remove the token from the cookie
};

export  function feeStatus(fee_paymet_dates){
  try{
   const today = new Date();
   const feeDuration = 30;
   let fee=null;

   const lastFeePaymentDate=new Date(fee_paymet_dates[fee_paymet_dates.length-1])
   
   const feeDueDate=new Date(lastFeePaymentDate)
   feeDueDate.setDate(lastFeePaymentDate.getDate()+feeDuration)
   
     
   

   if(today>feeDueDate){
       fee='due';
         
   }else{
       fee='paid';
    
        
         
   }



   return { fee, lastFeePaymentDate, feeDueDate };   
  }catch(error){console.log(error)
   return  { fee: null, lastFeePaymentDate: null, feeDueDate: null };
}
 }

export  function FindGuest(adhaarnumber, list) {
   
  // Find the guest with the clicked Aadhar number and set it in the state
  try {
    const guest1 = list.find((item) => item.adhaar_number === adhaarnumber);
    return guest1;
  } catch (error) {
    console.log(error);
    return null;
  }
}


export function feeDueFinder(feePaymentDetails) {
  const feeDetails = feePaymentDetails.map((guest) => {
    const { fee_payment_dates } = guest;
    const { fee, lastFeePaymentDate, feeDueDate} = feeStatus(fee_payment_dates);
     const {mobile_number}=guest;

    if (fee === 'due') {
      return { name: guest.name, lastFeePaid: lastFeePaymentDate, feeDueDate , mobileNumber:mobile_number};
    } else {
      return null;
    }
  });

  return feeDetails.filter((detail) => detail !== null);
}
