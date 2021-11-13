import React, { useState, useEffect } from "react";
import { readCard, updateCard, createCard, readDeck } from "../../utils/api";
import { useRouteMatch, useHistory, useParams } from "react-router-dom";

export const CardForm = ({ deck, setDeck, activeCard={} }) => {
  //state variables
  const [cardFront, setCardFront] = useState("");
  const [cardBack, setCardBack] = useState("");
  const [cardUpdateFlag, setCardUpdateFlag] = useState(false);
  const currentDeckId = deck.id;
  const existingCardFront = activeCard.front;
  const existingCardBack = activeCard.back;

  //other variables
  const { url } = useRouteMatch();
  const history = useHistory();
  const params = useParams();

  
  //form change handlers
  const handleCardFrontChange = (event) => setCardFront(event.target.value);
  const handleCardBackChange = (event) => setCardBack(event.target.value);

  //form submit handlers
  const handleSubmitNew = (event) => {
    event.preventDefault();
    async function createNewCard() {
      try {
        const abortController = new AbortController();
        const response = await createCard(
          currentDeckId,
          { front: cardFront, back: cardBack },
          abortController.signal
        );
        console.log(
          "CardForm created new card with ID: ",
          response.id,
          " in deck #",
          currentDeckId
        );
      } catch (error) {
        if (error.name === "AbortError") {
          console.log("Abort Error");
        }
      } finally {
        history.go(0);
      }
    }
    createNewCard();
  };

  const handleSubmitUpdate = (event) => {
    event.preventDefault();
    async function updateExistingCard() {
      try {
        const abortController = new AbortController();
        const updatedCard = { ...activeCard };
        if(cardFront) {
          if(cardBack) {
            updatedCard.front = cardFront;
            updatedCard.back = cardBack;
          } else {
            updatedCard.front = cardFront;
          }
        } else if(cardBack) {
          updatedCard.back = cardBack;
        }
        //
        await updateCard(updatedCard, abortController.signal);
        setCardUpdateFlag(true);
      } catch (error) {
        if (error.name === "AbortError") {
          console.log("Abort Error");
        }
      }
    }
    updateExistingCard();
  };

  useEffect(() => {
    if(cardUpdateFlag){
      readDeck(currentDeckId).then(setDeck);
      history.push(`/decks/${currentDeckId}`);
    }    
  },[cardUpdateFlag]);

  if (url === `/decks/${deck.id}/cards/new`) {
    return (
      <div>
        <form onSubmit={handleSubmitNew}>
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
            <label htmlFor="cardBack">Back</label>
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
          <button
            type="button"
            className="btn btn-secondary mr-1"
            onClick={() => history.push(`/decks/${currentDeckId}`)}
          >
            Done
          </button>
          <button type="submit" className="btn btn-primary ml-1">
            Submit
          </button>
        </form>
      </div>
    );
  } else {
    return (
      <div>
        <form onSubmit={handleSubmitUpdate}>
          <div className="form-group">
            <label htmlFor="cardFront">Front</label>
            <textarea
              id="cardFront"
              name="cardFront"
              className="form-control"
              onChange={handleCardFrontChange}
              value={cardFront}
              placeholder={existingCardFront}
              rows="3"
            />
          </div>
          <div className="form-group">
            <label htmlFor="cardBack">Back</label>
            <textarea
              id="cardBack"
              name="cardBack"
              className="form-control"
              onChange={handleCardBackChange}
              value={cardBack}
              placeholder={existingCardBack}
              rows="3"
            />
          </div>
          <button
            type="button"
            className="btn btn-secondary mr-1"
            onClick={() => history.push(`/decks/${currentDeckId}`)}
          >
            Cancel
          </button>
          <button type="submit" className="btn btn-primary ml-1">
            Submit
          </button>
        </form>
      </div>
    );
  }
};

export default CardForm;
