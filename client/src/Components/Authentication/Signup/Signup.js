import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import axios from 'axios';
import proxy from '../../../proxy.json'


export const Signup = () => {
    const history=useHistory()
    const [value,setvalue]=useState({})
    console.log(value)
const [success,setSuccess]=useState()
    const handleValue=(e)=>{
        const newValue={...value}
        newValue[e.target.name]=e.target.value
        setvalue(newValue)
    }
    const handleSignup=async e=>{
        e.preventDefault();
        const formData=new FormData()
        formData.append('name',value.name)
        formData.append('username',value.username)
        formData.append('email',value.email)
        formData.append('password',value.password)
        formData.append('birthdate',value.birthdate)
        try{
            const response=await axios.post(proxy.endpoint+'signup',formData)
            if(response){
                if(response.data.status==="success"){
                    history.replace("/login")
                }else{
                    setSuccess(response.data.message)
                }
            }
           }catch (e) {
               console.log(e)
           }
          
    }
    return (
        <section>
        <div className="container m-auto">
            <div className="row">
            <div className="col-md-12">
            <div style={{maxWidth:"450px",margin:"0 auto",marginTop:"100px"}}>
                <form style={{background:"#fff",padding:"40px 10px",}} onSubmit={handleSignup}>
                <h2>Logo</h2>
                {success !==undefined ? <h3 style={{color:"red"}}>{success}</h3>:null}
                <div>
                   <label >Name</label>
                    <input type="text" placeholder="Enter user name"  name="name" style={{width:"100%",padding:"10px",marginBottom:"10px",borderRadius:"10px",outline:"none"}} required onChange={handleValue}/>
                </div>
                <div>
                   <label >User Name</label>
                    <input type="text" placeholder="Enter user name"  name="username" style={{width:"100%",padding:"10px",marginBottom:"10px",borderRadius:"10px",outline:"none"}} required onChange={handleValue}/>
                </div>
                <div>
                <label >Email</label>
                    <input type="text" placeholder="Enter Your Email" name="email" style={{width:"100%",padding:"10px",marginBottom:"10px",borderRadius:"10px",outline:"none"}} required onChange={handleValue}/>
                </div>
                <div>
                <label >Password</label>
                <input type="password" placeholder="Password" name="password" style={{width:"100%",padding:"10px",marginBottom:"10px",borderRadius:"10px",outline:"none"}} required onChange={handleValue}/>
            </div>
            <div>
            <label >Date of Birth</label>
                <input type="date" placeholder="Password" name="birthdate" style={{width:"100%",padding:"10px",marginBottom:"10px",borderRadius:"10px",outline:"none"}} required onChange={handleValue} />
            </div>
                <div>
                    <input type="submit" value="Sign Up" style={{padding:"10px 24px",background:"#3AB4FB",color:"#fff",border:"none",borderRadius:"10px",outline:"none"}} />
                </div>
                <div >
                    <Link to="/Login"><h6 style={{marginTop:"20px"}}>Already have an account?</h6></Link>
                </div>
                </form>
            </div>
            </div>
            </div>
        </div>
    </section>
    )
}
