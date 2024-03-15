import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';

const Bookmarks = ({bookmark}) => {
    return (
        <div className=" m-3 p-5 text-start bg-gray-200 rounded-md ">
            <h2 className=' text-black md:text-2xl'>Bookmarked Blogs : {bookmark.length} </h2>

           {
             bookmark.map((bookmark , index )=> <Bookmark key={index} bookmark={bookmark} ></Bookmark>)
           }
        </div>
        
    );
};

Bookmarks.propTypes = {

  bookmark: PropTypes.array

}

export default Bookmarks;