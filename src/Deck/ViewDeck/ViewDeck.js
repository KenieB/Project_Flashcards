import React from "react";
import { useParams, Link, useLocation,useRouteMatch } from "react-router-dom";
import { HomeFillIcon } from "@primer/octicons-react";


export const ViewDeck = ({ deck,setDeck }) => {
  const params = useParams();
  const { url,path } = useRouteMatch();
  const location = useLocation();
  //
  console.log("ViewDeck params:", params);
  console.log("ViewDeck location:", location);
  console.log("ViewDeck url:", url);
  console.log("ViewDeck path:", path);
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
      <h1>ViewDeck Placeholder</h1>
    </div>
  );
};
export default ViewDeck;
