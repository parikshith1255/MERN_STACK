import React from 'react'
import axios, { Axios } from 'axios';
import MyLayout from '../1Layout/MyLayout'
import { useFormik } from 'formik'
import styles from '../styles/Tailwind.module.css'
import { Toaster } from 'react-hot-toast'
import '../App.css'
import Typography from 'antd/es/typography/Typography'
import { MobileNumValidation } from '../validations/GuestFormValidation'
import { json } from 'react-router-dom';

const GuestForm = () => {
    const formik=useFormik({
        initialValues:{
            name: '',
            mobile_number:'',
            father_name:'',
            father_number:'',
            address:'',
            room_number:'',
            purpose_of_stay:'',
            institution_name:'',
            adhaar_number:'',
            joining_date: ''
        },
        validate:MobileNumValidation,
        validateOnBlur:false,
        validateOnChange:false,
        onSubmit: async values=>{
            try{console.log(values)

                const options={
                    method:"POST",
                    headers:{
                        "Content-Type":"application/json"
                    },
                    body:JSON.stringify(values)
                };
                const Api_url="http://localhost:4044/mdb/addguest";

            axios.post(Api_url, values).then((responce)=>{
                console.log(responce)
            }).catch((error)=>{
                console.log(error)
            })

            }catch(error){
                console.log(error);
            }
            
        }

    })
  return (
    <MyLayout>
      <div className='container  bg-white ' style={{
        
              marginTop:'40px',
              marginBottom:'20px'}}>
                <Toaster position='top-center' reverseOrder={false}></Toaster>
                <div className='form-container flex-col' style={{
                    paddingTop:'15px',
                    paddingBottom:'15px',
                    width:'100%',
                     
                   
                  alignItems:'center'
                }}>

 

                <form className='  registerform' onSubmit={formik.handleSubmit}>

                
                <div className='container bg-white'  style={{
                    width:'60%',
                    paddingTop:'15px',
                    paddingBottom:'15px',
                    borderRadius: "3%",
                    boxShadow:'2px 2px 5px 2px rgba(0, 0, 0, 0.1)'
                }}>
                    

         <Typography.Title className='titlecla'>Registration form
        
        </Typography.Title>

                <div className='textbox flex flex-col'>
                     
                        <input {...formik.getFieldProps('name')} type='text ' className={styles.textbox} placeholder='name'  />    
                    </div>

                    <div className='textbox flex flex-col'
                     >
                     
                        <input {...formik.getFieldProps('mobile_number')} type='text ' className={styles.textbox} placeholder='mobile_number'/>    
                    </div>

                    <div className='textbox flex flex-col   '
                    >
                     
                        <input {...formik.getFieldProps('father_name')} type='text ' className={styles.textbox} placeholder='father_name'/>    
                    </div>

                    <div className='textbox flex flex-col   '
                     >
                     
                        <input {...formik.getFieldProps('father_number')} type='text ' className={styles.textbox} placeholder='father_number'/>    
                    </div>

                    <div className='textbox flex flex-col   '
                     >
                     
                        <input {...formik.getFieldProps('address')} type='text ' className={styles.textbox} placeholder='address'/>    
                    </div>

                    <div className='textbox flex flex-col  '
                     >
                     
                        <input {...formik.getFieldProps('room_number')} type='text ' className={styles.textbox} placeholder='room_number'/>    
                    </div>

                    <div className='textbox flex flex-col  '
                     >
                     
                        <input {...formik.getFieldProps('purpose_of_stay')} type='text ' className={styles.textbox} placeholder='purpose_of_stay'/>    
                    </div>
                    
                    <div className='textbox flex flex-col  '
                    >
                     
                        <input {...formik.getFieldProps('institution_name')} type='text ' className={styles.textbox} placeholder='institution_name'/>    
                    </div>

                    <div className='textbox flex flex-col  '
                     >
                     
                        <input {...formik.getFieldProps('adhaar_number')} type='text ' className={styles.textbox} placeholder='adhaar_number'/>    
                    </div>

                   <div className='submitbutton' style={{
                    display:'flex',
                         justifyContent:'center',
                    paddingTop:'25px',
                      
                     paddingBottom:"10px"
                   }}> <button type='submit' className={styles.btn}>submit</button></div>

</div>  
                </form>
                 
                



                </div>




              </div>
    </MyLayout>
  )
}

export default GuestForm
