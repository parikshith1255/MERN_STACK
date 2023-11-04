import React from 'react'
import AppLayout from '../1Layout/Layout'
import { Padding } from '@mui/icons-material'
import { Content } from 'antd/es/layout/layout'
import mappointimg from '../ICONS/Screenshot 2023-08-18 191956.png'
import { Typography } from 'antd'
import '../App.css'
import { colors } from '@mui/material'

const AboutPage = () => {
  return (
    <AppLayout>
      <Content style={{
         padding:0,
         margin:0 }}>


       <div style={{
        marginTop:'45px',
        marginBottom:'15px',}}>  
       
       <div className='container about-page bg-white'>


        <Typography.Title className='titlecla'>About Us
        
        </Typography.Title>

        <div className='container bg-white' style={{ 
          textAlign:'center',
      fontFamily:'cursive',
      fontStyle:'italic',
      color:'rgb(212 175 55)',
      width:'75%',
      border:'2px ',
      boxShadow:'2px 2px 5px 2px rgba(0, 0, 0, 0.1)'
      }}>
          <h1 style={{
           
            
            width:'100%',
           padding:'15px',
            fontWeight:'bold',
            textDecoration:'underline'
          }}>RK Hostels pvt.Ltd</h1>
          <ul style={{
            fontWeight:'bold',
            fontSize:'25px',
            paddingTop:"25px",
            paddingBottom:'25px'
          }}>
            <li>2nd Floor, Mithila complex</li>
            <li>Bank Street, Abids, Hyderabad.</li>
            <li>Manager : Kotha Ravi Yadav</li>
            <li>contact : 9010352265</li>
          </ul>
        </div>



       </div>
       
       <div className='container contact-us bg-white' style={{
          alignContent:'center',
        display:'flex',
        flexDirection:'column',
        paddingBottom :'15px'
       }}>

       <Typography.Title className='titlecla'>Contact US
        
        </Typography.Title>

       <div className='container-xxl image  bg-white'
       style={{
        display:'flex',
           alignContent:'center',
           border:'2px',
           boxShadow:'2px 2px 5px rgba(0, 0, 0, 0.1)',
           width:'75%'
       }}>
        
       <a href='https://goo.gl/maps/4PiYUGQ22bzHhVbd6'> <img src={mappointimg} alt='Icon' className='icon' style={{width: '100%', height:'100%'
        }}/> </a>
        
        </div>

       </div>
       
       <div className='container bg-white' style={{
        width:'65%',
         paddingTop:'15px'
       }}>

        <div className='container  bg-white' style={{
           fontSize:'25px',
           paddingBottom:'15px',
          fontFamily:'cursive',
          fontStyle:"italic",
          color:'rgb(212 175 55)',
          border:'2px',
          boxShadow:'2px 2px 5px 2px rgba(0, 0, 0, 0.1)'
        }} >        <Typography.Title className='titlecla' style={{textDecoration:'underline'}}>Address</Typography.Title>

          <ul>
          <li>2nd Floor, Mithila complex</li>
          <li>Beside Gutha Drug Mart, Bank street</li>
          <li>Abids, Hyderabad, 500001</li>
        </ul></div>

       </div>
       
       
        </div>
       </Content>
    </AppLayout>
  )
}

export default AboutPage
