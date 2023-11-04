const Room=require('../model/roommodel')


const roomlist=async (req,res)=>{
    try{
        
  const { roomType,room }=req.body;
  console.log( roomType,'roomtype')

  const roomlist = await Room.find();
  console.log(roomlist ,'roomslistfound')
  if (!roomlist) {
    return res.status(404).json({ message: 'Room not found' });
  }
  const roomcount=roomlist.length

  

   const roomGroups = {};
    roomlist.forEach(room => {
      if (!roomGroups[room.type]) {
        roomGroups[room.type] = [];
      }
      roomGroups[room.type].push(room);
    });
    console.log(roomGroups,'room groups')
    res.send({roomlist,roomcount,roomGroups});
    console.log(roomcount)

    }catch(error){
        console.log(error)
    }
}

module.exports={roomlist}