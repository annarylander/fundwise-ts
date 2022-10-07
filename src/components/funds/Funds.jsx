import React from "react";
import { Link } from "react-router-dom";

const Funds = ({ funds, loading }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div className="hero min-h-screen">
      <table className="table table-compact">
        <thead>
          <h3 className="text-lg font-medium pb-5 pt-5">Alla fonder</h3>
        </thead>
        {funds.map((fund, index) => (
          <tbody className="hover:text-success" key={index}>
            <tr>
              <Link to={`/fund/${fund}`}>
                <td>{fund}</td>
              </Link>
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  );
};

export default Funds;
