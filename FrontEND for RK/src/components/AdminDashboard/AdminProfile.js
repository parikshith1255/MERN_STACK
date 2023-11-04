import React from 'react';
import '../AdminDashboard/Admin.css'
import {Avatar, Card, Space,Upload,Input  } from 'antd';
import {
   
  UserOutlined,UploadOutlined 
} from "@ant-design/icons";




function AdminProfile() {


  const handleImageUpload = (info) => {
    if (info.file.status === 'done') {
      // You can handle the uploaded image here, e.g., save it to state or send it to the server
      console.log('Image uploaded successfully:', info.file.response);
    } else if (info.file.status === 'error') {
      console.error('Image upload failed.');
    }
  };

  return (
    <div className='profile' style={{
       paddingLeft:'180px',
       paddingRight:"180px",
       paddingBottom:'35px',
       
        
    }}>
<div className="avatar-container">
        <Upload
          name="avatar"
          action="/uploadImage" // Replace with the actual API endpoint to handle image upload
          onChange={handleImageUpload}
          showUploadList={false}
          beforeUpload={(file) => {
            // You can add custom image validation logic here, e.g., check file size or type
            return false;
          }}
        >
          <Avatar size={184} icon={<UserOutlined /> }><UploadOutlined /></Avatar>
          
 
        </Upload>
      </div>
<Card
    title="Profile"
    bordered={false}
    style={{
       
       
       
    }}
  >
     
      
      
    
     
      <Card type="inner" title="User Name"  style={{
        marginTop: 16,
      }}>
      Kotha Ravi
    </Card>
     
    <Card type="inner" title="UserID"  style={{
        marginTop: 16,
      }} >
      Kotha Ravi
    </Card>
     
    
  </Card>
<Card title='Change Password' style={{
        marginTop: 16,
      }}> <form className='pswd-form'>
        <Card type="inner" title="Old Password"  style={{
        marginTop: 16,
      }} >
      Kotha Ravi
    </Card>
    <Card type="inner" title="New Password"  style={{
        marginTop: 16,
      }} >
      <Input size="large" placeholder="large size" prefix={<UserOutlined />} />
    </Card>
    <Card type="inner" title="Confirm New Password"  style={{
        marginTop: 16,
      }} >
      <Input size="large" placeholder="large size" prefix={<UserOutlined />} required='true' />
    </Card>
      </form>
    </Card>
    </div>
  )
}

export default AdminProfile;
