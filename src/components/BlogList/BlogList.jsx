import React from "react";
import './blogList.css';
import { useDispatch, useSelector} from "react-redux";
import { getPosts } from '../../redux/blog/postSlice';
import Post from "../Post/Post";
import { useEffect } from "react";
import Preloader from "../../components/Preloader/Preloader";


const BlogList = () => {
    const dispatch = useDispatch();
    const { status, error } = useSelector(state => state.post);
    useEffect(() => {
        dispatch(getPosts())
    }, [dispatch]);
    
    const posts = useSelector((state) => state.post.posts);
    
    return (
        <section className="blog container ">
            <div className="secContainer">
                <div className="secIntro">
                    <h2 className="secTitle">Our Best Blog</h2>
                    <div className="mainContainer">
                    {status === 'loading' && <Preloader />}
                    {error && <h2>An Error occerd:{error}</h2>}
                        <div className="grid">
                            {
                            posts?.map((post) => (
                                <Post key={post.id} post={post}></Post>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BlogList





