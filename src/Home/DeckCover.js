import React from "react";
import { EyeIcon, RepoIcon, TrashIcon } from "@primer/octicons-react";
import { deleteDeck } from "../utils/api/index";
import { useHistory } from "react-router-dom";

export const DeckCover = ({ deck = {}, setDecks, setError }) => {
  const history = useHistory();
  const id = deck.id;
  const handleDelete = (event) => {
    const abortController = new AbortController();
    const result = window.confirm(
      "Delete this deck?\n\nYou will not be able to recover it."
    );
    if (result) {
      deleteDeck(id, abortController.signal).then(event.preventDefault());
      history.go(0);
    }
  };

  const viewClickHandler = (event) => {
    event.preventDefault();

    history.push(`/decks/${deck.id}`);
  };

  const studyClickHandler = (event) => {
    event.preventDefault();

    history.push(`/decks/${deck.id}/study`);
  };
  return (
    <>
      <a
        href={`/decks/${deck.id}`}
        className="list-group-item list-group-item-action flex-column align-items-start"
      >
        <div className="d-flex w-100 justify-content-between">
          <h5 className="mb-1">{deck.name}</h5>
          <small>{`${deck.cards.length}`} cards</small>
        </div>
        <p className="mb-1">{deck.description}</p>
        <div className="d-flex justify-content-between">
          <div className="group-left">
            <button
              type="button"
              className="btn btn-secondary mr-1"
              onClick={viewClickHandler}
            >
              <EyeIcon size={16} verticalAlign="middle" aria-label="View" />
              &nbsp;View
            </button>

            <button
              type="button"
              className="btn btn-primary ml-1"
              onClick={studyClickHandler}
            >
              <RepoIcon size={16} verticalAlign="middle" aria-label="Study" />
              &nbsp;Study
            </button>
          </div>
          <button
            type="button"
            className="btn btn-danger"
            aria-label="Delete"
            onClick={handleDelete}
          >
            <TrashIcon size={24} />
          </button>
        </div>
      </a>
    </>
  );
};

export default DeckCover;
