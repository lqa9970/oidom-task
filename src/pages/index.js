import * as React from "react";
import StoriesBox from "../box/StoriesBox";

// styles
const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
  display: "block",
};

// markup
const IndexPage = () => {
  return (
    <main style={pageStyles}>
      <title>Oidom assignment</title>
      <a href="https://news.ycombinator.com/">
        <h1>Hacker News</h1>
      </a>
      <StoriesBox />
    </main>
  );
};

export default IndexPage;
