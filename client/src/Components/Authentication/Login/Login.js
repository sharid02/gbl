import axios from 'axios'
import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import proxy from '../../../proxy.json'

export const Login = () => {
    const history=useHistory()
    const [value,setvalue]=useState({})
    console.log(value)
const [success,setSuccess]=useState()
    const handleValue=(e)=>{
        const newValue={...value}
        newValue[e.target.name]=e.target.value
        setvalue(newValue)
    }
    const handleSignin=async e=>{
        e.preventDefault();
        const formData=new FormData()
        formData.append('email',value.email)
        formData.append('password',value.password)
    
        try{
            const response=await axios.post(proxy.endpoint+'login',formData)
            if(response){
                if(response.data.status==="success"){
                    localStorage.setItem('accessToken',response.data.accessToken)
                    history.replace("/")
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
                    <form style={{background:"#fff",padding:"40px 10px",height:"300px"}} onSubmit={handleSignin}>
                    <h2>Logo</h2>
                    {success !==undefined ? <h3 style={{color:"red"}}>{success}</h3>:null}
                    <div>
                       
                        <input type="text" name="email" placeholder="Enter Your Email" style={{width:"100%",padding:"10px",marginBottom:"10px",borderRadius:"10px",outline:"none"}} required onChange={handleValue}/>
                    </div>
                    <div>
                    
                        <input type="password" name="password" placeholder="Password" style={{width:"100%",padding:"10px",marginBottom:"10px",borderRadius:"10px",outline:"none"}} required onChange={handleValue}/>
                    </div>
                    <div>
                        <input type="submit" value="Login" style={{padding:"10px 24px",background:"#3AB4FB",color:"#fff",border:"none",borderRadius:"10px",outline:"none"}}/>
                    </div>
                    <div >
                        <Link to="/signup"><h6 style={{marginTop:"20px"}}>Don't have an account?</h6></Link>
                    </div>
                    </form>
                </div>
                </div>
                </div>
            </div>
        </section>
    )
}
