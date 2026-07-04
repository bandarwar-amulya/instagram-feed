import "./App.css";
import Post from "./Post";

function App() {
  const image1 =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlClICM_Ds9N1OtH7zrjG_6usEh6s6TR4h2w&s";

  const image2 =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyfhNw_e3tjWjuSNcsSizR7nmElDlnrFmfoA&s";

  // Replace with a valid image URL
  const image3 =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoIydZxo4cTdmNDc3ipbcqIlh3GrtliUneTQUIImqJ7w&s=10";

  return (
    <div className="posts">
      <h1>Instagram Feed</h1>

      <Post
        image={image1}
        name="Sri Charan Lakkaraju"
      />

      <Post
        image={image2}
        name="Rajshekar Gupta"
      />

      <Post
        image={image3}
        name="Pradeep Ranganathan"
      />
    </div>
  );
}

export default App;