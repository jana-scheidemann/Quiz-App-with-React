import styled from "styled-components";
import { GlobalStyle } from "@/styles";

export default function Homepage() {
  return <Card />;
}

function Card({ questiontext, answertext }) {
  return (
    <>
      <Cardcontainer>
        <h2>{questiontext}</h2>
        <ShowAnserButton type="button">click to show answer</ShowAnserButton>
        <p hidden>{answertext}</p>
        <Tagcontainer>
          <SingleTag>#html</SingleTag>
          <SingleTag>#flexbox</SingleTag>
          <SingleTag>#css</SingleTag>
        </Tagcontainer>
        <Bookmarkcontainer>
          <BookmarkButton type="button"></BookmarkButton>
        </Bookmarkcontainer>
      </Cardcontainer>
    </>
  );
}

const Cardcontainer = styled.div`
  border: solid;
  padding: 1em;
  margin: 2em 0;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  position: relative;
  border-radius: var(--general-border-radius);
  box-shadow: 5px 5px 5px var(--color-dark);
`;

const ShowAnserButton = styled.button`
  background-color: var(--color-medium);
  color: var(--color-foam);
  height: 2rem;
  width: max-content;
`;

const Tagcontainer = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-end;
  gap: 5px;
`;

const SingleTag = styled.p`
  border: solid;
  padding: 3px;
  border-radius: var(--general-border-radius);
  background-color: var(--color-light);
  font-size: 13px;
`;

const Bookmarkcontainer = styled.div`
  position: absolute;
  top: -1em;
  right: 1em;
  width: 3em;
  height: 3em;
  background: var(--color-medium);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
`;

const BookmarkButton = styled.button`
  border: none;
  width: 2em;
  height: 2em;
  background-image: url("/Pictures/whitebookmark.png");
  background-size: contain;
  background-repeat: no-repeat;
  background-position-x: center;
  background-color: var(--color-medium);
`;
