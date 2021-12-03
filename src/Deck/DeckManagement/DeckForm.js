import React, { useState, useEffect, useRef } from "react";
import { useRouteMatch, useHistory } from "react-router-dom";
import { createDeck, updateDeck, readDeck } from "../../utils/api";

export const DeckForm = ({ deck = {}, setDeck }) => {
  const { url } = useRouteMatch();
  const history = useHistory();

  const firstRender = useRef(true);

  //Deck value tracker
  let newDeckId = 0;
  const exstDeckId = deck.id;
  const existingDeckName = deck.name;
  const existingDeckDescription = deck.description;

  function initNameState() {
    if (!url.includes("new")) {
      return deck.name;
    } else {
      return "Deck name";
    }
  }
  function initDescrState() {
    if (!url.includes("new")) {
      return deck.description;
    } else {
      return "Brief description of deck";
    }
  }
  //Deck Form state variables
  const [deckName, setDeckName] = useState(initNameState());
  const [deckDescription, setDeckDescription] = useState(initDescrState());
  const [deckUpdateFlag, setDeckUpdateFlag] = useState(false);

  //Deck Form handlers
  const handleNameChange = (event) => { 
    setDeckName(event.target.value)
  };
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

        const updatedDeck = {
          id: exstDeckId,
          name: deckName,
          description: deckDescription,
        };
        await updateDeck(updatedDeck, abortController.signal);
        setDeckUpdateFlag(() => true);
      } catch (error) {
        if (error.name === "AbortError") {
          console.log("Abort Error");
        }
      }
    }
    updateExistingDeck();
  };

  useEffect(() => {
    if (firstRender) {
      firstRender.current = false;
      return;
    }
  });

  useEffect(() => {
    if (!url.includes("new") && firstRender) {
      if (!deckName && !deckDescription) {
        setDeckName(deck.name);
        setDeckDescription(deck.description);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [existingDeckName, existingDeckDescription]);

  useEffect(() => {
    if (deckUpdateFlag) {
      readDeck(exstDeckId).then(setDeck);
      history.push(`/decks/${deck.id}`);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [deckUpdateFlag]);

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
              value={deckName || ""}
            />
          </div>
          <div className="form-group">
            <label htmlFor="deckDescription">Description</label>
            <textarea
              id="deckDescription"
              name="deckDescription"
              className="form-control"
              onChange={handleDescriptionChange}
              value={deckDescription || ""}
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