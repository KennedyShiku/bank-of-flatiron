import React, { useState, useEffect } from 'react';
import '../App.css';
import TransactionList from './ListOfTransactions';
import TransactionForm from './Form';

// Main functional component for the application
function App() {
  // State for managing transaction data
  const [dataEntries, setDataEntries] = useState([]);
  // State for managing search input
  const [searchQuery, setSearchQuery] = useState('');
  // State for managing filtered transaction data
  const [filteredDataEntries, setFilteredDataEntries] = useState([]);

  // Effect to fetch transaction data from the server 
  useEffect(() => {
    fetch('http://localhost:3000/transactions') 
      .then((response) => response.json())
      .then((data) => setDataEntries(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  // Function that filters transaction data based on the search 
  function applySearch() {
    const filteredData = dataEntries.filter(entry =>
      entry.description.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredDataEntries(filteredData);
  }

  // Effect that adds search whenever searchQuery or dataEntries change
  useEffect(() => {
    applySearch();
  }, [searchQuery, dataEntries]);

  // JSX for rendering the App
  return (
    <div className="App">
      <div>
        <h1>Transactions</h1>
        <div>
          {/* Input for search */}
          <input
            placeholder="Enter search here"
            value={searchQuery}
            style={{ border: "solid", borderRadius:"50px", height: "30px" }}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      {/* Rendering the transaction list with filtered data */}
      {filteredDataEntries && <TransactionList transaction={filteredDataEntries} />}

      <div>
        <h1>Add Transaction</h1>
        {/* Rendering the transaction form */}
        <TransactionForm />
      </div>
    </div>
  );
}

export default App;
