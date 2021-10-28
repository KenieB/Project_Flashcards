import React from "react";
import { useParams, Link, useLocation,useRouteMatch } from "react-router-dom";
import { HomeFillIcon } from "@primer/octicons-react";


export const ViewDeck = ({ deck,setDeck }) => {
  const params = useParams();
  const { url,path } = useRouteMatch();
  const location = useLocation();
  //
  console.log("DeckView params:", params);
  console.log("DeckView location:", location);
  console.log("DeckView url:", url);
  console.log("DeckView path:", path);
  //

  return (
    <div>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/"><HomeFillIcon size={24} aria-label="Home" verticalAlign="top" />&nbsp;Home</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            {deck.name}
          </li>
        </ol>
      </nav>
      <h1>Deck View Placeholder</h1>
    </div>
  );
};
export default ViewDeck;
