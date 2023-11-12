import React, { useState } from 'react';

function NewTransactionForm() {
  // State for managing the form data
  const [formState, updateFormState] = useState({
    date: '',
    description: '',
    category: '',
    amount: '',
  });

  // State for storing transaction data
  const [transactionData, setTransactionData] = useState([]);

  // Function to handle changes in form fields
  function handleFormChange(field, value) {
    updateFormState({ ...formState, [field]: value });
  }

  // Function to handle form submission
  function handleFormSubmit(e) {
    e.preventDefault();

    // Update transaction data with the new form data
    setTransactionData([...transactionData, formState]);

    // Perform a fetch to submit the form data to the server
    fetch(`http://localhost:3000/transactions`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formState),
    });
  }

  // JSX for the form
  return (
    <form onSubmit={handleFormSubmit}>
      <div>
        {/* Input for Transaction Date */}
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
        {/* Input for Transaction Description */}
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
        {/* Input for Transaction Category */}
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
        {/* Input for Transaction Amount */}
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
      {/* Button to submit the form */}
      <button type="submit">Record Transaction</button>
    </form>
  );
}

export default NewTransactionForm;
