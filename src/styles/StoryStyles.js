import styled from "styled-components";

export const StoryWrapper = styled.section`
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
  max-width: 600px;
  :hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
    cursor: pointer;
  }
`;

export const StoryTitle = styled.h1`
  margin-bottom: 10px;
  font-size: 20px;
  line-height: 1.8;
  margin: 10 auto;
  text-decoration: none;

  a {
    color: black;
    background-color: pink;
    text-decoration: none;
  }
`;
