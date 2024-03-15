import PropTypes from 'prop-types';
import { CiBookmark } from "react-icons/ci";



// using blog as profs
const Blog = ( {blog , handleBookmark}) => {
   const{ cover , reading_time , author_img , author ,posted_date , title , hashtags } = blog;
     
   return (
        <div className=' mb-14'>

            <div className=' bg-cover'>  <img className=' w-full rounded-lg ' src={cover} alt="" /></div>

            <div className='flex justify-between items-end my-5 '>

                <div className=' flex gap-4 '>
                    <div> 
                        <img className=' w-12 ' src={author_img} alt={ author }  />
                    </div>
                    <div>
                        <h2> {author} </h2>
                        <p> {posted_date} </p>
                    </div>
                </div>

                <div> <span> {reading_time} min read </span>
                 <button onClick={() => handleBookmark(blog)} className=' text-3xl text-red-600 '><CiBookmark></CiBookmark> </button> </div> 
            </div>

            <div>
                <h1 className='text-3xl'> {title}  </h1>
            </div>

           <div className='my-3 '>
            <p>
                {
                    hashtags.map((hash , index) => <span className=' mr-3' key={index} > #{hash} </span>)
                }
            </p>
           </div>

          
          
        </div>
    );
};

Blog.propTypes = {

    blog: PropTypes.object.isRequired ,
    handleBookmark: PropTypes.func

}

export default Blog;