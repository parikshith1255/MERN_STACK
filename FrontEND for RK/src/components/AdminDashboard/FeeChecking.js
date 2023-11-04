import React, { useEffect } from 'react';
import { Typography } from 'antd';
import { useGlobalContext } from '../../context/context';
import Item from 'antd/es/list/Item';
import { feeDueFinder, getAuthToken } from '../Auth';
import { useState } from 'react';
import { Table } from 'antd';
import axios from 'axios';

const FeeChecking = () => {
  const {setFeeDueCount} = useGlobalContext();
  const [guetList, setGuestList]=useState([])
  const ApiUrl=`http://localhost:4044/mdb/index`;
  const token=getAuthToken();

useEffect(()=>{
  axios.get(ApiUrl,{
    headers:{Authorization:`${token}`},
  }).then((responce)=>{
    setGuestList(responce.data);
     

  })
},[])

  const feePaymentDetails = guetList.map((item) => {
    const { name, fee_payment_dates, mobile_number } = item;
    return {
      name,
      fee_payment_dates,
      mobile_number
    };
  });

  console.log(feePaymentDetails, '   :   this is feePaymentDetails');

  const data = feeDueFinder(feePaymentDetails);
  console.log(data, '   :   this is Data',data.length);
 

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
    },
    {
      title: 'Last Fee Paid',
      dataIndex: 'lastfeepaid',
       
    },
    {
      title: 'Due Date',
      dataIndex: 'fee_due_date',
       
    },
    {
      title: 'Mobile Number',
      dataIndex: 'mobile_number',
       
    },
  ];

  const dueList = data.map((item,index) => ({
    key:index,
    name: item.name,
    lastfeepaid: item.lastFeePaid.toLocaleDateString(),
    fee_due_date: item.feeDueDate.toLocaleDateString(),
    mobile_number:item.mobileNumber
  }));

  const today = new Date();

  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const onSelectChange = (newSelectedRowKeys) => {
    console.log('selectedRowKeys changed: ', newSelectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };
  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
    selections: [
      Table.SELECTION_ALL,
      Table.SELECTION_INVERT,
      Table.SELECTION_NONE,
      {
        key: 'odd',
        text: 'Select Odd Row',
        onSelect: (changeableRowKeys) => {
          let newSelectedRowKeys = [];
          newSelectedRowKeys = changeableRowKeys.filter((_, index) => {
            if (index % 2 !== 0) {
              return false;
            }
            return true;
          });
          setSelectedRowKeys(newSelectedRowKeys);
        },
      },
      {
        key: 'even',
        text: 'Select Even Row',
        onSelect: (changeableRowKeys) => {
          let newSelectedRowKeys = [];
          newSelectedRowKeys = changeableRowKeys.filter((_, index) => {
            if (index % 2 !== 0) {
              return true;
            }
            return false;
          });
          setSelectedRowKeys(newSelectedRowKeys);
        },
      },
    ],
  };

  return (
    <div className='fee-section'>
      <div className='section-title'>
        <Typography.Title level={5} style={{ fontSize: '25px' }}>
          Due Fee Details : {today.toLocaleDateString()}
        </Typography.Title>
      </div>
      <Table rowSelection={rowSelection} columns={columns} dataSource={dueList} />
      ;
      <div className='section-table'></div>
    </div>
  );
};

export default FeeChecking;
