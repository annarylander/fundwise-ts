import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import moment from "moment";
import { Link } from "react-router-dom";
import NotFound from "./NotFound";

interface Detail {
  fundName: string;
  fundHoldings: [
    {
      companyName: string;
      shareOfFund: number;
    }
  ];
  holdingsDate: Date;
}

export default function Detail() {
  const { fundName } = useParams();

  const [detail, setDetail] = React.useState<Detail>();

  const [loading, setLoading] = React.useState(true);

  useEffect(() => {
    const url = `${process.env.REACT_APP_API_KEY}/fund/${fundName}`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => setDetail(data.fund));
    setLoading(false);
  }, []);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <>
      {detail ? (
        <div className="page">
          <h3 className="text-lg font-medium pb-5 pt-5">{fundName}</h3>
          <table className="table table-compact">
            <thead>
              <tr>
                <th>Fund holdings</th>
                <th>Share</th>
                <th>Date</th>
              </tr>
            </thead>
            {detail &&
              detail.fundHoldings.map((item, i) => {
                return (
                  <tbody key={i}>
                    <tr>
                      <td>{item.companyName}</td>
                      <td>{item.shareOfFund}</td>
                      <td>{moment(detail.holdingsDate).format("ll")} </td>
                    </tr>
                  </tbody>
                );
              })}
          </table>
          <button
            type="submit"
            className="btn-sm btn-success rounded text-white"
          >
            <Link to="/allfunds">Back</Link>
          </button>
        </div>
      ) : (
        <NotFound />
      )}
    </>
  );
}
