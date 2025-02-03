import React, { useState } from "react";
import axios from "axios";

const PostForm = ({ postId, initialTitle = "", initialDescription = "" }) => {
  const [title, setTitle] = useState(initialTitle);
  const [description, setDescription] = useState(initialDescription);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const postData = { title, description };

    try {
      if (postId) {
        // Editar post
        await axios.put(`/api/posts/${postId}`, postData);
        alert("Post actualizado correctamente");
      } else {
        // Crear post
        await axios.post("/api/posts", postData);
        alert("Post creado correctamente");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Título:</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Descripción:</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
      </div>
      <button type="submit">{postId ? "Actualizar" : "Crear"}</button>
    </form>
  );
};

export default PostForm;