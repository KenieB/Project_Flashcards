import React from "react";
import {
  useParams,
  Link,
  useRouteMatch,
  useHistory,
} from "react-router-dom";
import {
  HomeFillIcon,
  RepoIcon,
  TrashIcon,
  PencilIcon,
  PlusIcon,
} from "@primer/octicons-react";
import CardList from "./CardList";
import { deleteDeck } from "../../utils/api";

export const ViewDeck = ({ deck, setDeck, deckCards, setError, setDecks }) => {
  //router variable
  const params = useParams();
  const { url } = useRouteMatch();
  const history = useHistory();
  const id = params.deckId;

  //click handlers
  const editDeckClickHandler = (event) => {
    event.preventDefault();
    history.push(`${url}/edit`);
  };
  const studyDeckClickHandler = (event) => {
    event.preventDefault();
    history.push(`${url}/study`);
  };
  const addCardClickHandler = (event) => {
    event.preventDefault();
    history.push(`${url}/cards/new`);
  };
  const handleDelete = (event) => {
    const abortController = new AbortController();
    const result = window.confirm(
      "Delete this deck?\n\nYou will not be able to recover it."
    );
    const deleteThisDeck = async () => {
      await deleteDeck(id, abortController.signal).then(event.preventDefault());
      history.push("/");
    };

    if (result) {
      deleteThisDeck();
    }
  };

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
        <div className="button-row d-flex justify-content-between">
          <div className="buttons-left w-75">
            <button
              type="button"
              className="btn btn-secondary mr-1"
              onClick={editDeckClickHandler}
            >
              <PencilIcon size={16} /> Edit
            </button>
            <button
              type="button"
              className="btn btn-primary mr-1"
              onClick={studyDeckClickHandler}
            >
              <RepoIcon size={16} /> Study
            </button>
            <button
              type="button"
              className="btn btn-primary"
              onClick={addCardClickHandler}
            >
              <PlusIcon size={16} /> Add Card
            </button>
          </div>
          <div className="d-inline-flex flex-row-reverse w-25">
          <button
            type="button"
            className="btn btn-danger"
            onClick={handleDelete}
          >
            <TrashIcon size={24} />
          </button>
          </div>
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