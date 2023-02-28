import React, { useState } from 'react'
import '../App.css'
import {Box, Button, TextField, Typography} from '@mui/material'
import data from "../data.json"
import { useNavigate } from 'react-router-dom'




const Login = () => {
  const [adhar , setadhar] =useState("")
  const [phone , setphone] =useState("")
  const [admin , setadmin] =useState("admin_login")
  const [login , setlogin] =useState(" User")
//   const [useradhar ,setuseradhar] = useState("");
//   const [userphone ,setuserphone] = useState("");  
//   const [error , setError] = useState(""); 
 
  const navigate = useNavigate();
 
 
 
  const handleadhar = (e) => {
    const regex = /^[0-9\b]+$/;
    if (e.target.value === "" || regex.test(e.target.value)) {
      setadhar(e.target.value);
    
    }
  };
  
  const handlephone = (e) => {
    const regex = /^[0-9\b]+$/;
    if (e.target.value === "" || regex.test(e.target.value)) {
      setphone(e.target.value);
    }
  };

  const handleadmin=(e)=>{
    if ( admin === 'admin_login') {

        setadmin('User_login');
        setlogin("Admin");

    }
    if(admin === 'User_login') {
        setadmin('admin_login');
        setlogin("User");
    }
  }

 
  // const handleSubmit =(e)=>{
  //   e.preventDefault();
  //   const user= data.users.find(u =>u.adhar === adhar);
  //   console.log(user);
  //   if(user && user.phone === phone){
  //       alert("sucessfull")
  //   }else{
  //       alert("Please check again , your details!")
  //   }
  // }
 const handleSubmit=(e)=>{
  if(login === "User"){
    e.preventDefault();
    const user= data.users.find(u =>u.adhar === adhar);
      console.log(user);
      if(user && user.phone === phone){
          alert(" User,sucessfull")
           navigate('/voting')
      }else{
          alert(" User,Please check again , your details!")
      }
    
  }else{
     e.preventDefault();
     const admin = data.admin.find(a => a.adhar === adhar);
     if(admin && admin.phone === phone){
        alert("Admin , sucessfull")
        navigate('/admin')
     }else{
       alert("Admin , Please check again , your details!")
     }
  }
}


  // const loginbutton=()=>{

  //   if(login==="User"){
  //      alert("user")
  //   }else{
  //       alert("admin")
  //   }
  // }


 

  return (
    <div className="bg-gradient-to-r from-red-400 to-orange-500 h-auto">
      
    
    <form className='p-10'>
     
      <Box display='flex' flexDirection={"column"} maxWidth={400} alignItems={'center'} 
      justifyContent={"center"} margin={'auto'} marginTop={0} padding={10} borderRadius={5} 
      boxShadow={'5px 5px 10px #ccc'} sx={{":hover":{
        boxShadow: "10px 10px 15px #ccc"
      }}}
      >
         <Button margin='normal' variant='contained' onClick={handleadmin}>{admin}</Button>
         <Typography variant="h2" textAlign='center' padding={3} >{login}</Typography>
        <TextField variant='outlined' placeholder='Adhar-number' type={'int'} onChange={(e) => handleadhar(e)} value={adhar} margin='normal' autoComplete='none'/>
        <TextField variant='outlined' placeholder='Registerd_Phone-number' type={'int'} onChange={(e)=> handlephone(e)} vlaue={phone} margin='normal' autoComplete='none'/>
      
        <Button margin='normal' variant='contained' onClick={handleSubmit}>Login</Button>
         
                  
      </Box>



  

      
    </form>
    
    
    </div>
    
  )
 
}

export default Login
