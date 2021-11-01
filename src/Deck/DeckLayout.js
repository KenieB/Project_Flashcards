import React, { useState, useEffect } from "react";
import { Route, Switch, useRouteMatch, useParams } from "react-router-dom";
import { readDeck } from "../utils/api";
import ViewDeck from "./ViewDeck/ViewDeck";
import StudyDeckLayout from "./StudyDeck/StudyDeckLayout";
import NotFound from "../Layout/NotFound";

export const DeckLayout = ({ deck, setDeck, error, setError }) => {
  const { url, path } = useRouteMatch();
  const [deckCards, setDeckCards] = useState([]);
  const params = useParams();
  const id = params.deckId;

  useEffect(() => {
    const abortController = new AbortController();
    readDeck(id, abortController.signal).then(setDeck).catch(setError);

    return () => abortController.abort();
  }, [id, setDeck, setError]);

  useEffect(() => {
    //const { cards } = { ...deck };
    setDeckCards(deck.cards);
    console.log("DeckLayout - deck: ", deck);
    console.log("DeckLayout - cards: ", deckCards);
  }, [deck]);

  return (
    <Switch>
      <Route exact path={path}>
        <ViewDeck
          deck={deck}
          setDeck={setDeck}
          deckCards={deckCards}
        />
      </Route>
      <Route path={`${path}/study`}>
        <StudyDeckLayout deck={deck} />
      </Route>
      <Route>
        <NotFound />
      </Route>
    </Switch>
  );
};

export default DeckLayout;
