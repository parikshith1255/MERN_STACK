import { useState } from 'react';
import React  from 'react'
import { useGlobalContext } from '../../context/context';
 import { feeStatus,FindGuest } from '../Auth';
 
 
 
import { Button,Card, Checkbox, Form, Input,Descriptions } from 'antd';
const { Search } = Input;

const FeePayment=()=> {
    const {list}=useGlobalContext();
    const [GuestDetails, setGuestDetails] = useState(null);
    const [paymentDueDate,setpaymentDueDate]=useState(null);
     

    const handleSearch = (adhaar_number) => {
        
       try{ 

        const guest =FindGuest(adhaar_number,list)
        console.log('Search value:',  guest);
        if(!guest||guest===null){
          alert('No Guest Found')
        }else{
          setGuestDetails(guest);
          setpaymentDueDate(feeStatus(guest.fee_payment_dates).feeDueDate)
          
        }
      
      
      }catch(error){console.log(error)} 
    }
    

      const handleButton=(guestDetails,paymentDueDate)=>{
        try{
          console.log(guestDetails,paymentDueDate,':payment Due Date')
          console.log('feeduedate:',   paymentDueDate);
          const details={guestDetails,paymentDueDate}
          console.log(details,' : details')

          const options = {
                          method :"POST",
                          headers :{ 'Content-Type': 'application/json'},
                           body: JSON.stringify(details)
          }


          const Api_url="http://localhost:4044/mdb/payfees";
          fetch(Api_url, options ).then(response=>console.log(response))
          console.log("data posted...............")



        }catch(error){
          console.log(error)
        }
      }


  return (
    <div>
     <Search
        placeholder="Enter Guest mobile Number"
        enterButton="Search"
        size="large"
        loading={false} // Set to true if you want to show a loading spinner on the button
        onSearch={handleSearch} 
        style={{
          marginTop:'20px',
          marginBottom:'10px'
        }}// This function will be called when the search button is clicked or Enter key is pressed
      />
      <Card>

      <Descriptions  title='User Info' bordered column={1} layout='horizontal' style={{
        marginTop:'16px'
      }}>
        <Descriptions.Item label='Name'>{GuestDetails?.name}</Descriptions.Item><br/> 
        <Descriptions.Item label='MobileNumber'>{GuestDetails?.mobile_number}</Descriptions.Item><br/>
        <Descriptions.Item label='Adhaar Number'>{GuestDetails?.adhaar_number}</Descriptions.Item><br/>
        <Descriptions.Item label='Room Number'>{GuestDetails?.room_number}</Descriptions.Item><br/>
        <Descriptions.Item label='Joining Date'>{GuestDetails?.joining_date}</Descriptions.Item><br/>
        <Descriptions.Item label='Last Payment Date'>{GuestDetails?.fee_payment_dates.length > 0 ? GuestDetails.fee_payment_dates[GuestDetails.fee_payment_dates.length - 1] : 'No payment date found'}</Descriptions.Item><br/>
        <Descriptions.Item label='Payment Due Date'>{paymentDueDate?.toLocaleDateString()}</Descriptions.Item>
      </Descriptions>
      <Button type="default" onClick={() => handleButton(GuestDetails.adhaar_number,paymentDueDate)} style={{
        marginTop:'10px'
        
        
      }}>Pay Now</Button>

      </Card>
      
    </div>
  )
}

export default FeePayment
