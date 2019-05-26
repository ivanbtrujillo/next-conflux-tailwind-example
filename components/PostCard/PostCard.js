import Link from "next/link";
import "./PostCard.css";

const PostCard = ({ title, image, id, ...props }) => (
  <Link href={`/post?id=${id}`}>
    <a className="post-link">
      <div className="post-item" style={{ backgroundImage: `url(${image})` }}>
        <div className="post-title">{title}</div>
      </div>
    </a>
  </Link>
);

export default PostCard;
