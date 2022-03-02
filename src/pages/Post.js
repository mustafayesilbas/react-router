import { useNavigate, useParams } from "react-router-dom";

const Post = () => {
  const params = useParams();
  const navigate = useNavigate();

  const goToBack = () => {
    navigate(-1);
    // navigate("/blog");
  };

  return (
    <div>
      <p>
        Posts <mark>#{params.postId}</mark> is displayed!
      </p>
      <button onClick={goToBack}>Back</button>
    </div>
  );
};
export default Post;
