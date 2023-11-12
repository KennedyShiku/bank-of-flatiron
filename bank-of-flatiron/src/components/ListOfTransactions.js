import React, { useState } from 'react';
import '../App.css';

// Functional component for displaying a list of transactions
function TransactionList({ transaction }) {
  // State to store transaction data
  const [data, setData] = useState(transaction);

  // Logging the data to the console for debugging purposes
  console.log(data);

  // JSX for rendering the list of transactions
  return (
    <div>
      <table>
        <thead>
          {/* Table header with column names */}
          <tr style={{ fontSize: 30 }}>
            <th style={{ border: "solid" }}>Description</th>
            <th style={{ border: "solid" }}>Category</th>
            <th style={{ border: "solid" }}>Date</th>
            <th style={{ border: "solid" }}>Amount</th>
          </tr>
        </thead>
        <tbody>
          {/* Using map method through each transaction and creating a table row for each */}
          {transaction.map((element) => (
            <tr key={element.id}>
              {/* Table cells with transaction details */}
              <td style={{ border: "double" }}>{element.description}</td>
              <td style={{ border: "double" }}>{element.category}</td>
              <td style={{ border: "double" }}>{element.date}</td>
              <td style={{ border: "double" }}>{element.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TransactionList;
