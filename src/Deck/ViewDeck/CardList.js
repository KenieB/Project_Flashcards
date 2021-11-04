import React, { useEffect } from "react";
import CardSummaryLayout from "./CardSummaryLayout";

export const CardList = ({ deckCards=[] }) => {
  //const { cards } = { ...deck };
  const deckCardList = deckCards.map((card) => (
    <CardSummaryLayout key={card.id} card={card} />
  ));

 /* useEffect(() => {
   // console.log("deck: ", deck);
    console.log("CardList - deckCards: ", deckCards);
  });*/
  return (
    <div className="card-list">
      <div className="list-group">{deckCardList}
      </div>
    </div>
  );
};

export default CardList;