import React, { useEffect, useState } from "react";
import { getStoryIds } from "../api/HackerNewsAPI";
import Story from "../components/Story";

const StoriesBox = () => {
  const [storyIds, setStoryIds] = useState([]);

  useEffect(() => {
    getStoryIds().then((data) => setStoryIds(data));
  }, []);

  return (
    <>
      {storyIds.map((storyId) => (
        <Story key={storyId} storyId={storyId} />
      ))}
    </>
  );
};

export default StoriesBox;
