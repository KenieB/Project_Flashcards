import React, { useState } from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import Header from "./Header";
import NotFound from "./NotFound";
import DeckList from "../Home/DeckList";
import DeckView from "../Deck/DeckView";
import StudyDeck from "../Deck/StudyDeck";
import DeckLayout from "../Deck/DeckLayout";

function Layout() {
  const { url } = useRouteMatch();
  const [decks, setDecks] = useState([]);
  const [error, setError] = useState(undefined);
  const [deck, setDeck] = useState({});

  return (
    <>
      <Header />
      <div className="container">
        {/* TODO: Implement the screen starting here */}
        <Switch>        
          <Route exact path="/">
            <DeckList decks={decks} setDecks={setDecks} error={error} setError={setError} deck={deck} setDeck={setDeck} />
          </Route>
          <Route path="/decks/:deckId">
            <DeckLayout deck={deck} setDeck={setDeck} error={error} setError={setError} />
          </Route>
          <Route>
            <NotFound />
          </Route>
        </Switch>
      </div>
    </>
  );
}

export default Layout;
