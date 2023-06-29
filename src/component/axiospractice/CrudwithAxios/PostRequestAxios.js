import axios from "axios";
import React,{useState, useEffect} from "react";

const baseUrl = "https://jsonplaceholder.typicode.com/posts";
export default function PostRequestAxios() {
    const [post, setPost] = useState([]);

    useEffect(() => {
      axios.get(`${baseUrl}/1`/1).then((items) => {
        setPost(items.data);
      });
    });


  function createPost() {
    axios
      .post(baseUrl, {
        title: "Hello World!",
        body: "This is a new post."
      })
      .then((response) => {
        setPost(response.data);
      });
  }

  if (!post) return "No post!"

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      <button onClick={createPost}>Create Post</button>
    </div>
  );
}