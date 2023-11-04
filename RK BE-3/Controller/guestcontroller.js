 
const Guest=require('../model/guestmodel');
const Rooom=require('../model/roommodel')

//show the list of guest

const index=(req,res)=>{
      
    Guest.find()
    .then(response =>{
        res.send(response)
    }).catch(error=>{
        res.json({error})
    })
}



const show=(req,res)=>{
    const data=req.body
      
    Guest.findById(data.name)
    .then(response =>{
        res.send(response)
    }).catch(error=>{
        res.json({error})
    })
}


const addguest=(req,res)=>{
    const date=new Date();
    const data=req.body;
    console.log('Received data hellow : ', data);
   
  res.send('Data received');
  
    const guest=new Guest({ 
        name:data.name,
        mobile_number:data.mobile_number,
        father_name:data.father_name,
        father_number:data.father_name,
        address:data.address,
        room_number:data.room_number,
        purpose_of_stay:data.purpose_of_stay,
        institution_name:data.institution_name,
        adhaar_number:data.adhaar_number,
        joining_date: date ,
        relieving_date: null,
        fee_payment_dates: [data.joining_date], 

         
    
    
      });
      console.log("Z" ,guest)
         
      guest.save()
      console.log("done")

}

const update=(req,res)=>{
    let searchid=req.body.adhaar_number; 
    const data=req.body
    let updatedata={ 

        name:data.name,
        mobile_number:data.mobile_number,
        father_name:data.father_name,
        father_number:data.father_number,
        address:data.address,
        room_number:data.room_number,
        purpose_of_stay:data.purpose_of_stay,
        institution_name:data.institution_name,
        adhaar_number:data.adhaar_number
    
    }
    Guest.findByIdAndUpdate(searchid,{$set:updatedata})
    .then(response =>{
        res.json({messeage:"guest updated sucessfully"})
    }).catch(error=>{
        res.json({error})
    })
     
}

const destroy=(req,res,next)=>{
    let searchid=req.body.adhaar_number; 
    Guest.findByIdAndRemove(searchid)
    .then(response =>{
        res.json({response})
    }).catch(error=>{
        res.json({messeage:"guest removed sucessfully"})
    })
}

const payfees=(req,res)=>{

   try {let searchid=req.body.guestDetails
    const data=req.body
    const todayDate=new Date()

    
    const newFeePaidDetails = {
        due_date: data.paymentDueDate,
        paid_date: todayDate,
        amount_paid: null, // Assuming you have an 'amountPaid' field in the request body
        collected_by: null, // Assuming you have a 'collectedBy' field in the request body
      };
    
      console.log(newFeePaidDetails);

    let updatedata={
        $push: {
            fee_paid_details: newFeePaidDetails, // Add the newFeePaidDetails object to the fee_paid_details array
            fee_payment_dates: data.paymentDueDate, // Update the fee_payment_dates array
          },
    }


    Guest.updateOne({ adhaar_number: searchid }, updatedata)
    .then((response) => {
      res.json({ message: "Fees paid successfully" });
    })
    .catch((error) => {
      res.json({ error });
    });
}catch(error){
    console.log(error)
}

}

module.exports={
    index, show, addguest,destroy,update,payfees
}
