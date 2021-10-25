import React from "react";
import { HomeFillIcon } from "@primer/octicons-react";

export const DeckView = () => {
  return (
    <div>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <a href="/"><HomeFillIcon size={24} aria-label="Home" verticalAlign="top" />&nbsp;Home</a>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Deck Name
          </li>
        </ol>
      </nav>
      <h1>Deck View Placeholder</h1>
    </div>
  );
};
export default DeckView;
