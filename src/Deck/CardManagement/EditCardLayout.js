import React from "react";
import { useParams, Link, useRouteMatch } from "react-router-dom";
import { HomeFillIcon } from "@primer/octicons-react";
import CardForm from "./CardForm";


export const EditCardLayout = ({ deck={} }) => {
    const { url, path } = useRouteMatch();
    const params = useParams();
    const thisCardId = params.cardId;
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
            <li className="breadcrumb-item">
              <Link to={`/decks/${params.deckId}`}>{deck.name}</Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Edit Card {thisCardId}
            </li>
          </ol>
        </nav>
        <h2 className="mb-1">{deck.name}: Edit Card</h2>
        <CardForm />
        
      </>
    );
};

export default EditCardLayout;