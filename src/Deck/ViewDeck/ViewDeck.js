import React, { useEffect } from "react";
import { useParams, Link, useLocation, useRouteMatch } from "react-router-dom";
import {
  HomeFillIcon,
  EyeIcon,
  RepoIcon,
  TrashIcon,
  PencilIcon,
  PlusIcon,
} from "@primer/octicons-react";
import CardList from "./CardList";

export const ViewDeck = ({ deck, setDeck, deckCards }) => {
  const params = useParams();
  const { url, path } = useRouteMatch();
  const location = useLocation();

 
  /*useEffect(() => {
  //console.log("ViewDeck params:", params);
  //console.log("ViewDeck location:", location);.
  //console.log("ViewDeck url:", url);
  //console.log("ViewDeck path:", path);
  //console.log("ViewDeck - Current 'deck' value: ", deck)
  console.log("ViewDeck - deckCards: ", deckCards);
  })*/

  return (
    <>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/">
              <HomeFillIcon size={24} aria-label="Home" verticalAlign="top" />
              &nbsp;Home
            </Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            {deck.name}
          </li>
        </ol>
      </nav>
      <div className="deck-summary w-100">
        <h2>{deck.name}</h2>
        <p>{deck.description}</p>
        <div className="button-row d-flex justify-content-between mr-5">
          <div className="buttons-left w-75">
            <button type="button" className="btn btn-secondary mr-1">
              <PencilIcon size={16} /> Edit
            </button>
            <button type="button" className="btn btn-primary mr-1">
              <RepoIcon size={16} /> Study
            </button>
            <button type="button" className="btn btn-primary">
              <PlusIcon size={16} /> Add Card
            </button>
          </div>
          <button type="button" className="btn btn-danger">
            <TrashIcon size={24} />
          </button>
        </div>
      </div>

      <div className="deck-cards mt-4">
        <h1>Cards</h1>
        <CardList deckCards={deckCards} />
      </div>
      <div className="footer-space">&nbsp;</div>
    </>
  );
};
export default ViewDeck;