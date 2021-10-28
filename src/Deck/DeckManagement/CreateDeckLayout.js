import React from "react";
import { useParams, Link, useLocation, useRouteMatch } from "react-router-dom";
import { HomeFillIcon } from "@primer/octicons-react";
import DeckForm from "./DeckForm";

export const CreateDeckLayout = ({ deck = {}, setDeck, setError }) => {
  return (
    <div>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/">
              <HomeFillIcon size={24} aria-label="Home" verticalAlign="top" />
              &nbsp;Home
            </Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Create Deck
          </li>
        </ol>
      </nav>
      <h1>Create Deck</h1>
      <DeckForm deck={deck} setDeck={setDeck} setError={setError} />
    </div>
  );
};

export default CreateDeckLayout;
