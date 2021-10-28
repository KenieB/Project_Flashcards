import React, { useEffect } from "react";
import DeckCover from "./DeckCover";
import { listDecks } from "../utils/api/index";
import NotFound from "../Layout/NotFound";
import { useHistory } from "react-router-dom";

export const DeckList = ({
  decks,
  setDecks,
  error,
  setError,
  deck,
  setDeck,
}) => {
  const history = useHistory();
  useEffect(() => {
    const abortController = new AbortController();
    listDecks(abortController.signal).then(setDecks).catch(setError);
    return () => abortController.abort();
  }, [setDecks, setError]);

  if (error) {
    return <NotFound />;
  }

  const list = decks.map((deck) => (
    <DeckCover
      key={deck.id}
      deck={deck}
      setDecks={setDecks}
      setError={setError}
    />
  ));

  /*const createDeckClickHandler = (event) => {
    event.preventDefault();
    history.push("/decks/new");
  };*/

  return (
    <div className="DeckList">
      <div className="list-group mt-2">{list}</div>
    </div>
  );
};

export default DeckList;
