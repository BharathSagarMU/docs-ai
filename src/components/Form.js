import React,{useState,useEffect} from "react";
import Input from "./Input";
import Button from "./Button";



const Form = ({formType=null})=>{

    const [username,setUsername] =useState('');
    const [mail,setMail] =useState('')
    const [password,setPassword] = useState('')

    useEffect(()=>{
        console.log('component is mounting')
        return ()=>{
            console.log('component is unmounting')
        }
    },[])
 
    console.log('this is git check console second')
   const handleSubmit = ()=>{
       if (formType === 'login'){
        console.log("this is login fetch",username)
       }else{
        let formData = new FormData()
        formData.append('username',username)
        formData.append('mail',mail)
        formData.append('password',password)
        console.log('data',formData)

        fetch('http://127.0.0.1:8000/register')
        .then((response)=>response.json())
        .then((res)=>console.log(res.data))
       }

   }
   
   
    return(
        <>
        <div className="reg-form d-flex-c">
        <h2 style={{textAlign:'center'}}>{formType ==='registration'?'Registration form':'Login form'}</h2>
        {formType ==='registration' && <Input onChange={(e)=>setUsername(e.target.value)} type="text" label="User Name" placeholder="Enter your name ..."  />}
        <Input onChange={(e)=>setMail(e.target.value)} type="mail" label="Mail" placeholder="Enter your email.." />
        <Input onChange={(e)=>setPassword(e.target.value)} type="password" label="Password" placeholder="Enter password" />
        <Button onClick={handleSubmit} title="Submit"></Button>
        </div>

        <div className="d-flex-r" style={{width:'25%',marginTop:20}}>
        <hr className="hr-line" ></hr>
        <span>OR</span>
        <hr className="hr-line"></hr>
        </div>
        </>
    )
}

export default Form;