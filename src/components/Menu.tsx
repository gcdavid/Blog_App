import React, { useEffect, useState } from "react";
import { AppAxios } from "../services/Axios";

interface SubCategory {
  cat: string;
  date?: Date;
  desc: string;
  id: number;
  img: string;
  title: string;
  uid: number;
}

const Menu = ({ cat }: { cat: any }) => {
  const [subCategory, setSubCategory] = useState<SubCategory[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await AppAxios.get(`/posts/?cat=${cat}`);
        // setSubCategory(res.data);
        console.log(res);
      } catch (err) {
        console.log(err);
      }
    };
    fetchPosts();
  }, [cat]);

  console.log(subCategory.length);

  return (
    <div className="menu">
      <h1>Other posts you may like</h1>

      {subCategory.length == 0 && (
        <h1>There's no blog written in this category</h1>
      )}
      {subCategory.map((post: SubCategory) => (
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
