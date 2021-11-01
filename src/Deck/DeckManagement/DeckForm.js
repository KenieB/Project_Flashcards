import React, { useState } from "react";
import { useRouteMatch, useHistory } from "react-router-dom";
import { createDeck, updateDeck } from "../../utils/api";

export const DeckForm = ({ deck = {}, setError }) => {
  const { url } = useRouteMatch();
  const history = useHistory();

  //Deck Form state variables
  const [deckName, setDeckName] = useState("");
  const [deckDescription, setDeckDescription] = useState("");

  //Deck value tracker
  let newDeckId = 0;

  //Deck Form handlers
  const handleNameChange = (event) => setDeckName(event.target.value);
  const handleDescriptionChange = (event) =>
    setDeckDescription(event.target.value);

  const handleSubmitNew = (event) => {
    event.preventDefault();
    async function createNewDeck() {
      try {
        const abortController = new AbortController();
        const response = await createDeck(
          { name: deckName, description: deckDescription },
          abortController.signal
        );
        newDeckId = response.id;
        history.push(`/decks/${newDeckId}`);
      } catch (error) {
        if (error.name === "AbortError") {
          console.log("Abort Error");
        }
      } finally {
        newDeckId = 0;
      }
    }
    createNewDeck();
  };

  const handleSubmitUpdate = (event) => {
    event.preventDefault();
    async function updateExistingDeck() {
      try {
        const abortController = new AbortController();
        await updateDeck(deck, abortController.signal);
        history.push(`/decks/${deck.id}`);
      } catch (error) {
        if (error.name === "AbortError") {
          console.log("Abort Error");
        }
      }
    }
    updateExistingDeck();
  };

  if (url === "/decks/new") {
    return (
      <>
        <form onSubmit={handleSubmitNew}>
          <div className="form-group">
            <label htmlFor="deckName">Name</label>
            <input
              id="deckName"
              type="text"
              name="deckName"
              className="form-control"
              onChange={handleNameChange}
              value={deckName}
              placeholder="Deck name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="deckDescription">Description</label>
            <textarea
              id="deckDescription"
              name="deckDescription"
              className="form-control"
              onChange={handleDescriptionChange}
              value={deckDescription}
              placeholder="Brief description of the deck"
              rows="5"
            />
          </div>

          <button
            type="button"
            className="btn btn-secondary mr-1"
            onClick={() => history.push("/")}
          >
            Cancel
          </button>
          <button type="submit" className="btn btn-primary ml-1">
            Submit
          </button>
        </form>
      </>
    );
  } else {
    return (
      <>
        <form onSubmit={handleSubmitUpdate}>
        <div className="form-group">
            <label htmlFor="deckName">Name</label>
            <input
              id="deckName"
              type="text"
              name="deckName"
              className="form-control"
              onChange={handleNameChange}
              value={deckName}
              placeholder={deck.name}
            />
          </div>
          <div className="form-group">
            <label htmlFor="deckDescription">Description</label>
            <textarea
              id="deckDescription"
              name="deckDescription"
              className="form-control"
              onChange={handleDescriptionChange}
              value={deckDescription}
              placeholder={deck.description}
              rows="5"
            />
          </div>

          <button
            type="button"
            className="btn btn-secondary mr-1"
            onClick={() => history.push(`/decks/${deck.id}`)}
          >
            Cancel
          </button>
          <button type="submit" className="btn btn-primary ml-1">
            Submit
          </button>
          </form>
      </>
    );
  }
};

export default DeckForm;
