import { Avatar } from '@material-ui/core'
import React from 'react'
import proxy from '../../../proxy.json'
export const PostView = ({feed}) => {
    const {caption,image,video,createdAt}=feed
    const {name,profileImage}=feed.user
    var createdAts = new Date(createdAt);
    var date = createdAts.getDate() + "";
    date = date.padStart(2, "0") + "-" +createdAts.getMonth()+ "-" + createdAts.getFullYear();
    let times= " " + createdAts.getHours() + ":" + createdAts.getMinutes();


    return (
        <div className="row" style={{background:"#fff",padding:"10px",marginLeft:"10px",borderRadius:"10px",marginRight:"10px",marginBottom:"30px"}}>
            <div className="col-md-1">
             <div className="userp">  
              {/* <img src="https://images.unsplash.com/photo-1495020689067-958852a7765e?ixid=MXwxMjA3fDB8MHxzZWFyY2h8OHx8bmV3c3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="" style={{width:"60px",height:"60px",borderRadius:"30px"}}/> */}
            <Avatar src={profileImage}/>
             </div>
            </div>
            <div className="col-md-11">
                <div>
                <h6 style={{marginLeft:"20px"}}>{name}</h6>
                <span  style={{marginLeft:"20px",}}>Published: {date} </span>
                <p  style={{marginLeft:"20px",}}>{times} {createdAts.getHours()>=12?<span>PM</span>:<span>AM</span>}</p>
                </div>
            </div>
            {caption!=="undefined"?<div className="col-md-12">
                <div><p style={{marginTop:"10px"}}>{caption}</p></div>
            </div>:null}
            {image?<div className="col-md-12">
                <div>
                    <img src={proxy.endpoint+image} alt="" style={{width:"100%"}}/>
                </div>
            </div>:null}
            {video?<div className="col-md-12">
                <div style={{marginTop:"10px"}}>
                <video width="100%" height="300px" controls>
                           <source src={proxy.endpoint+video}/>
                              </video>
                </div>
                </div>:null}
        </div>
    )
}
