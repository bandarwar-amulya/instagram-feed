import { useState } from "react";

const Post = (props) => {
  const [likes, setLikes] = useState(0);

  const handleLikes = () => {
    setLikes((prevLikes) => prevLikes + 1);
  };

  return (
    <div className="post">
      <p>{props.name}</p>
      <img src={props.image} alt={props.name} />
      <button onClick={handleLikes}>
        ❤️ Likes {likes}
      </button>
    </div>
  );
};

export default Post;