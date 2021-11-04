import React from "react";
import { HomeFillIcon } from "@primer/octicons-react";
import { useParams, Link } from "react-router-dom";
import DeckForm from "./DeckForm";

export const EditDeckLayout = ({ deck={}, setDeck, deckUpdateFlag, setDeckUpdateFlag }) => {
  const params = useParams();
  return (
    <>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/">
              <HomeFillIcon size={24} aria-label="Home" verticalAlign="top" />
              &nbsp;Home
            </Link>
          </li>
          <li className="breadcrumb-item" aria-current="page">
            <Link to={`/decks/${params.deckId}`}>{deck.name}</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Edit Deck
          </li>
        </ol>
      </nav>
      <h1>Edit Deck</h1>
      <DeckForm deck={deck} setDeck={setDeck} />
    </>
  );
};

export default EditDeckLayout;
