import React from 'react'
import { useEffect,useState} from 'react'
import { Typography,Col,Row ,Card,Space,Statistic,Table,Tag} from 'antd';
import {
    DollarCircleOutlined,
    ShoppingCartOutlined,
    TwitterOutlined,  
  } from "@ant-design/icons";
  import '../AdminDashboard/Admin.css'


  import LocalHotelIcon from '@mui/icons-material/LocalHotel';
import { data } from 'autoprefixer';


const Rooms =  () => {
const [roomlist,setroomlist]=useState({});
const [roomGroups,setRoomGroups]=useState([]);
const[roomType,setroomType]=useState("4-sharing");
const[room,setroom]=useState("sharing");
const [dataLoaded, setDataLoaded] = useState(false);
 

useEffect(() => {
    async function fetchRoomData() {
       
      const ApiUrl = `http://localhost:4044/mdb/roomlist`;
  
      const options = {
        method :"POST",
        headers :{   'Content-Type': 'application/json'  },
         body: JSON.stringify({ roomType,room })
                       }
      console.log('this is  ',roomType)
  
      const res = await fetch(ApiUrl, options);
      
      if (!res.ok) {
        throw new Error('Network response was not ok');
      }
  
      const data = await res.json();
      const list=data.roomlist;
      const list2=data.roomGroups;
      const list3=list2['4-sharing'][0] 
       
      setroomlist(list3); 
      setRoomGroups(list2)
      setDataLoaded(true);
      console.log("roomlistx:", list );// Set the fetched data to the state
       // Log the fetched data
      
       console.log("roomlistz:", list3 );
    }
  
    fetchRoomData();
    console.log("roomlist1:", roomlist );
    console.log("roomlisty:", roomGroups);
    const totalBedsIn4SharingRooms = dataLoaded ? roomGroups['4-sharing'].reduce((total, room) => total + room.totalBeds, 0) : 0;

    console.log('total beds in 4 share ',totalBedsIn4SharingRooms)
     
  }, []);
  
  const [isOpen, setIsOpen] = useState(false);

  const toggleCard = () => {
      setIsOpen(!isOpen);
  };

  return (
    <div className='Roomsection' style={{
        display:'flex',
         flex:'1',
         flexDirection:"column"
         
        
         
    }}>
       
      <div className='title'>
      <Typography.Title level={5} style={{ fontSize: '25px' }}>
           Rooms 
        </Typography.Title>
      </div>

      <div className='content1' style={{
        flex:"1",
        width:'100%'
      }}>
  <Card style={{
   backgroundColor:'rgba(255, 255, 255, 0.55)', 
  }}>
    <Space direction='vertical'>
    {dataLoaded ? (
              Object.keys(roomGroups).map((sharingType, index) => (
                <Row gutter={16} > 
            
                <Card style={{
                    
                    display:"flex",
                    flex:'1',
               
                     
                     
                }}>
                      <Row gutter={16} style={{
                
            }}>
                      <Typography.Title level={5} style={{ fontSize: '20px' ,
                       justifyContent: 'space-between', // Align items horizontally
                       alignItems: 'center',
                       display: 'flex',
                       
                       borderRadius:'10px',
                       backgroundColor:'white'
                     }} >
                                    {sharingType}  
                         </Typography.Title>
                         
                      </Row>
                          
                    <Row gutter={16}  style={{ 
                 
                marginTop:'15px'
            }}>
                    <Space direction='horizontal'>
                        
                        <DashboardCards icon={<LocalHotelIcon style={{
                color: "black",
                backgroundColor: "#5faffa",
                borderRadius: 10,
                borderBlockColor:'black',
                border: '1px solid black',
                fontSize: 54,
                padding: 1,
              }}/>} title={"Total-Beds"} value={dataLoaded?roomGroups[sharingType].reduce((total,room) => total + room.totalBeds, 0):0}/>    
              
              
              <DashboardCards icon={<LocalHotelIcon style={{
                 color: "black",
                 backgroundColor: "#4aff56",
                 borderRadius: 10,
                 borderBlockColor:'black', 
                 border: '1px solid black',
                 fontSize: 54,
                 padding: 1,
              }}/>} title={"Occupied-Beds"} value={12345}/>  
              
              <DashboardCards icon={<LocalHotelIcon style={{
                 color: "black",
                 backgroundColor: "#fc4c4c",
                 borderRadius: 10,
                 borderBlockColor:'black',
                 border: '1px solid black',
                 fontSize: 54,
                 padding: 1,
              }}/>} title={"UnOccupied-Beds"} value={12345}/>
    
    <button className='btn primary-color-dark' onClick={toggleCard} style={{
        border:'2px solid black',
        borderRadius:'20px',
        backgroundColor:"white"
    }}>  more</button>
                        </Space>
                    </Row>

                    <Row gutter={16}  style={{
                 
                marginTop:'15px',
                justifyContent:'space-between'
                         }}>
                     
                     {isOpen&&(<div className='roomcards' style={{
                        display:'flex',
                        flexWrap: 'wrap',
                        justifyContent:'space-around'
                    
                     }}>
                              {roomGroups[sharingType].map((room,index)=>(<RoomCards room={room} index={index}/>))}
                              </div>)}
                    </Row>
                    
                </Card>
                
            </Row>
              ))
            ) : (
              <p>Loading...</p>
            )}  
    </Space>
  </Card>
</div>


    </div>
  )
}
function DashboardCards({title,value,icon}){
    return<Card style={{
          
    
    }}>
    <Space direction='horizontal'>
        {icon}
         
        <Statistic title={title} value={value}/>
        </Space>
    </Card>
}



function chunkArray(array, chunkSize) {
  const chunks = [];
  for (let i = 0; i < array.length; i += chunkSize) {
    chunks.push(array.slice(i, i + chunkSize));
  }
  return chunks;
}


function RoomCards({room,index}){
    
      
    const bedsList=room.beds;
      
    const columns=[
        {
            title: 'No',
            dataIndex: 'key',
             
          },
        {
            title: 'Name',
            dataIndex: 'name',
          },
          {
            title: 'AadharNumber',
            dataIndex: 'adhaar_number',
             
          },
          
    ]

    const dataList=bedsList.map((item,index) => ({
        key:(index+1),
        name: item.name,
         adhaar_number:item.adhaar_number,
      }));
    return<Card  style={{
         
      
    }}>
            <Row gutter={10} style={{ 
           display: 'flex', justifyContent: 'space-between' 
    }}>
                
                <Col   ><LocalHotelIcon style={{
            color: "black",
            backgroundColor: " white",
            borderRadius: 10,
            borderBlockColor:'black',
            border: '1px solid black',
            fontSize: 54,
            padding: 1,
         }}/>
        </Col>
        
        <Col  ><div style={{
            display:'flex',
            color:'black',
            fontSize:'36px',
            border:'2px solid black',
            borderRadius:'20px',
            fontWeight:'bold'

        }}>
      {room.roomNumber}
    </div>
        
        </Col>
        
        </Row>



    <Row gutter={16}  className="custom-statistic">
    <Col  >
      <Statistic title="Total Beds" value={room.totalBeds} valueStyle={{ color: 'black',
    
   fontSize:'35px', fontWeight:'bold', textAlign: 'center', }}  />
    </Col>
    <Col   >
      <Statistic title="Occupied " value={room.beds.filter(item=>item!==null).length}   valueStyle={{ 
        color: 'green',
         fontSize:'35px',
          fontWeight:'bold',
           textAlign: 'center',
             }}/>
    </Col>
    <Col >
      <Statistic title="UnOccupied " value={room.beds.filter(item=>item==null).length}     valueStyle={{ color: 'Red',
       fontSize:'35px',
        fontWeight:'bold' ,
        textAlign:'center'
         }} />
    </Col>
  </Row>


  <Row>
    
  <div style={{
     
    marginTop:'16px',
    display:'flex',
    flex:'1'
  }}>
     
    <Table   columns={columns} pagination={false} showHeader={true}  bordered={true}    style={{
     
    display:'flex',
    flex:'1',
     
  }} dataSource={dataList}/></div>
  </Row>
         
    </Card>
}



export default Rooms
