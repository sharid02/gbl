import React from 'react'
import PageviewOutlinedIcon from '@material-ui/icons/PageviewOutlined';
import EmojiFoodBeverageOutlinedIcon from '@material-ui/icons/EmojiFoodBeverageOutlined';
import NotificationsNoneOutlinedIcon from '@material-ui/icons/NotificationsNoneOutlined';
import PeopleAltOutlinedIcon from '@material-ui/icons/PeopleAltOutlined';
import ListAltOutlinedIcon from '@material-ui/icons/ListAltOutlined';
import TheatersOutlinedIcon from '@material-ui/icons/TheatersOutlined';
import BlurCircularOutlinedIcon from '@material-ui/icons/BlurCircularOutlined';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';

export const LeftSide = () => {
    return (

           <div className="row sLIcons" style={{background:"#fff",padding:"10px"}} >
               <div className="col-md-2">
                   <div className="i1">
                    <PageviewOutlinedIcon/>
                   </div>
               </div>
               <div className="col-md-10">
                   <div>
                        <h6 style={{marginTop:"10px"}}>Explore</h6>
                   </div>
               </div>
               <div className="col-md-2">
                   <div className="i2">
                    <EmojiFoodBeverageOutlinedIcon/>
                   </div>
               </div>
               <div className="col-md-10">
                   <div>
                        <h6 style={{marginTop:"10px"}}>Stories</h6>
                   </div>
               </div>
               <div className="col-md-2">
                   <div className="i3">
                    <NotificationsNoneOutlinedIcon/>
                   </div>
               </div>
               <div className="col-md-10">
                   <div>
                        <h6 style={{marginTop:"10px"}}>Notification</h6>
                   </div>
               </div>
               <div className="col-md-2">
                   <div className="i4">
                    <PeopleAltOutlinedIcon/>
                   </div>
               </div>
               <div className="col-md-10">
                   <div>
                        <h6 style={{marginTop:"10px"}}>Group</h6>
                   </div>
               </div>
               <div className="col-md-2">
                   <div className="i5">
                    <ListAltOutlinedIcon/>
                   </div>
               </div>
               <div className="col-md-10">
                   <div>
                        <h6 style={{marginTop:"10px"}}>Feeds</h6>
                   </div>
               </div>
               <div className="col-md-2">
                   <div className="i6">
                    <TheatersOutlinedIcon/>
                   </div>
               </div>
               <div className="col-md-10">
                   <div>
                        <h6 style={{marginTop:"10px"}}>Videos</h6>
                   </div>
               </div>
               <div className="col-md-2">
                   <div className="i7">
                    <BlurCircularOutlinedIcon/>
                   </div>
               </div>
               <div className="col-md-10">
                   <div>
                        <h6 style={{marginTop:"10px"}}>Games</h6>
                   </div>
               </div>
               <div className="col-md-2">
                   <div className="i8">
                    <SettingsOutlinedIcon/>
                   </div>
               </div>
               <div className="col-md-10">
                   <div>
                        <h6 style={{marginTop:"10px"}}>Setting</h6>
                   </div>
               </div>
           </div>
   
    )
}
