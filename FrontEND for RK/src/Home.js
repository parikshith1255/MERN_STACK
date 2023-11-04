import React, { useState, } from 'react'
import { NavLink } from 'react-router-dom' 
import {
   TwitterCircleFilled,
   FacebookOutlined ,
  InstagramOutlined  
   
} from '@ant-design/icons';
import dishicon from './ICONS/dish_857681.png'
import RKlogo from './ICONS/RK.png'

import tapwater from './ICONS/faucet_735349.png'
import wifi from './ICONS/wifi_6968620.png'
import roomicon from './ICONS/bedroom_2869122.png'


 
 
import './App.css';
 import {Layout,Menu,theme,Card,Empty, Space ,Typography,Statistic} from 'antd'
 
  
 import './01.css';
 
import UncontrolledExample from './Imageslide';
import Title from 'antd/es/typography/Title';
import { SiderContext } from 'antd/es/layout/Sider';
import Item from 'antd/es/list/Item';
import { Spa } from '@mui/icons-material';
const { Header, Content, Footer, Sider } = Layout;

 
 const Home = () => {

   
  const [show , setshow]=useState(false);

  const [loadComponent, setLoadComponent] = useState(false);

  const handleClick = () => {
    setLoadComponent(true);
  };


   return (
    

<Layout >
 <Header style={{
 padding: 0, margin: 0,
  backgroundColor:'white'
  }}>
 
        

          <div className="container-textbox"  style={{
            width: '100%',
            display:'flex',
            position:'sticky',
            justifyContent:'space-between', 
            boxShadow:'0px 2px 5px rgba(0, 0, 0, 0.1)',
            backdropFilter:'blur(5px)',
            paddingRight:'30px'
             
            
          }}>

            <div className='container-s'>
               <img src={RKlogo} alt='Icon' className='icon' style={{width: '200px', height:'100px', alignItems:'center',fontSize:'55px'}}/> 
           </div>

             
           <ul className="nav-menu">
              <li className="nav-item">
                <NavLink exact="true" to="/" className="nav-links">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink exact="true" to="/about" className="nav-links">
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink exact="true" to="/Register" className="nav-links">
                  Register
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink exact="true" to="/login" className="nav-links">
                  Login
                </NavLink>
              </li>
            </ul>
             
          </div>
         
       
 </Header>
 
  
     
<Content>
 
 
          <div   style={{ 
          width:'100%', 
          alignItems:'center',
          backgroundColor:'white'
           }}>

            <div style={{ 
              paddingTop:"50px", 
             
              
            }}>


              <div className='container-l  ' style={{textAlign:'center',
            color:'rgb(212,175,55)',
            alignItems:'center'}}>

          <Typography.Title style={{
            fontSize:'50px',
            fontStyle:'italic',
            fontWeight:'bold',
            textAlign:'center',
            fontFamily:'cursive',
            color:'rgb(229,184,11)',
             textDecoration:'underline'
             }}>RK Delux Girls Hostel </Typography.Title>
             <Typography.Text  style={{
             color:'rgb(212,175,55)',
             fontWeight:'bold',
             fontFamily:'cursive',
             fontStyle:'italic',
             fontSize:'medium'

            
             }}>Bank Street,sulthan Bazar, Hyderabad</Typography.Text></div>

             

          <div className='img-slider' style={{

              
             width:'100%'
             
             }}>            
             <UncontrolledExample/>
          
          </div>
           

          </div>


        <div className='container-xl-sharingdetails' style={{
           

        }}>

          <div className='row' style={{
           paddingTop:'25px',
           paddingBottom:'25px'
          }}><Typography.Title level={10} style={{
            textAlign:'center',

            color:"rgb(229,175,55)",
            fontFamily:'cursive',
            textDecoration:'underline'
          }}>Sharing Rooms</Typography.Title></div>

          <div className='container-grid-xl' style={{
            display:'flex',
            justifyContent:'space-around',
            
             
          }}>

              

              <div className='conatiner-l'><Card>
                <Space direction='vertical'>
                <Typography.Title className='titlecla' style={{
            
            color:"rgb(229,175,55)",
            
          }}>4 sharing</Typography.Title>
                </Space>
                </Card>
                </div>

              <div className='conatiner-l'><Card><Space direction='vertical'><Typography.Title className='titlecla' style={{color:'rgb(212 ,175 ,55)'}}>5 sharing</Typography.Title></Space></Card></div>
              <div className='conatiner-l'><Card><Space direction='vertical'><Typography.Title className='titlecla' style={{
            
            color:"rgb(229,175,55)",
             
          }}>6 sharing</Typography.Title></Space></Card></div>
              <div className='conatiner-l'><Card><Space direction='vertical'><Typography.Title className='titlecla' style={{
             
            color:"rgb(229,175,55)",
             
          }}>7 sharing</Typography.Title></Space></Card></div>
              
          </div>


          <div className='container-xl-fecilities' style={{ boxShadow:'0px 2px 5px rgba(0 0 0 0.5)' }}>


            
          <div>
                <Typography.Title  className='titlecla' style={{
              paddingTop:"35px",
              color:"rgb(229,175,55)",
              textDecoration:'underline'
            }}>Facilities</Typography.Title></div>


<div className='conatainer-xl' style={{
  display:'flex',
  flexDirection:'column',
   alignItems:'center'
               
              
              }}>
                


              <div className='container bg-white' style={{   
              border:'2px  ',
              width:'50%',
              display:'flex',
              flexDirection:'column',
              boxShadow:'2px 2px 5px rgba(0, 0, 0, 0.1)',
               color:'rgb(212,175,55)',
               fontSize:'25px',
               paddingBottom:'20px',
                
           
            }}> 
               
               <div className='container-l textbox' style={{
                display:'flex',
               paddingTop:'10px',
               paddingLeft:'30px',
               fontWeight:'bold',
               fontFamily:'cursive'
                    
                    
              }}>
                <img src={dishicon} alt='Icon' className='icon' style={{width: '50px', height:'50px',marginRight:'15px'}}/>
                <span><p>Homely Food</p></span>
               </div>
              
               <div className='container-l textbox' style={{display:'flex',
               paddingTop:'10px',
               paddingLeft:'30px' ,
               fontWeight:'bold',
               fontFamily:'cursive'   
                    
              }}>
                <img src={tapwater} alt='Icon' className='icon' style={{width: '50px', height:'50px',marginRight:'15px'}}/>
                <span><p>24x7 water</p></span>
               </div>
               
               
               <div className='container-l textbox' style={{display:'flex',
               paddingTop:'10px',
               paddingLeft:'30px',
               fontWeight:'bold',
               fontFamily:'cursive'    
                    
              }}>
                <img src={wifi} alt='Icon' className='icon' style={{width: '50px', height:'50px',marginRight:'15px',}}/>
                <span><p>Internet</p></span>
               </div>
               
              
               <div className='container-l textbox' style={{display:'flex',
               paddingTop:'10px',
               paddingLeft:'30px',
               fontWeight:'bold',
               fontFamily:'cursive'
                    
                    
              }}>
                <img src={roomicon} alt='Icon' className='icon' style={{width: '50px', height:'50px',marginRight:'15px',}}/>
                <span><p>Delux Rooms</p></span>
               </div>
               
               
                
              
              </div>
              
              <div className='container-xl-foodmenu'>
                <span>
                  <p>weekly Menu</p>
                </span>
              </div>
              
              </div>
  
  
             
             
  
          </div>
            
          </div>
           
           
            
           
        </div>
</Content>
 
<Footer class="text-center text-lg-start bg-light " style={{
  marginLeft:'0px',
  marginBottom:'0px',
  color:'black',
 
  
  
}}> 
 
 


    <div className='footer-logo' style={{ 
      display:'flex',
      paddingBottom:'10px',
     justifyContent:'space-around',
     boxShadow:'0px 2px 5px rgba(0, 0, 0, 0.1)',
     WebkitBackdropFilter:'blur(5px)',
     backgroundColor:'white'

    }}>
      <div className='logo-footer'><TwitterCircleFilled    /></div>
      <div className='logo-footer'><FacebookOutlined /></div>
      <div className='logo-footer'><InstagramOutlined /></div>
      <div className='logo-footer'><InstagramOutlined /></div>
    </div>


   
   
</Footer>

     </Layout>
   )
 }
 function DashboardCards({title,value,icon}){
    return<Card>
    <Space direction='horizontal'>
        {icon}
         
        <Statistic title={title} value={value}/>
        </Space>
    </Card>
}
 export default Home
 

 
