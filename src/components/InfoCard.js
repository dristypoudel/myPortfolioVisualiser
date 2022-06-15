import React from "react";

const isIncome = Math.round(Math.random());

const InfoCard = () => {
  return (
    <div elevation={3} style={{ textAlign: "center", padding: "0 10%" }}>
      Try Saying: <br />
      Today I bought banking index stocks.
    </div>
  );
};

export default InfoCard;
