import React from 'react'

const form = () => {
  return (
    <div>
      <form  action='submit'  className='registration-form' onSubmit={submitHandler} >
           


           <div  className="txt_field">'
           <input  type="text" autoComplete='off' className='Full_name'   name='name'   value={name} onChange={changeHandler}   /> 
           <span></span>
           <label htmlFor='inputfield'  >Name</label>
           </div>
           
           <div  className="txt_field">
           <input  type="text"   autoComplete='off'  className='Full_name' name='mobile_number'   value={mobile_number}  onChange={changeHandler} />
           <span></span>
           <label  htmlFor='inputfield' >Mobile number</label>
           </div>
           
           <div  className="txt_field">
           <input  type="text"  autoComplete='off'    className='Full_name' name='father_name'   value={father_name} onChange={changeHandler}   />
           <span></span>
           <label htmlFor='inputfield' >father/guardian</label>
           </div>
           
           <div  className="txt_field">
           <input  type="text"  autoComplete='off'  className='Full_name' name='father_number'   value={father_number} onChange={changeHandler} />
           <span></span>
           <label  htmlFor='inputfield' >father/guardian-number</label>
           </div>
           
           <div  className="txt_field">
           <input  type="text" autoComplete='off'    className='Full_name' name='address'   value={address}   onChange={changeHandler}/>
           <span></span>
           <label htmlFor='inputfield' >Address</label>
           </div>
           
           
           <div  className="txt_field">
           <input  type="text"   autoComplete='off'   className='Full_name' name='room_number'   value={room_number}  onChange={changeHandler}  />
           <span></span>"
           <label htmlFor='inputfield' >Room-Number</label>
           </div>
           
           
           <div  className="txt_field">
           <input  type="text"  autoComplete='off'  className='Full_name' name='purpose_of_stay'   value={purpose_of_stay} onChange={changeHandler}  />
           <span></span>
           <label htmlFor='inputfield' >Purpose of Stay</label>
           </div>
           
           
           <div  className="txt_field">
           <input  type="text"  autoComplete='off'  className='Full_name' name='institution_name'   value={institution_name} onChange={changeHandler} />
           <span></span>
           <label htmlFor='inputfield'  >institution/office-name</label>
           </div>
           
           
           <div  className="txt_field">
           <input  type="text"  autoComplete='off'     className='Full_name' name='adhaar_number'   value={adhaar_number}   onChange={changeHandler} />
           <span></span>
           <label htmlFor='inputfield'  >Aadhar-Number</label>
           </div>
           
           <div className="txt_field">
                       <input
                         type="date" // Use date input for joining date
                         autoComplete="off"
                         className="Full_name"
                         name="joining_date"
                         value={joining_date}
                         onChange={changeHandler}
                       />
                       <span></span>
                       <label>Joining Date</label>
                     </div>
           
            <input type='submit'   className='Register' value='submit'/>
            </form>
           
    </div>
  )
}

export default form
