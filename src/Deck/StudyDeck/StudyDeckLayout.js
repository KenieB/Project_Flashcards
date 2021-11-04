import React from "react";
import { HomeFillIcon, PlusIcon } from "@primer/octicons-react";
import {
  useParams,
  useHistory,
  Link,
  useRouteMatch,
  Switch,
  Route,
} from "react-router-dom";

export const StudyDeckLayout = ({ deck, deckCards = [], setDeckCards }) => {
  const params = useParams();
  const { url, path } = useRouteMatch();
  const history = useHistory();

  const addCardClickHandler = (event) => {
    event.preventDefault();
   //history.push(`${url}/cards/new`);
  };

  if (deckCards.length < 3) {
    return (
      <div>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to="/">
                <HomeFillIcon size={24} aria-label="Home" verticalAlign="top" />
                &nbsp;Home
              </Link>
            </li>
            <li className="breadcrumb-item">
              <Link to={`/decks/${deck.id}`}>{deck.name}</Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Study
            </li>
          </ol>
        </nav>
        <h1>Study: {deck.name}</h1>
        <h3>Not enough cards.</h3>
        <p>You need at least 3 cards to study. There are {deckCards.length} cards in this deck.</p>
        <button
              type="button"
              className="btn btn-primary"
              onClick={addCardClickHandler}
            >
              <PlusIcon size={16} /> Add Card
            </button>
      </div>
    );
  } else {
    return (
      <div>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to="/">
                <HomeFillIcon size={24} aria-label="Home" verticalAlign="top" />
                &nbsp;Home
              </Link>
            </li>
            <li className="breadcrumb-item">
              <Link to={`/decks/${deck.id}`}>{deck.name}</Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Study
            </li>
          </ol>
        </nav>
        <h1>Study: {deck.name}</h1>
      </div>
    );
  }
};
export default StudyDeckLayout;
