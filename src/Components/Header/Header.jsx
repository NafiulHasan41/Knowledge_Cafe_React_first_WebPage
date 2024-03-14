
import HeaderImage from '../../assets/images/profile.png'

const Header = () => {
  return (

    <div className="w-[90%] mx-auto mt-4 md:mt-9 flex justify-between items-center border-b-2 pb-7 ">
        
      <h1 className=" text-xl md:text-5xl text-black ">Knowledge Cafe</h1>
      <img src={HeaderImage} alt="" />
    </div>
  

  );
};

export default Header;
