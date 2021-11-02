import React from "react";
import { TrashIcon, PencilIcon } from "@primer/octicons-react";
import { useHistory, useRouteMatch } from "react-router-dom";
import { deleteCard } from "../../utils/api";

export const CardSummaryLayout = ({ card }) => {
  //router variables
  const history = useHistory();
  const { url } = useRouteMatch();
  //click handlers
  const editCardClickHandler = (event) => {
    event.preventDefault();
    history.push(`${url}/cards/${card.id}/edit`);
  };
  const deleteCardClickHandler = (event) => {
    const abortController = new AbortController();
    const result = window.confirm(
      "Delete this card?\n\nYou will not be able to recover it."
    );
    const deleteThisCard = async () => {
      await deleteCard(card.id, abortController.signal).then(event.preventDefault());
      history.go(0);
    };
    if (result) {
      deleteThisCard();
    }
  };

  return (
    <div className="list-group-item justify-content-between">
      <div className="card-question d-flex w-100">
        <p className="w-50 px-1">{card.front}</p>
        <p className="w-50 px-1">{card.back}</p>
      </div>

      <div className="card-buttons d-inline-flex w-100 justify-content-end">
        <button
          type="button"
          className="btn btn-secondary mx-1"
          onClick={editCardClickHandler}
        >
          <PencilIcon size={16} /> Edit
        </button>
        <button
          type="button"
          className="btn btn-danger mx-1"
          onClick={deleteCardClickHandler}
        >
          <TrashIcon size={16} />
        </button>
      </div>
    </div>
  );
};

export default CardSummaryLayout;