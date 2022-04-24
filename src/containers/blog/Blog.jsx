import React from "react";
import { Article } from "../../components";
import "./blog.css";
import { blog01, blog02, blog03, blog04, blog05 } from "./imports";

const Blog = () => {
  return (
    <div className="gpt3__blog section__padding" id="blog">
      <div className="gpt3__blog-heading">
        <h1 className="gradient__text">
          Alot is happening, We are blogging about it.
        </h1>
      </div>
      <div className="gpt3__blog-container">
        <div className="gpt3__blog-container_groupA">
          <Article
            imgUrl={blog01}
            date="Swp 26, 2022"
            title="GPT-3 nad Open AI is the feature. Let us explore how it is?"
          />
        </div>
        <div className="gpt3__blog-container_groupB">
          <Article
            imgUrl={blog02}
            date="Swp 26, 2022"
            title="GPT-3 nad Open AI is the feature. Let us explore how it is?"
          />
          <Article
            imgUrl={blog03}
            date="Swp 26, 2022"
            title="GPT-3 nad Open AI is the feature. Let us explore how it is?"
          />
          <Article
            imgUrl={blog04}
            date="Swp 26, 2022"
            title="GPT-3 nad Open AI is the feature. Let us explore how it is?"
          />
          <Article
            imgUrl={blog05}
            date="Swp 26, 2022"
            title="GPT-3 nad Open AI is the feature. Let us explore how it is?"
          />
        </div>
      </div>
    </div>
  );
};

export default Blog;
