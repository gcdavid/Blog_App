import React from "react";
import Edit from "../assets/edit.png";
import Delete from "../assets/delete.png";
import { Link } from "react-router-dom";
import Menu from "../components/Menu";

const SinglePost = () => {
  return (
    <div className="single">
      <div className="content">
        <img
          src="https://images.pexels.com/photos/13516347/pexels-photo-13516347.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"
          alt=""
        />
        <div className="user">
          <img
            src="https://images.pexels.com/photos/13516347/pexels-photo-13516347.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"
            alt=""
          />
          <div className="info">
            <span>David</span>
            <span>Posted 7 years ago.</span>
          </div>

          <div className="edit">
            <Link to={`/write?edit=2`}>
              <img src={Edit} alt="" />
            </Link>
            <img src={Delete} alt="" />
          </div>
        </div>
        <h1>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus
          omnis iste illum nobis eius eos mollitia, corporis aut nesciunt
          perferendis eligendi corrupti ab natus. Ex fugit ipsa quaerat iure
          minima.
        </p>
      </div>

      <Menu />
    </div>
  );
};

export default SinglePost;
