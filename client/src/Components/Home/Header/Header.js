import React from 'react'
import { Link } from 'react-router-dom'
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import CameraIcon from '@material-ui/icons/Camera';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import { Avatar } from '@material-ui/core';
import NotificationsNoneOutlinedIcon from '@material-ui/icons/NotificationsNoneOutlined';
import ChatOutlinedIcon from '@material-ui/icons/ChatOutlined';

export const Header = () => {
    return (
      
           <section style={{background:"#3AB4FB",padding:"30px 30px",boxShadow:"0px -5px 20px #000000",}}>
               <div className="container">
                 <div className="row">
                   <div className="col-md-4">
                     <div className="row">
                       <div className="col-md-2">
                         <div>Logo</div>
                       </div>
                       <div className="col-md-10">
                         <div ><input type="search"   style={{borderRadius:"10px",outline:"none",border:"none",height:"32px",padding:"5px",width:"100%",}}/></div>
                       </div>
                     </div>
                     
                   </div>
                   <div className="col-md-1"></div>
                     <div className="col-md-1"><div><HomeOutlinedIcon/></div></div>
                     <div className="col-md-1"><div><VideoLibraryIcon/></div></div>
                     <div className="col-md-1"><div><SupervisorAccountIcon/></div></div>
                     <div className="col-md-1"><div><CameraIcon/></div></div>
                     <div className="col-md-1"><div><Avatar/></div></div>
                     <div className="col-md-1"><div><NotificationsNoneOutlinedIcon/></div></div>
                     <div className="col-md-1"><div><ChatOutlinedIcon/></div></div>
                 </div>
               </div>
           </section> 
           
            
     
    )
}
