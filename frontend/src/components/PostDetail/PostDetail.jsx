import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

const PostDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await axios.get(`/api/posts/${id}`);
        setPost(response.data);
      } catch (error) {
        console.error("Error fetching post:", error);
      }
    };
    fetchPost();
  }, [id]);

  const handleDelete = async () => {
    try {
      await axios.delete(`/api/posts/${id}`);
      alert("Post eliminado correctamente");
      navigate("/");
    } catch (error) {
      console.error("Error:", error);
    }
  };

  if (!post) return <div>Cargando...</div>;

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.description}</p>
      <button onClick={handleDelete}>Eliminar</button>
    </div>
  );
};

export default PostDetail;