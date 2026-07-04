import "./App.css";
import Post from "./Post";
import image1 from "./assets/image1.jpg"
import image2 from "./assets/image2.jpg"
import image3 from "./assets/image3.jpg"
function App(){
  return(
    <div id="container">
       <h1>Instagram Feed</h1>
       <Post
       name="Amulya"
        image={image2}
     />
      <Post
        name="siri"
        image={image3}
     />
      <Post
        name="laxmi"
        image={image1}
     />
    </div>
  )
}

export default App;