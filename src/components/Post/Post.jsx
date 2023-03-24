import React from "react";
import './post.css';
import { BsArrowRightShort } from 'react-icons/bs';
import postImage from '../../Assets/5.jpg'

const Post = ({post}) => {
    return (
        <div className="singlePost grid">
            <div className="imgDiv">
                <img src={postImage} alt="Post" />
            </div>
            <div className="postDetails">
                <h3 className="title">{post.title}</h3>
                <p>{post.body}</p>
            </div>
            <a href="#" className="flex">Read More <BsArrowRightShort className='icon' /></a>
        </div>
    )
}

export default Post