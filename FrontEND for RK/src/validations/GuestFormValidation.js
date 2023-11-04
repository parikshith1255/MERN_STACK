import React from 'react'
import { toast } from "react-hot-toast";

export  async function MobileNumValidation(values) {
    const error=VerifyMobileNumber({}, values)
  return error
}


function VerifyMobileNumber(error={},values){


    if(!values.mobile_number){
          error.mobile_number=toast.error("Mobile Number cannot be Empty")
    }else if(/[A-Za-z\s!@#$%^&*()_+{}|:"<>?~,./;'[\]\\]/.test(values.mobile_number)){
                error.mobile_number=toast.error("mobile number cannot contain special charecter or numbers")
    }else if(values.mobile_number.length>10||values.mobile_number.length<10){
        error.mobile_number=toast.error('Please enter 10 digit mobile no.')
    }

    return error;
}
