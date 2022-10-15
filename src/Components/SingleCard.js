import React from "react";
import "./SingleCard.css";
function SingleCard({ card, choiceCard, flipped, disabled }) {
  const handleCard = (card) => {
    if(!disabled){
      choiceCard(card);
    }
  };
  return (
    <div className="card">
      <div className={flipped ? "flipped" : ""}>
        <img src={card.src} className="front" alt="" />
        <img
          src="./img/cover.png"
          className="back"
          alt="back card"
          onClick={() => {
            handleCard(card);
          }}
        />
      </div>
    </div>
  );
}

export default SingleCard;
