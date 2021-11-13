import React, { useState, useEffect } from "react";
import { useParams, Link, useRouteMatch } from "react-router-dom";
import { HomeFillIcon } from "@primer/octicons-react";
import CardForm from "./CardForm";
import { readCard } from "../../utils/api";

export const EditCardLayout = ({ deck = {}, setDeck, setError }) => {
  const { url, path } = useRouteMatch();
  const [activeCard, setActiveCard] = useState({});
  const params = useParams();
  const thisCardId = params.cardId;

  useEffect(() => {
    const abortController = new AbortController();
    readCard(thisCardId, abortController.signal)
      .then(setActiveCard)
      .catch(setError);
    return () => abortController.abort();
  }, [thisCardId]);

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
            Edit Card {thisCardId}
          </li>
        </ol>
      </nav>
      <h2 className="mb-1">{deck.name}: Edit Card</h2>
      <CardForm deck={deck} setDeck={setDeck} activeCard={activeCard} />
    </>
  );
};

export default EditCardLayout;
