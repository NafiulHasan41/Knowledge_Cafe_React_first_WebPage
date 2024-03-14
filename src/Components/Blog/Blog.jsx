import PropTypes from 'prop-types';


// using blog as profs
const Blog = ( {blog}) => {
    console.log(blog)
    return (
        <div>
            
        </div>
    );
};

Blog.propTypes = {

    blog: PropTypes.object.isRequired 

}

export default Blog;