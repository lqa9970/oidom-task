import React, { useState, useEffect } from "react";
import { getStory } from "../api/HackerNewsAPI";
import { StoryWrapper, StoryTitle } from "../styles/StoryStyles";
import { mapTime, isLessThan4Hours } from "../components/mapTime";

const Story = ({ storyId }) => {
  const [story, setStory] = useState({});

  useEffect(() => {
    getStory(storyId).then((data) => data && data.url && setStory(data));
  });

  // const filterScore = () => {
  //   if (story.score > 70) {
  //     return <p>Post score: {story.score}</p>;
  //   } else return null;
  // };

  // const filterTime = () => {
  //     if (mapTime(story.time) )
  // };

  //   const point = story.score.filter((score) => score > 70);

  return story &&
    story.url &&
    story.score > 70 &&
    isLessThan4Hours(story.time) ? (
    <StoryWrapper data-testid="story">
      <StoryTitle>
        <a href={story.url}>{story.title}</a>
      </StoryTitle>
      <p>By: {story.by}</p>
      <p>Score: {story.score}</p>
      <p>Posted: {mapTime(story.time)} ago</p>
    </StoryWrapper>
  ) : null;
};

export default Story;
