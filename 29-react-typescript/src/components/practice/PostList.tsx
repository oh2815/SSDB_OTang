// PostList 컴포넌트 입니다.
import { useEffect, useState } from "react";
import PostItem from "./PostItem";
import { PostItemInterface } from "../../types/interface";

const PostList = () => {
  const [posts, setPosts] = useState<PostItemInterface[]>([]);

  useEffect(() => {
    const getPosts = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      const jsonData = await res.json();
      console.log(jsonData.slice(0, 10));
      setPosts(jsonData.slice(0, 10));
    };

    setTimeout(() => {
      getPosts();
    }, 2000);
  }, []);

  return (
    <div className="PostList">
      <header>Post List</header>
      {posts.length > 0 ? (
        posts.map((post) => {
          console.log(post);
          return (
            <PostItem
              key={post.id}
              postid={post.id}
              posttitle={post.title}
              postbody={post.body}
            />
          );
        })
      ) : (
        <h2>Loading...</h2>
      )}
    </div>
  );
};

export default PostList;
