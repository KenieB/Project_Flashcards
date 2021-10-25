import React, { useEffect, useState } from "react";
import DeckCover from "./DeckCover";
import { listDecks } from "../utils/api/index";
import NotFound from "../Layout/NotFound";
import { DiffAddedIcon } from "@primer/octicons-react";
//import { Route, Switch } from "react-router-dom";

export const DeckList = () => {
  const [decks, setDecks] = useState([]);
  const [error, setError] = useState(undefined);

  useEffect(() => {
    const abortController = new AbortController();
    listDecks(abortController.signal).then(setDecks).catch(setError);
    return () => abortController.abort();
  }, []);

  if (error) {
    return <NotFound />;
  }

  const list = decks.map((deck) => <DeckCover key={deck.id} deck={deck} />);

  return (
    <div className="DeckList">
      <button type="button" className="btn btn-secondary">
        <DiffAddedIcon size={24} verticalAlign="top" aria-label="Create new deck" /> &nbsp;Create Deck
      </button>
    
      <div className="list-group mt-2">{list}</div>
    </div>
  );
};

export default DeckList;
