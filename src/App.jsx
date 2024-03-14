import "./App.css";
import Blogs from "./Components/Blogs/Blogs";
import Bookmarks from "./Components/Bookmarks/Bookmarks";
import Header from "./Components/Header/Header";

function App() {
  return (
    <>
      {/* Header section */}

      <Header></Header>

      {/* Main section */}
      <div className="w-[90%] mx-auto mt-4 md:mt-9 grid grid-cols-1 md:grid-cols-3">
        <div className=" md:col-span-2">
          <Blogs></Blogs>
        </div>

        <div className=" md:col-span-1">
          <Bookmarks></Bookmarks>
        </div>
      </div>
    </>
  );
}

export default App;
