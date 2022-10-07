import React, { useContext } from "react";
import FundContext from "../../context/FundContext";

export default function FundResult() {
  const { funds, loading } = useContext(FundContext);

  return (
    <div className="grid grid-cols-1 gap-8 xl:gris-cols-4 lg: grid-cols-3 md: grid-cols-2">
      {funds.map((fund, index) => {
        <h3 key={index}> {fund}</h3>;
      })}
    </div>
  );
}
