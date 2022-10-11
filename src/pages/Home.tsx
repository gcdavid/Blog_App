import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { AuthContext } from "../context/authContext";
import { AppAxios } from "../services/Axios";
import { IAuthContextType } from "../types/authContext";

const Home = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  const cat = useLocation().search;

  const getText = (html: any) => {
    const doc = new DOMParser().parseFromString(html, "text/html");
    return doc.body.textContent;
  };

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await AppAxios.get(`/posts/${cat}`);
        setPosts(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchPosts();
  }, [cat]);

  return (
    <div className="home">
      <div className="posts">
        {posts.map((post) => {
          return (
            <div className="post" key={post.id}>
              <div className="img">
                <img src={`./upload/post.img`} alt="" />
              </div>
              <div className="content">
                <Link to={`/post/${post.id}`} className="link">
                  <h1>{post.title}</h1>
                </Link>
                <p>{getText(post.desc)}</p>
                <button>Read more</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
