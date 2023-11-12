import React, { useState, useEffect } from 'react';
import '../App.css';
import TransactionList from './ListOfTransactions';
import TransactionForm from './Form';

function App(){
const [dataEntries, setDataEntries] = useState([]);
const [searchQuery, setSearchQuery] = useState('');
const [filteredDataEntries, setFilteredDataEntries] = useState([]);

useEffect(() => {
  fetch('http://localhost:3000/transactions') 
    .then((response) => response.json())
    .then((data) => setDataEntries(data))
    .catch((error) => console.error('Error fetching data:', error));
}, []);

function applySearch() {
  const filteredData = dataEntries.filter(entry =>
    entry.description.toLowerCase().includes(searchQuery)
  );
  setFilteredDataEntries(filteredData);
};

useEffect(() => {
  applySearch();
}, [searchQuery, dataEntries]);

return (
  <div className="App">
    <div>
      <h1>Transactions</h1>
      <div>
        <input
          
          placeholder="Enter search here"
          value={searchQuery}
          style={{ border: "solid", borderRadius:"50px", height: "30px" }}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
    </div>

    {filteredDataEntries && <TransactionList transaction={filteredDataEntries} />}

    <div>
      <h1>Add Transaction</h1>
      <TransactionForm />
    </div>
  </div>
);
}

export default App;