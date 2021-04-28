import React from 'react'
import { LeftSide } from '../LeftSide/LeftSide'
import { PostView } from '../PostView/PostView'
import { RightSide } from '../RightSide/RightSide'

export const Post = ({newsfeed}) => {
    return (
        <section>
            <div className="container mt-5">
                <div className="row">
                   <div className="col-md-3">
                   <LeftSide/>
                   </div>
                   <div className="col-md-7">
                       
                       {newsfeed.map(feed=><PostView feed={feed} key={feed._id}/>)}
                   </div>
                   <div className="col-md-2">
                       <RightSide/>
                   </div>
                </div>
            </div>
        </section>
    )
}
