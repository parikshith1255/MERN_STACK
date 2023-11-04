const User=require('../model/usermodel');
const bcrypt=require('bcryptjs')
const jwt= require('jsonwebtoken')

const loginAuth = async (req, res) => {

    try {
      let existingToken = req.header('Authorization');
        
       console.log(existingToken,"this is body")


       
      const { userName, userPassword, } = req.body;
  
      if (!userName || !userPassword) {
        return res.status(400).json({ error: "Please fill in the required data" });
      }
  
      const findUser = await User.findOne({ userName });
      if (!findUser) {
        return res.status(400).json({ error: "Invalid credentials" });
      }
  
      const isMatch = await bcrypt.compare(userPassword, findUser.userPassword);
  
      if (!isMatch) {
        return res.status(400).json({ error: "Invalid credentials" });
      }
  
      const token = await findUser.generateAuthToken();
      console.log(token);
  
      res.status(300).json({token})
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "Server error" });
    }
  };

const createUser=(req, res)=>{

  try { console.log("user is being created");
    const {userName,userPassword }=req.body ;

    const user=new User({

        userName: userName,
        userPassword: userPassword

    });
    user.save();
    console.log("userCreated Sucessfully....")

res.send("usercreated sucessfully")
}catch(error){
    console.log(error)
}
}


const uploadFile = (req, res) => {
try{  // Handle file upload here using multer middleware
  const multer = require('multer');

  // Add the multer configuration here for file upload
  const storage = multer({
    dest: "./uploads",
    filename: (req, file, cb) => {
      cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`);
    }
  });

  // The single() method expects the name attribute of the file input field (in this case, 'profile')
  const upload = storage.single('profile');

  // Call the upload function to handle the file upload
  upload(req, res, (err) => {
    if (err) {
      // Handle any error that occurred during file upload
      console.log(err);
      return res.status(500).json({ error: 'File upload failed' });
    }

    // File upload successful, respond with success status and the URL of the uploaded file
    const uploadedFileUrl = `http://localhost:4044/profile/${req.file.filename}`;
    res.status(200).json({ success: 1, profile_url: uploadedFileUrl });
  });}catch(error){
    console.log(error)
  }
};



module.exports={
    loginAuth,createUser,uploadFile
}