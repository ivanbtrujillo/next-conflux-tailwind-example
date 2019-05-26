import { useStateValue } from "react-conflux";
import { PostContext } from "../../store/contexts";
import Layout from "../../components/Layout/Layout";
import { useState } from "react";
import { addPost } from "../../store/reducers/post";
import "./writer.css";
/**
 * A container which is able to use the PostContext due is a children
 * of WriterPage.
 *
 */
const WriterContainer = () => {
  const [state, postDispatch] = useStateValue(PostContext);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState("");
  const [buttonStatus, setButtonStatus] = useState("normal");

  const savePost = () => {
    postDispatch(addPost({ title, content, image }));
    setButtonStatus("saved");
    setTitle("");
    setContent("");
    setImage("");
  };

  return (
    <div className="writer">
      <h1 className="writer-title">Write a post</h1>
      <input
        className="writer-input"
        value={title}
        onChange={e => setTitle(e.target.value)}
        placeholder="Write a title"
      />
      <input
        className="writer-input-image"
        placeholder="Image url( https:// ... )"
        onChange={e => setImage(e.target.value)}
      />
      <textarea
        className="writer-textarea"
        placeholder="Write your post content"
        value={content}
        onChange={e => setContent(e.target.value)}
      />
      <button
        disabled={!title || !content}
        className="button-primary"
        onClick={savePost}
      >
        Save
      </button>
    </div>
  );
};

/**
 * A Write page that is connected to the post context
 */
const WriterPage = () => (
  <Layout>
    <WriterContainer />
  </Layout>
);

export default WriterPage;
