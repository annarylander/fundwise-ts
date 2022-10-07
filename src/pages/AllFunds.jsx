import React, { useState, useEffect, useContext } from "react";
import Pagination from "../components/funds/Pagination";
import Funds from "../components/funds/Funds";
import FundContext from "../context/FundContext";

export default function AllFunds() {
  const { funds, loading, fetchFunds } = useContext(FundContext);

  const [currentPage, setCurrentPage] = useState(1);
  const [fundsPerPage] = useState(30);

  useEffect(() => {
    fetchFunds();
  }, []);

  // Get current posts
  const indexOfLastFund = currentPage * fundsPerPage;
  const indexOfFirstFund = indexOfLastFund - fundsPerPage;
  const currentFund = funds.slice(indexOfFirstFund, indexOfLastFund);

  //Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="container mx-auto">
      <Funds funds={currentFund} loading={loading} />
      <Pagination
        fundsPerPage={fundsPerPage}
        totalFunds={funds.length}
        paginate={paginate}
      />
    </div>
  );
}
