import { PostContext } from "../contexts";
import { postReducer } from "../reducers/post";
import { StateProvider } from "react-conflux";

export default ({ children }) => (
  <StateProvider reducer={postReducer} StateContext={PostContext}>
    {children}
  </StateProvider>
);
