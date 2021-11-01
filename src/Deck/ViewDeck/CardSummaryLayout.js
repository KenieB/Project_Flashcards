import React from "react";
import { TrashIcon, PencilIcon } from "@primer/octicons-react";
import { useHistory, useParams } from "react-router-dom";

export const CardSummaryLayout = ({ card }) => {
   /* const editClickHandler = (event) => {
        event.preventDefault();
    
        history.push(`/decks/${deck.id}`);
      };*/
  return (
    <div className="list-group-item justify-content-between">
      <div className="card-question d-flex w-100">
        <p className="w-50 px-1">{card.front}</p>
        <p className="w-50 px-1">{card.back}</p>
      </div>

      <div className="card-buttons d-inline-flex w-100 justify-content-end">
        <button type="button" className="btn btn-secondary mx-1">
          <PencilIcon size={16} /> Edit
        </button>
        <button type="button" className="btn btn-danger mx-1">
          <TrashIcon size={16} />
        </button>
      </div>
    </div>
  );
};

export default CardSummaryLayout;
