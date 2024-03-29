import { useEffect, useState } from "react";
import Blog from "../Blog/Blog";
import PropTypes from 'prop-types';

const Blogs = ({handleBookmark}) => {
   
    const[blogs , setBlogs] = useState([]);

    useEffect(() =>{
        fetch('blogs.json')
        .then( res => res.json())
        .then(data => setBlogs(data));
    } ,[])

    return (
        <div>

          {
          
            blogs.map( blog => <Blog key={blog.id} blog={blog} handleBookmark={handleBookmark}   ></Blog>)
          }

        </div>
    );
};

Blogs.propTypes = {
  handleBookmark: PropTypes.func
}

export default Blogs;