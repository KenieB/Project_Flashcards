import React from "react";

export const StudyCardContent = ({
  currentStudyCard,
  currentCardFrontview
}) => {
  
  if(currentCardFrontview){
    return (
        <>
          <p className="card-text">{currentStudyCard.front}</p>
        </>
      );
  } else {
    return (
        <>
          <p className="card-text text-success font-weight-bold">{currentStudyCard.back}</p>
        </>
      );
  }
  
};

export default StudyCardContent;
