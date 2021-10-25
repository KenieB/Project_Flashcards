import React from "react";
import { HomeFillIcon } from "@primer/octicons-react";

export const StudyDeck = () => {
  return (
    <div>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <a href="/"><HomeFillIcon size={24} aria-label="Home" verticalAlign="top" />Home</a>
          </li>
          <li className="breadcrumb-item"><a href="/decks/:deckId">Deck Name</a></li>
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