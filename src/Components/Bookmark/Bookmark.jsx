import PropTypes from 'prop-types';

const Bookmark = ({bookmark}) => {
    const { title } = bookmark;
    return (
        <div className=' bg-white rounded-md p-3 m-3 '>
            <h3 className=' md:text-xl text-black'>{title} </h3>
        </div>
    );
};

Bookmark.propTypes = {

    bookmark: PropTypes.object
  
  }

export default Bookmark;