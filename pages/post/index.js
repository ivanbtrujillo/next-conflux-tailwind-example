import { withRouter } from "next/router";
import Layout from "../../components/Layout/Layout";
import { useStateValue } from "react-conflux";
import { PostContext } from "../../store/contexts";
import "./post.css";

/**
 * A container which is able to use the PostContext due is a children
 * of PostPage.
 * Receives an id of a post, filters the posts in the application state
 * and pass down the post that matches the id
 *
 * @param string id: the id of a post
 */
const PostContentContainer = ({ id }) => {
  const [postState] = useStateValue(PostContext);
  const post = postState.posts.find(post => post.id == id);

  return post ? (
    <div className="post">
      <h1 className="title">{post.title}</h1>
      <img src={post.image} className="image" width="20%" />
      <p className="content"> {post.content}</p>
    </div>
  ) : (
    <div>
      <h1> Post not found </h1>
    </div>
  );
};

/**
 * A Post page that is connected to the post context and use the
 * withRouter NextJS HOC to receive the route params
 *
 * @param string id: the id of a post
 */
const PostPage = withRouter(props => (
  <Layout>
    <PostContentContainer id={props.router.query.id} />
  </Layout>
));

export default PostPage;
