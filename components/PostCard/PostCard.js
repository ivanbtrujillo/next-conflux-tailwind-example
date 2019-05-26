import Link from "next/link";
import "./PostCard.css";

const PostCard = ({ title, image, id, onRemove, ...props }) => (
  <div className="card-wrapper">
    <button
      className="button-danger-small-rounded"
      onClick={e => {
        e.preventDefault();
        e.stopPropagation();
        onRemove(id);
      }}
    >
      X
    </button>
    <Link href={`/post?id=${id}`}>
      <a className="post-link">
        <div className="post-item" style={{ backgroundImage: `url(${image})` }}>
          <div className="post-title">{title}</div>
        </div>
      </a>
    </Link>
  </div>
);

export default PostCard;
