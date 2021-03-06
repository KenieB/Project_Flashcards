import React, { useState, useEffect } from "react";
import { Route, Switch, useRouteMatch, useParams } from "react-router-dom";
import { readDeck } from "../utils/api";
import ViewDeck from "./ViewDeck/ViewDeck";
import StudyDeckLayout from "./StudyDeck/StudyDeckLayout";
import EditDeckLayout from "./DeckManagement/EditDeckLayout";
import AddCardLayout from "./CardManagement/AddCardLayout";
import EditCardLayout from "./CardManagement/EditCardLayout";

export const DeckLayout = ({ deck, setDeck, error, setError, setDecks }) => {
  const { path } = useRouteMatch();
  const [deckCards, setDeckCards] = useState([]);
  const params = useParams();
  const id = params.deckId;

  useEffect(() => {
    const abortController = new AbortController();
    readDeck(id, abortController.signal).then(setDeck).catch(setError);
    return () => abortController.abort();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  useEffect(() => {
    setDeckCards(deck.cards);
  }, [deck]);

  return (
    <Switch>
      <Route exact path={path}>
        <ViewDeck deck={deck} setDeck={setDeck} deckCards={deckCards} setError={setError} setDecks={setDecks} />
      </Route>
      <Route path={`${path}/study`}>
        <StudyDeckLayout deck={deck} deckCards={deckCards} setDeckCards={setDeckCards} />
      </Route>
      <Route path={`${path}/edit`}>
        <EditDeckLayout deck={deck} setDeck={setDeck} />
      </Route>
      <Route path={`${path}/cards/new`}>
        <AddCardLayout deck={deck} setDeck={setDeck} />
      </Route>
      <Route path={`${path}/cards/:cardId/edit`}>
        <EditCardLayout deck={deck} setDeck={setDeck} setError={setError} />
      </Route>
    </Switch>
  );
};

export default DeckLayout;