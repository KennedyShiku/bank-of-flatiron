import React, { useState } from 'react';

function NewTransactionForm() {
  const [formState, updateFormState] = useState({
    date: '',
    description: '',
    category: '',
    amount: '',
  });

  const [transactionData, setTransactionData] = useState([]);

  function handleFormChange(field, value) {
    updateFormState({ ...formState, [field]: value });
  }

  function handleFormSubmit(e) {
    e.preventDefault();

    setTransactionData([...transactionData, formState]);

    fetch(`http://localhost:3000/transactions`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formState),
    });
  }

  return (
    <form onSubmit={handleFormSubmit}>
      <div>
        <label style={{ paddingTop: "20px" }}>Transaction Date:</label>
        <input
          type="date"
          name="date"
          required
          value={formState.date}
          style={{ border: "none", borderRadius: "20px", width: "200px", height: "20px", fontSize: "15px", textAlign: "center" }}
          onChange={(e) => handleFormChange('date', e.target.value)}
        />
      </div>
      <div>
        <label style={{ paddingTop: "20px" }}>Transaction Description:</label>
        <input
          type="text"
          name="description"
          required
          value={formState.description}
          style={{ border: "solid", borderRadius: "20px", width: "200px", height: "20px", fontSize: "15px", textAlign: "center" }}
          onChange={(e) => handleFormChange('description', e.target.value)}
        />
      </div>
      <div>
        <label style={{ paddingTop: "20px" }}>Transaction Category:</label>
        <input
          type="text"
          name="category"
          required
          value={formState.category}
          style={{ border: "solid", borderRadius: "20px", width: "200px", height: "20px", fontSize: "15px", textAlign: "center" }}
          onChange={(e) => handleFormChange('category', e.target.value)}
        />
      </div>
      <div>
        <label style={{ paddingTop: "20px" }}>Transaction Amount:</label>
        <input
          type="number"
          name="amount"
          required
          value={formState.amount}
          style={{ border: "solid", borderRadius: "20px", width: "200px", height: "20px", fontSize: "15px", textAlign: "center" }}
          onChange={(e) => handleFormChange('amount', e.target.value)}
        />
      </div>
      <button type="submit">Record Transaction</button>
    </form>
  );
}

export default NewTransactionForm;
