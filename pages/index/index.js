import Layout from "../../components/Layout/Layout";
import PostCard from "../../components/PostCard/PostCard";
import { useStateValue } from "react-conflux";
import { deletePost } from "../../store/reducers/post";
import { PostContext } from "../../store/contexts";
import "./index.css";

const IndexContainer = () => {
  const [postState, postDispatch] = useStateValue(PostContext);

  const onRemove = id => postDispatch(deletePost({ id }));
  return (
    <div className="index-page">
      <h1 className="blog-title">My Blog</h1>
      <div className="posts-list">
        {postState.posts.map(post => (
          <PostCard
            key={post.title}
            title={post.title}
            image={post.image}
            onRemove={onRemove}
            id={post.id}
          />
        ))}
      </div>
    </div>
  );
};

const IndexPage = () => {
  return (
    <Layout>
      <IndexContainer />
    </Layout>
  );
};

export default IndexPage;
