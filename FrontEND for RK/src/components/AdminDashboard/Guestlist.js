 
import {  Link, useLocation, useNavigate} from 'react-router-dom';
import { Typography } from 'antd';
 import{ useGlobalContext } from '../../context/context';
  import { feeStatus ,getAuthToken} from '../Auth';
import { useState,useEffect } from 'react';
 
 import { Navigate } from 'react-router-dom';


import { MDBDataTable } from 'mdbreact';
import axios from 'axios';

 
const Guestlist = ( { setActivePage}) => {
  const ApiUrl=`http://localhost:4044/mdb/index`;
  const { list ,setselectedGuest} = useGlobalContext();
  const [guetList, setGuestList]=useState([])
  const location = useLocation();
   const navigate=useNavigate();
   const token=getAuthToken();

   useEffect(() => {
    if (!token) {
      navigate('/login');
    } else {
      // Include the token in the request headers
      axios.get(ApiUrl, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((response) => {
          // Handle the response data here
          setGuestList(response.data);
          
        })
        .catch((error) => {
          // Handle errors here
          console.error('Error fetching data:', error);
        });
    }
  }, [token, navigate, ApiUrl]);
  
function FindGuest  (adhaarnumber) {
    // Find the guest with the clicked Aadhar number and set it in the state
    console.log(adhaarnumber)
    try{
      const guest1=guetList.find((item) => item.adhaar_number === adhaarnumber);
      console.log("guestfound:",guest1)
      return guest1
    }catch(error){
      console.log(error);
      return null
    }
     }
  

  
  const handleGuestClick  = async (adhaarNumber) => {
    // Find the guest with the clicked Aadhar number and set it in the state
    
    console.log(adhaarNumber)
    
    console.log(location)
     try
    {   
      const selectedGuest = FindGuest(adhaarNumber);


   if(selectedGuest){
    setselectedGuest(selectedGuest)
         
        setActivePage('guestdetails')
   }
  
  }catch(error){
      console.log(error)
    }
  };
  
   
  
   
  // Convert your data to match the required format for MDBDataTable
  const tableData = {
    
    columns: [
      {
        label: 'GUEST NAME',
        field: 'name',
        sort: 'asc',
        width: 100,
        autoWidth: true
      },
      {
        label: 'MOBILE NO',
        field: 'mobile_number',
        sort: 'asc',
        width: 120,
        autoWidth: true
        
      },
      {
        label: 'ROOM NO',
        field: 'room_number',
        sort: 'asc',
        width: 75,
        autoWidth: true
      },
      {
        label: 'AAdhar_Number',
        field: 'adhaar_number',
        sort: 'asc',
        width: 100,
        autoWidth: true,
        clickHandler: (adhaarNumber) => handleGuestClick(adhaarNumber),
      } ,{
        label: 'FEE STATUS',
        field: 'fee_status',
        sort: 'asc',
        width: 100
      },
    ],
    rows: list.map((item) => {
      const { fee } = feeStatus(item.fee_payment_dates);
      return {
        name: item.name,
        mobile_number: item.mobile_number,
        room_number: item.room_number,
        adhaar_number: (
          // Replace the Link with a span
          <span onClick={() => handleGuestClick(item.adhaar_number)}>
            {item.adhaar_number}
          </span>
        ),
        fee_status: fee
      };
    })
  };

  return (
    
    <div className='table012'>
        
   <MDBDataTable
   tbodyColor='green'
        scrollY
        
        autoWidth={false} // Allow the table to adjust its width based on content
        noRecordsFoundLabel='No records found'
        data={tableData}
        striped
        bordered
        hover
        responsive
        searching
        paging
        maxHeight='calc(100vh - 200px)' // Adjust the height as needed based on other content on the page
        className='custom-mdbdatatable'
        sortable
        style={{ width: '1000px' }}
      /> 
  </div>

   
  );
  
};

export default  Guestlist;