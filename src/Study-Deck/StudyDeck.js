import React from "react";
import { HomeFillIcon } from "@primer/octicons-react";
import { useParams, Link, useRouteMatch } from "react-router-dom";

export const StudyDeck = () => {
  const params = useParams();
  const { url,path } = useRouteMatch();
  
  console.log("StudyDeck path:", path);
  console.log("StudyDeck url:", url);
  return (
    <div>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/">
              <HomeFillIcon size={24} aria-label="Home" verticalAlign="top" />
              Home
            </Link>
          </li>
          <li className="breadcrumb-item">
            <Link to={"/decks/:deckId"}>Deck Name</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Study
          </li>
        </ol>
      </nav>
      <h1>Study Deck Placeholder</h1>
    </div>
  );
};
export default StudyDeck;
