import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/authContext";

const Home = () => {
  // const { currentUser } = useContext(AuthContext);
  // console.log(currentUser);
  const posts = [
    {
      id: 1,
      title: "Lorem",
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus, iste id magni quod ad assumenda consequatur sunt voluptate, non aperiam aliquam at animi ullam distinctio. Explicabo in consequatur esse sed.",
      img: "https://images.pexels.com/photos/9444009/pexels-photo-9444009.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 2,
      title: "Lorem",
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus, iste id magni quod ad assumenda consequatur sunt voluptate, non aperiam aliquam at animi ullam distinctio. Explicabo in consequatur esse sed.",
      img: "https://images.pexels.com/photos/9444009/pexels-photo-9444009.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 3,
      title: "Lorem",
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus, iste id magni quod ad assumenda consequatur sunt voluptate, non aperiam aliquam at animi ullam distinctio. Explicabo in consequatur esse sed.",
      img: "https://images.pexels.com/photos/9444009/pexels-photo-9444009.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 4,
      title: "Lorem",
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus, iste id magni quod ad assumenda consequatur sunt voluptate, non aperiam aliquam at animi ullam distinctio. Explicabo in consequatur esse sed.",
      img: "https://images.pexels.com/photos/9444009/pexels-photo-9444009.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
  ];
  return (
    <div className="home">
      <div className="posts">
        {posts.map((post) => {
          return (
            <div className="post" key={post.id}>
              <div className="img">
                <img src={post.img} alt="" />
              </div>
              <div className="content">
                <Link to={`/post/${post.id}`} className="link">
                  <h1>{post.title}</h1>
                </Link>
                <p>{post.desc}</p>
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
