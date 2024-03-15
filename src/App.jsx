import { useState } from "react";
import "./App.css";
import Blogs from "./Components/Blogs/Blogs";
import Bookmarks from "./Components/Bookmarks/Bookmarks";
import Header from "./Components/Header/Header";

function App() {


  const [bookmark,setBookmark]=useState([]);

  const handleBookmark = blog =>{
       
    const newBookmarks = [...bookmark,blog];

    setBookmark(newBookmarks);


  }

  return (
    <>
      {/* Header section */}


      <Header></Header>

      {/* Main section */}


      <div className="w-[90%] mx-auto mt-4 md:mt-9 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className=" md:col-span-2">

          <Blogs handleBookmark={handleBookmark} ></Blogs>

        </div>

        <div className=" md:col-span-1">
          <Bookmarks bookmark={bookmark} ></Bookmarks>
        </div>
      </div>
    </>
  );
}

export default App;
