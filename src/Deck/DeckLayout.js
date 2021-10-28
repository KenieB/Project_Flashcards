import React, { useEffect } from "react";
import { Route, Switch, useRouteMatch, useParams } from "react-router-dom";
import { readDeck } from "../utils/api";
import ViewDeck from "./ViewDeck/ViewDeck";
import StudyDeckLayout from "./StudyDeck";
import NotFound from "../Layout/NotFound";

export const DeckLayout = ({ deck, setDeck, error, setError }) => {
  const { url, path } = useRouteMatch();
  const params = useParams();
  const id = params.deckId;
  //
  console.log("DeckLayout params: ", params);

  console.log("DeckLayout (id): ", id);
  console.log("DeckLayout path: ", path);

  console.log("DeckLayout url: ", url);
  //
  useEffect(() => {
    const abortController = new AbortController();
    readDeck(id, abortController.signal)
      .then(setDeck)
      .catch(setError);

    return () => abortController.abort();
  }, [id,setDeck,setError]);

  return (
    <Switch>
      <Route exact path={path}>
        <ViewDeck deck={deck} setDeck={setDeck} />
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
