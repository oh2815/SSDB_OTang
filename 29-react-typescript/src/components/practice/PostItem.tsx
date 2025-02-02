import { PostItemProps } from "../../types/interface";

// PostItem 컴포넌트입니다.
const PostItem = ({ postid, posttitle, postbody }: PostItemProps) => {
  return (
    <div className="PostItem">
      <div>
        <span className="id">No. {postid}</span>
        <span className="title">- {posttitle}</span>
      </div>
      {/* <p className="body">{postbody.slice(0, 120)}...</p> */}
    </div>
  );
};

export default PostItem;
