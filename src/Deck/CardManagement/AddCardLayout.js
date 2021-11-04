import React from "react";
import { useParams, Link } from "react-router-dom";
import { HomeFillIcon } from "@primer/octicons-react";
import CardForm from "./CardForm";

export const AddCardLayout = ({ deck = {} }) => {
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
          <li className="breadcrumb-item">
            <Link to={`/decks/${params.deckId}`}>{deck.name}</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Add Card
          </li>
        </ol>
      </nav>
      <h2>{deck.name}: Add Card</h2>
      <CardForm deck={deck} />
      
    </>
  );
};

export default AddCardLayout;
