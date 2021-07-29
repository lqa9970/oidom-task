import axios from "axios";

export default axios.create({
  hackerNewsURL: "https://hacker-news.firebaseio.com/v0/",
});

export const baseURL = "https://hacker-news.firebaseio.com/v0/";
export const newStoryURL = `${baseURL}newstories.json/`;
export const storyURL = `${baseURL}item/`;

export const getStory = async (storyId) => {
  const result = await axios
    .get(`${storyURL + storyId}.json`)
    .then(({ data }) => data);

  return result;
};

export const getStoryIds = async () => {
  const result = await axios.get(newStoryURL).then(({ data }) => data);

  return result;
};
// export const filteredURL = baseURL.filter((score) => score > 70);
