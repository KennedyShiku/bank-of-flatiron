import React, { useState } from 'react';
import '../App.css';
function TransactionList({ transaction }) {
  const [data, setData] = useState(transaction);
  console.log(data);


  return (
    <div>
      <table>
        <thead>
          <tr style={{fontSize: 30}}>
            <th style={{border: "solid"}}>Description</th>
            <th style={{border: "solid"}}>Category</th>
            <th style={{border: "solid"}}>Date</th>
            <th style={{border: "solid"}}>Amount</th>
          </tr>
        </thead>
        <tbody>
          {transaction.map((element) => (
            <tr key={element.id}>
              <td style={{border: "double"}}>{element.description}</td>
              <td style={{border: "double"}}>{element.category}</td>
              <td style={{border: "double"}}>{element.date}</td>
              <td style={{border: "double"}}>{element.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TransactionList;