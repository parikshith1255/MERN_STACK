import React from 'react';
import { useGlobalContext } from '../../context/context';
import { Card ,Space, Typography,Descriptions} from 'antd';
import { pink } from '@mui/material/colors';
const { Meta } = Card;
 

const GuestDetails = () => {
  const {selectedGuest}=useGlobalContext();
 

  return (
      
         <Card style={{
            backgroundColor:"pink"
         }}>
            <Space direction='vertical' size={50}>
            <Descriptions title="Guest Details" bordered></Descriptions>  </Space>
            
            <Space direction='horizontal' size={35}>
            <Card
              hoverable
             style={{
      width: 240,
      borderRadius: 20,
      fontSize: 24,
      padding: 18,
    }}
    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
  >
    <Meta title="Europe Street beat" description="www.instagram.com" />
  </Card>
           <Card
           
           style={{
             
            borderRadius: 30,
            fontSize: 34,
            paddingLeft:10
          }}
           >
            <Space direction='auto'>


            <Descriptions title="User Info"  >
    <Descriptions.Item label="UserName">{selectedGuest.name}</Descriptions.Item>
    <Descriptions.Item label="Mobile Number">{selectedGuest.mobile_number}</Descriptions.Item>
    <Descriptions.Item label="Aadhar Number">{selectedGuest.adhaar_number}</Descriptions.Item>
    <Descriptions.Item label="Room Number">{selectedGuest.room_number}</Descriptions.Item>
    <Descriptions.Item label="Father Name">
      {selectedGuest.father_name}
    </Descriptions.Item>
    <Descriptions.Item label="Father Number">
      {selectedGuest.father_number}
    </Descriptions.Item>
    <Descriptions.Item label="Purpose-of-Stay">
       {selectedGuest.purpose_of_stay}
    </Descriptions.Item>
    <Descriptions.Item label="Institution Name">
       {selectedGuest.institution_name}

    </Descriptions.Item>
    <Descriptions.Item label="Address">
       {selectedGuest.address}

    </Descriptions.Item>
    <Descriptions.Item label="Joining Date">
       {selectedGuest.joining_date}

    </Descriptions.Item>

    
    
  </Descriptions>
  </Space>
  
  </Card>
            </Space>
         </Card>
      
  );
};

export default GuestDetails;
