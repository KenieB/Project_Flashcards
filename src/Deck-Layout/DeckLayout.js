import React, { useState, useEffect } from "react";
import { Route, Switch, useRouteMatch, useParams } from "react-router-dom";
import { readDeck } from "../utils/api";
import DeckView from "../View-Deck/DeckView";
import StudyDeck from "../Study-Deck/StudyDeck";
import NotFound from "../Layout/NotFound";

export const DeckLayout = ({ deck, setDeck, error, setError }) => {
  const { url,path } = useRouteMatch();
  const params = useParams();
  const id = params.deckId;
    console.log("DeckLayout params: ", params);
        
    console.log("DeckLayout (id): ", id);
    console.log("DeckLayout path: ", path);

    console.log("DeckLayout url: ", url);


  return (
    <Switch>     
      <Route exact path={path}>
        <DeckView deck={deck} setDeck={setDeck} />
      </Route>
      <Route path={`${path}/study`}>
        <StudyDeck />
      </Route>
      <Route>
          <NotFound />
      </Route>
    </Switch>
  );
};

export default DeckLayout;
