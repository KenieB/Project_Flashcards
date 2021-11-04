import React, { useEffect } from "react";
import DeckCover from "./DeckCover";
import { listDecks } from "../utils/api/index";

export const DeckList = ({
  decks,
  setDecks,
  error,
  setError,
  deck,
  setDeck,
}) => {
 
  useEffect(() => {
    const abortController = new AbortController();
    listDecks(abortController.signal).then(setDecks).catch(setError);
    return () => abortController.abort();
  }, []);

  const list = decks.map((deck) => (
    <DeckCover
      key={deck.id}
      deck={deck}
      setDecks={setDecks}
      setError={setError}
    />
  ));

  return (
    <div className="deck-list">
      <div className="list-group mt-2">{list}</div>
    </div>
  );
};

export default DeckList;