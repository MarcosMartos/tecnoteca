import React from "react";
import PostList from "../../components/PostList/PostList.jsx";
import PostForm from "../../components/PostForm/PostForm.jsx";

const Home = () => {
  return (
    <div>
      <h1>Blog</h1>
      <PostForm />
      <PostList />
    </div>
  );
};

export default Home;