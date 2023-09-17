"use client";

import { useEffect, useState } from "react";
import PrompCard from "./PrompCard";

const PromptCardList = ({data, handleTagClick}) => {
  return (
    <div className="mt-16 prompt_layout">
      {data.map((post) => (
        <PrompCard 
          key={post._id}
          post={post}
          handleTagClick={handleTagClick}
        />
      ))}
    </div>
  );
}

const  Feed = () => {
  const [searchText, setSearchText] = useState("");
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch("/api/prompt");
      const data = await response.json();
      setPosts(data); 
    }
    fetchPosts();
  }, []);

  const handleSearchChange = (e) => {

  }

  const handleTagClick = (searchTag) => {
    const filterPostsbyTag = posts.filter((post) => post.tag===searchTag);
    setPosts(filterPostsbyTag);
  }

  return (
    <section className="feed">
      <form className="relative w-full flex-center">
        <input 
          type="text"
          placeholder="seach for a tag or username"
          value={searchText}
          onChange={handleSearchChange}
          required
          className="search_input peer"
        />
      </form>
      <PromptCardList 
        data={posts}
        handleTagClick={handleTagClick}
      />
    </section>
  )
}
export default Feed