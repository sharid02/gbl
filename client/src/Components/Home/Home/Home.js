import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router'
import { Header } from '../Header/Header'
import { Post } from '../Post/Post'
import { ProfilePost } from '../ProfilePost/ProfilePost'
import proxy from '../../../proxy.json'

export const Home = () => {
    const history=useHistory()
    const [value,setvalue]=useState({})
    const [success,setSuccess]=useState()
   const [fileVideo,setFileVideo]=useState({})
 
   
const getUser=async e=>{
    const accessToken=localStorage.getItem('accessToken')
        const formData=new FormData()
        formData.append('accessToken',accessToken)
        try{
            const response=await axios.post(proxy.endpoint+'getUser',formData)
            if(response){
                if(response?.data.status==="success"){
                    setSuccess(response?.data)
                }
            }
           }catch (e) {
               console.log(e)
           }
          
}

    useEffect(()=>{
        getUser()
        handleNewsFeed()
    },[])

    const handleValue=(e)=>{
        const newValue={...value}
        newValue[e.target.name]=e.target.value
        setvalue(newValue)
    }
    const handleaddpost=async e=>{
        e.preventDefault();
        let video=""
        let images=""
        if(fileVideo?.video !==undefined){
            video=fileVideo.video
        }
        if(fileVideo?.pic!==undefined){
            images=fileVideo.pic
        }
        const accessToken=localStorage.getItem('accessToken')
            const formData=new FormData()
            formData.append('accessToken',accessToken)
            formData.append('caption',value.message)
            formData.append('image',images)
            formData.append('video',video)
            formData.append('_id',success?.data._id)
            if(value.message !== undefined || video !=="" || images !=="" ){
                try{
                    const response=await axios.post(proxy.endpoint+'addPost',formData)
                    if(response){
                        if(response?.data.status==="success"){
                          console.log("ok")
                          window.location.reload(true);
                        }
                    }
                   }catch (e) {
                       console.log(e)
                   }
                   handleNewsFeed()
            }else{
                alert('Please Write or upload something')
            }
              
    }
const [newsfeed,setNewsFeed]=useState([])

    const handleNewsFeed=async e=>{
        const accessToken=localStorage.getItem('accessToken')
            const formData=new FormData()
        formData.append('accessToken',accessToken)
        try{
            const response=await axios.post(proxy.endpoint+'getNewsfeed',formData)
            if(response){
                if(response?.data.status==="success"){
                    setNewsFeed(response.data.data)
                }
            }
           }catch (e) {
               console.log(e)
           }
    }
    return (
        <div>
           <Header/> 
           <ProfilePost success={success} handleValue={handleValue} setFileVideo={setFileVideo} fileVideo={fileVideo} handleaddpost={handleaddpost}/>
           <Post newsfeed={newsfeed}/>
        </div>
    )
}
