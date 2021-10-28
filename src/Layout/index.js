import React, { useState } from "react";
import { Route, Switch, useRouteMatch, useHistory } from "react-router-dom";
import Header from "./Header";
import NotFound from "./NotFound";
import DeckList from "../Home/DeckList";
import DeckLayout from "../Deck/DeckLayout";
import CreateDeckLayout from "../Deck/DeckManagement/CreateDeckLayout";

import { DiffAddedIcon } from "@primer/octicons-react";

function Layout() {
  const { url } = useRouteMatch();
  //Deck(s) + API error state variables
  const [decks, setDecks] = useState([]);
  const [error, setError] = useState(undefined);
  const [deck, setDeck] = useState({});
  
  //useHistory
  const history = useHistory();

  return (
    <>
      <Header />
      <div className="container">
        {/* TODO: Implement the screen starting here */}
        <Switch>
          <Route exact path="/">
            <button
              type="button"
              className="btn btn-secondary"
              onClick={() => history.push("/decks/new")}
            >
              <DiffAddedIcon
                size={24}
                verticalAlign="top"
                aria-label="Create new deck"
              />{" "}
              Create Deck
            </button>
            <DeckList
              decks={decks}
              setDecks={setDecks}
              error={error}
              setError={setError}
              deck={deck}
              setDeck={setDeck}
            />
          </Route>
          <Route path="/decks/new">
            <CreateDeckLayout deck={deck} setDeck={setDeck} setError={setError} />
          </Route>
          <Route path="/decks/:deckId">
            <DeckLayout
              deck={deck}
              setDeck={setDeck}
              error={error}
              setError={setError}
            />
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
