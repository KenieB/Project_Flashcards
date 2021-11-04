import React, { useState, useEffect } from "react";
import { readCard, updateCard, createCard } from "../../utils/api";
import { useRouteMatch, useHistory } from "react-router-dom";

export const CardForm = ({ deck = {}, card = {} }) => {
  //state variables
  const [cardFront, setCardFront] = useState("");
  const [cardBack, setCardBack] = useState("");

  //other variables
  const { url } = useRouteMatch();

  console.log("url: ", url)
  //form change handlers
  const handleCardFrontChange = (event) => setCardFront(event.target.value);
  const handleCardBackChange = (event) => setCardBack(event.target.value);

  //form submit handlers
  const handleSubmitNew = (event) => {
    event.preventDefault();
    async function createNewCard() {
      const abortController = new AbortController();
      //const response = await
    }
  };

  if (url === `/decks/${deck.id}/cards/new`) {
    return (
      <div>
        <form>
          <div className="form-group">
            <label htmlFor="cardFront">Front</label>
            <textarea
              id="cardFront"
              name="cardFront"
              className="form-control"
              onChange={handleCardFrontChange}
              value={cardFront}
              placeholder="Front side of card"
              rows="3"
            />
          </div>
          <div className="form-group">
            <label htmlFor="cardBack">Front</label>
            <textarea
              id="cardBack"
              name="cardBack"
              className="form-control"
              onChange={handleCardBackChange}
              value={cardBack}
              placeholder="Back side of card"
              rows="3"
            />
          </div>
        </form>
      </div>
    );
  } else {
    return <p>CardForm else case Placeholder</p>;
  }
};

export default CardForm;
