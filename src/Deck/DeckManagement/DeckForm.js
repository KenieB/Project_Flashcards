import React, { useState, useEffect } from "react";
import {
  useParams,
  Link,
  useLocation,
  useRouteMatch,
  useHistory,
} from "react-router-dom";
import { createDeck } from "../../utils/api";

export const DeckForm = ({ deck = {}, setDeck, setError }) => {
  const { url } = useRouteMatch();
  const history = useHistory();
  //Deck Form state variables
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  //Deck Form handlers
  const handleNameChange = (event) => setName(event.target.value);
  const handleDescriptionChange = (event) => setDescription(event.target.value);
  const handleSubmitNew = (event) => {
      //event.preventDefault();
      const abortController = new AbortController();
      createDeck({name: name, description: description}, abortController.signal).then(setDeck).catch(setError);

  }
  
  /*useEffect(() => {
      if(!url === "/decks/new"){
        history.push(`/decks/${deck.id}`)
      }
    
  })*/


  if (url === "/decks/new") {
    return (
      <>
        <form>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              id="name"
              type="text"
              name="name"
              className="form-control"
              onChange={handleNameChange}
              value={name}
              placeholder="Deck name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="description">Description</label>
            <textarea
              id="description"
              name="description"
              className="form-control"
              onChange={handleDescriptionChange}
              value={description}
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
          <button type="submit" className="btn btn-primary ml-1" onSubmit={handleSubmitNew}>
            Submit
          </button>
        </form>
      </>
    );
  } else {
    return (
      <div>
        <h2>DeckForm - EditDeck Placeholder</h2>
      </div>
    );
  }
};

export default DeckForm;
