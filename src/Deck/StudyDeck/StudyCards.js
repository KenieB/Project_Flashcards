import React, { useState, useEffect } from "react";
import StudyCardContent from "./StudyCardContent";
import { useHistory } from "react-router-dom";

export const StudyCards = ({ deck }) => {
  const history = useHistory();
  const deckSize = deck.cards.length;
  const [currentStudyCardIndex, setCurrentStudyCardIndex] = useState(0);
  const [currentStudyCard, setCurrentStudyCard] = useState({
    ...deck.cards[0],
  });
  const [currentCardFrontview, setCurrentCardFrontview] = useState(true);

  const flipClickHandler = (event) => {
    event.preventDefault();
    setCurrentCardFrontview(!currentCardFrontview);
  };
  const nextClickHandler = (event) => {
    event.preventDefault();
    setCurrentStudyCardIndex(currentStudyCardIndex + 1);
  };

  useEffect(() => {
    if (currentStudyCardIndex !== 0) {
      setCurrentStudyCard({ ...deck.cards[currentStudyCardIndex] });
    }
  }, [currentStudyCardIndex, deck.cards]);

  useEffect(() => {
    if (currentStudyCardIndex !== 0) {
      setCurrentCardFrontview(!currentCardFrontview);
    }
  }, [currentStudyCard]);

  useEffect(() => {
    if (!currentCardFrontview) {
      if (currentStudyCardIndex === deckSize) {
        const result = window.confirm(
          "Restart cards?\n\nClick 'cancel' to return to the home page."
        );
        if (result) {
          history.go(0);
        } else {
          history.push("/");
        }
      }
    }
  }, [currentStudyCardIndex]);
 
  if (currentCardFrontview) {
    return (
      <div className="card">
        <div className="card-body">
          <h4 className="card-title">
            Card {currentStudyCardIndex + 1} of {deckSize}
          </h4>
          <StudyCardContent
            currentStudyCard={currentStudyCard}
            currentCardFrontview={currentCardFrontview}
          />
          <div>
            <button
              type="button"
              className="btn btn-secondary mx-1"
              onClick={flipClickHandler}
            >
              Flip
            </button>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="card">
        <div className="card-body">
          <h4 className="card-title">
            Card {Math.min(currentStudyCardIndex + 1, deckSize)} of {deckSize}
          </h4>
          <StudyCardContent
            currentStudyCard={currentStudyCard}
            currentCardFrontview={currentCardFrontview}
          />
          <div className="card-buttons">
            <button
              type="button"
              className="btn btn-secondary mx-1"
              onClick={flipClickHandler}
            >
              Flip
            </button>
            <button
              type="button"
              id="next-btn"
              className="btn btn-primary mx-1"
              onClick={nextClickHandler}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    );
  }
};

export default StudyCards;