import React, { useState } from 'react';
import './App.css';

function App() {
  const [paid, setPaid] = useState('');
  const [travelingSolo, setTravelingSolo] = useState('');
  const [putInMiddleSeat, setPutInMiddleSeat] = useState('');
  const [flightLessThan3Hours, setFlightLessThan3Hours] = useState('');
  const [forAChild, setForAChild] = useState('');
  const [familyOrFriend, setFamilyOrFriend] = useState('');
  const [result, setResult] = useState('');

  const handleInputChange = () => {
    // Define loginc for determining if you should trade seats
    if (forAChild === 'yes' && familyOrFriend === 'dating') {
      setResult('No, focus on school')
    } else if (forAChild === 'yes' && familyOrFriend === 'child') {
      setResult('No, Azeem will be contacting the proper authorities')
    } else if (paid === 'yes' || putInMiddleSeat === 'yes' || travelingSolo === 'no') {
      setResult('No, Azeem will not trade seats');
    } else if ((travelingSolo === 'yes' && flightLessThan3Hours === 'yes') || (travelingSolo === 'yes' && forAChild === 'yes') || familyOrFriend === 'elder' || familyOrFriend === 'parent') {
      setResult('Yes, Azeem will trade seats');
    } else {
      setResult('No, Azeem will not trade seats');
    }
  };

  const resetForm = () => {
    setPaid('');
    setTravelingSolo('');
    setPutInMiddleSeat('');
    setFlightLessThan3Hours('');
    setForAChild('');
    setFamilyOrFriend('');
    setResult('');
  };

  return (
    <div className="App">
      <h1>Should Azeem Trade Seats With You?</h1>

      <div className="select-container">
        <label>
          <span>Did Azeem pay for his seat?</span>
          <select value={paid} onChange={(e) => setPaid(e.target.value)}>
            <option value="">-- Please choose an option --</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </label>
      </div>

      <div className="select-container">
        <label>
          <span>Is Azeem traveling solo?</span>
          <select value={travelingSolo} onChange={(e) => setTravelingSolo(e.target.value)}>
            <option value="">-- Please choose an option --</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </label>
      </div>

      <div className="select-container">
        <label>
          <span>Will trading with you put Azeem in a middle seat?</span>
          <select value={putInMiddleSeat} onChange={(e) => setPutInMiddleSeat(e.target.value)}>
            <option value="">-- Please choose an option --</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </label>
      </div>

      <div className="select-container">
        <label>
          <span>Is the flight less than 3 hours?</span>
          <select value={flightLessThan3Hours} onChange={(e) => setFlightLessThan3Hours(e.target.value)}>
            <option value="">-- Please choose an option --</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </label>
      </div>

      <div className="select-container">
        <label>
          <span>Are you a child less than the age of 10?</span>
          <select value={forAChild} onChange={(e) => setForAChild(e.target.value)}>
            <option value="">-- Please choose an option --</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </label>
      </div>

      <div className="select-container">
        <label>
          <span>Are you trading to sit next to a friend or family member?</span>
          <select value={familyOrFriend} onChange={(e) => setFamilyOrFriend(e.target.value)}>
            <option value="">-- Please choose an option --</option>
            <option value="elder">Yes, elder</option>
            <option value="parent">Yes, parent</option>
            <option value="child">Yes, child</option>
            <option value="sibling">Yes, sibling</option>
            <option value="friend">Yes, friend</option>
            <option value="spouse">Yes, husban/wife</option>
            <option value="dating">Yes, boyfriend/girlfriend</option>
            <option value="no">No</option>
          </select>
        </label>
      </div>

      <button onClick={handleInputChange}>Submit</button>

      {result && (
        <div>
          <h2>Result: {result}</h2>
        </div>
      )}

      <button className="reset" onClick={resetForm}>Reset</button>
    </div>
  );
}

export default App;
