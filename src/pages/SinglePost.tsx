import React, { useContext, useEffect, useState } from "react";
import Edit from "../assets/edit.png";
import Delete from "../assets/delete.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Menu from "../components/Menu";
import { AppAxios } from "../services/Axios";
import moment from "moment";
import { AuthContext } from "../context/authContext";
import { IAuthContextType } from "../types/authContext";
interface ISinglePost {
  cat: string;
  date?: Date | string;
  username: string;
  desc: string;
  img: string;
  title: string;
  userImg: string;
}

const SinglePost = () => {
  const [post, setPost] = useState<ISinglePost>();
  const Id = useLocation();
  const navigate = useNavigate();
  const postId: string = Id.pathname.split("/")[2];

  const { currentUser } = useContext(AuthContext) as IAuthContextType;

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await AppAxios.get(`/posts/${postId}`);
        setPost(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchPosts();
  }, [postId]);

  const handleDelete = async () => {
    try {
      const res = await AppAxios.delete(`/posts/${postId}`);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="single">
      <div className="content">
        <img src={post?.img} alt="" />
        <div className="user">
          <img src={post?.userImg} alt="" />
          <div className="info">
            <span>{post?.username}</span>
            <span>Posted {moment(post?.date).fromNow()}</span>
          </div>
          {currentUser.username === post?.username && (
            <div className="edit">
              <Link to={`/write?edit=2`} state={post}>
                <img src={Edit} alt="" />
              </Link>
              <img src={Delete} alt="" onClick={handleDelete} />
            </div>
          )}
        </div>
        <h1>{post?.title}.</h1>
        {post?.desc}
      </div>

      <Menu cat={post?.cat} />
    </div>
  );
};

export default SinglePost;
