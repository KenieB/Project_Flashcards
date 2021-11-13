import React from "react";
import CardSummaryLayout from "./CardSummaryLayout";

export const CardList = ({ deckCards=[] }) => {

  const deckCardList = deckCards.map((card) => (
    <CardSummaryLayout key={card.id} card={card} />
  ));

  return (
    <div className="card-list">
      <div className="list-group">{deckCardList}
      </div>
    </div>
  );
};

export default CardList;