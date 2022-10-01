import React from "react";

const Menu = () => {
  const posts = [
    {
      id: 1,
      title: "Lorem",
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus, iste id magni quod ad assumenda consequatur sunt voluptate, non aperiam aliquam at animi ullam distinctio. Explicabo in consequatur esse sed. \
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum vitae placeat est dolor! Placeat impedit nam fuga incidunt voluptatem esse hic vitae, quod rerum sapiente labore dicta nobis consequuntur officia! \
      ",
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
    <div className="menu">
      <h1>Other posts you may like</h1>
      {posts.map((post) => (
        <div className="post" key={post.id}>
          <img src={post.img} alt="" />
          <h2>{post.title}</h2>
          <button>Read More</button>
        </div>
      ))}
    </div>
  );
};

export default Menu;
