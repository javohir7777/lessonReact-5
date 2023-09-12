import React, { useState } from "react";
import Cards from "../components/card/Cards";

const DebtsPage = () => {
  const [debts, setDebts] = useState([
    { id: "0", name: "Alishe", debt: 120, phone: "987342109" },
  ]);
  return (
    <div className="container">
      <div className="my-3">
        <h1 className="text-center">Debts</h1>
        {debts.map((debt) => (
          <Cards {...debt} />
        ))}
      </div>
    </div>
  );
};

export default DebtsPage;
