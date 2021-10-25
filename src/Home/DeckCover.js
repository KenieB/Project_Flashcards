import React from "react";
import { EyeIcon, RepoIcon, TrashIcon } from "@primer/octicons-react";
import { deleteDeck } from "../utils/api/index";
import { useHistory } from "react-router";

export const DeckCover = ({ deck = {} }) => {
  const history = useHistory();
  async function handleDelete(id) {
    console.log(id);
    const result = window.confirm(
      "Delete this deck?\n\nYou will not be able to recover it."
    );
    if (result) {
      await deleteDeck(id);
      history.go(0);
      //refresh working but deleteDeck not?
    }
  }
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
            <button type="button" className="btn btn-secondary mr-1" onClick={() => history.push(`/decks/:${deck.id}`)}>
              <EyeIcon size={16} verticalAlign="middle" aria-label="View" />
              &nbsp;View
            </button>

            <button type="button" className="btn btn-primary ml-1">
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
