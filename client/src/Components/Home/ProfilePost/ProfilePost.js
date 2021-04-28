import React, { useEffect, useState } from 'react'
import ControlPointOutlinedIcon from '@material-ui/icons/ControlPointOutlined';
import ChevronRightOutlinedIcon from '@material-ui/icons/ChevronRightOutlined';
import VideocamOutlinedIcon from '@material-ui/icons/VideocamOutlined';
import AddPhotoAlternateOutlinedIcon from '@material-ui/icons/AddPhotoAlternateOutlined';

export const ProfilePost = ({handleValue,success,setFileVideo,fileVideo,handleaddpost}) => {
    const [selectedFile, setSelectedFile] = useState()
    const [selectedVideo, setSelectedVideo] = useState()
    const [preview, setPreview] = useState()
    const [previewVideo, setPreviewVideo] = useState()

    useEffect(() => {
        if (!selectedFile) {
            setPreview(undefined)
           
            return
        }

        const objectUrlPic = URL.createObjectURL(selectedFile)
        setPreview(objectUrlPic)
        
        // free memory when ever this component is unmounted
        return () => URL.revokeObjectURL(objectUrlPic)
    }, [selectedFile])

    const onSelectFile = e => {
        if (!e.target.files || e.target.files.length === 0) {
            setSelectedFile(undefined)
            setFileVideo("")
            return
        }
     console.log(e.target.files[0].size)
        // I've kept this example simple by using the first image instead of multiple
        setSelectedFile(e.target.files[0])
        setFileVideo({...fileVideo,pic:e.target.files[0]})
    }
    useEffect(() => {
        if (!selectedVideo) {
            setPreviewVideo(undefined)
           
            return
        }

        const objectUrlVideo = URL.createObjectURL(selectedVideo)
        setPreviewVideo(objectUrlVideo)
        
        // free memory when ever this component is unmounted
        return () => URL.revokeObjectURL(objectUrlVideo)
    }, [selectedVideo])
    const onSelectVideo = e => {
        if (!e.target.files || e.target.files.length === 0) {
            setSelectedVideo(undefined)
            setFileVideo("")
            return
        }
        console.log(e.target.files[0].size)
        // I've kept this example simple by using the first image instead of multiple
        setSelectedVideo(e.target.files[0])
        setFileVideo({...fileVideo,video:e.target.files[0]})
    }
   
    return (
        <section>
            <div className="container" style={{marginTop:"50px"}}>
                <div className="row">
                    <div className="col-md-3" style={{background:"#fff",paddingBottom:"10px",}}>
                        <div className="profileCover">
                         <img src="https://images.unsplash.com/photo-1617340936441-a66d0df78b41?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="" width="100%" height="150px"/>
                        </div>
                        <div className="text-center">
                         <img src="https://images.unsplash.com/photo-1617368354211-2d7e04959261?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3OHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="" style={{width:"100px",height:"100px",borderRadius:"50px",marginTop:"-30px",marginBottom:"20px"}}/>
                         <h5>{success?.data.name}</h5>
                         <h6>Lorem ipsum dolor sit amet.</h6>
                        </div>
                        <div className="row" style={{marginTop:"10px"}}>
                            <div className="col-md-4">
                                <div className="text-center" style={{borderRight:"1px solid #707070"}}>
                                  <h6>106</h6>
                                  <h6>Post</h6>
                                </div>
                            </div>
                            <div className="col-md-4">
                            <div className="text-center" style={{borderRight:"1px solid #707070"}}>
                                  <h6>106</h6>
                                  <h6>Follower</h6>
                                </div>
                            </div>
                            <div className="col-md-4">
                            <div className="text-center">
                                  <h6>106</h6>
                                  <h6>Following</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-7">
                        <div className="postArea">
                       <form onSubmit={handleaddpost} >
                            <textarea name="message" placeholder="Create Post..." style={{width:"100%",height:"130px",}} onChange={handleValue} ></textarea>
                           <div className="previewfiles">
                          {selectedFile&& <img src={preview} alt="" width="130px" height="130px"/>} 
                         {selectedVideo && <video width="100" height="100px" controls>
                           <source src={previewVideo}/>
                              </video>}
                           </div>
                            <div className="uploadIcons">
                            <label htmlFor="uploadFile"><AddPhotoAlternateOutlinedIcon/></label>
                            <input type="file" id="uploadFile" style={{display:"none"}} accept="image/*" multiple onChange={onSelectFile}/>
                            <label htmlFor="uplodVideo"> <VideocamOutlinedIcon/></label>
                            <input type="file" id="uplodVideo" style={{display:"none"}} accept="video/*" onChange={onSelectVideo} />
                               
                                <input type="submit" value="post"/>
                            </div>
                            </form>
                        </div>
                        <div className="row" style={{background:"#fff",borderRadius:"10px",marginTop:"50px",marginLeft:"5px",marginRight:"5px",padding:"10px"}}>
                            <div className="col-md-2">
                                <div className="storys">
                                <div className="text-center storyProfile">
                           <img src="https://images.unsplash.com/photo-1617368354211-2d7e04959261?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3OHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="" style={{width:"60px",height:"60px",borderRadius:"30px",marginTop:"10px",}}/>
                            </div>
                            <div className="text-center">
                         <img src="https://images.unsplash.com/photo-1617340936441-a66d0df78b41?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="" width="100%" height="70px" style={{borderTopLeftRadius:"10px",borderTopRightRadius:"10px",}}/>
                         <div className="addStory">
                         <ControlPointOutlinedIcon/>
                         <h6>Add story</h6>
                         </div>
                        
                        </div>
                             </div>
                            </div>
                            <div className="col-md-2">
                            <div className="storys">
                                <div className="text-center storyProfile">
                           <img src="https://images.unsplash.com/photo-1617368354211-2d7e04959261?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3OHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="" style={{width:"60px",height:"60px",borderRadius:"30px",marginTop:"10px",}}/>
                            </div>
                            <div className="text-center">
                         <img src="https://images.unsplash.com/photo-1617340936441-a66d0df78b41?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="" width="100%"  height="140px" style={{borderRadius:"10px",}}/>
                        
                        
                        </div>
                             </div>
                            </div>
                            <div className="col-md-2">
                            <div className="storys">
                                <div className="text-center storyProfile">
                           <img src="https://images.unsplash.com/photo-1617368354211-2d7e04959261?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3OHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="" style={{width:"60px",height:"60px",borderRadius:"30px",marginTop:"10px",}}/>
                            </div>
                            <div className="text-center">
                         <img src="https://images.unsplash.com/photo-1617340936441-a66d0df78b41?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="" width="100%"  height="140px" style={{borderRadius:"10px",}}/>
                         
                        
                        </div>
                             </div>
                            </div>
                            <div className="col-md-2">
                            <div className="storys">
                                <div className="text-center storyProfile">
                           <img src="https://images.unsplash.com/photo-1617368354211-2d7e04959261?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3OHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="" style={{width:"60px",height:"60px",borderRadius:"30px",marginTop:"10px",}}/>
                            </div>
                            <div className="text-center">
                         <img src="https://images.unsplash.com/photo-1617340936441-a66d0df78b41?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="" width="100%"  height="140px" style={{borderRadius:"10px",}}/>
                        
                        
                        </div>
                             </div>
                            </div>
                            <div className="col-md-2">
                            <div className="storys">
                                <div className="text-center storyProfile">
                           <img src="https://images.unsplash.com/photo-1617368354211-2d7e04959261?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3OHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="" style={{width:"60px",height:"60px",borderRadius:"30px",marginTop:"10px",}}/>
                            </div>
                            <div className="text-center">
                         <img src="https://images.unsplash.com/photo-1617340936441-a66d0df78b41?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="" width="100%" height="140px" style={{borderRadius:"10px",}}/>
                         
                        
                        </div>
                             </div>
                            </div>
                            <div className="col-md-2">
                            <div className="storys">
                                <div className="text-center storyProfile">
                           <img src="https://images.unsplash.com/photo-1617368354211-2d7e04959261?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3OHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="" style={{width:"60px",height:"60px",borderRadius:"30px",marginTop:"10px",}}/>
                            </div>
                            <div className="text-center">
                         <img src="https://images.unsplash.com/photo-1617340936441-a66d0df78b41?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="" width="100%" height="140px" style={{borderRadius:"10px",}}/>
                        <div className="rightArrow">
                        <ChevronRightOutlinedIcon/>
                        </div>
                        </div>
                             </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-2">
                        <div style={{background:"#FFF",padding:"3px"}}>
                        <h3>Trends</h3>
                            <div>
                                <img src="https://images.unsplash.com/photo-1504711434969-e33886168f5c?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8bmV3c3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="" width="100%"/>
                            </div>
                            <div>
                                <h6>Lorem, ipsum dolor sit amet consectetur  elit.  </h6>
                            </div>
                            <div>
                                <img src="https://images.unsplash.com/photo-1572949645841-094f3a9c4c94?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NHx8bmV3c3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="" width="100%" height="150px"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
