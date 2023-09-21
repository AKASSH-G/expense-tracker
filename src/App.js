import React, { useState } from 'react';
import Header from './components/Header';
import { Balance } from './components/Balance';
import { IncomeExpenses } from './components/IncomeExpenses';
import { TransactionList } from './components/TransactionList';
import { AddTransaction } from './components/AddTransaction';
import { GlobalProvider } from './contast/GlobalState';
import StickyNote from './components/StickyNote'; // Corrected the import statement
import './App.css';

import Wrapper from "./components/Wrapper";
import Screen from "./components/Screen";
import ButtonBox from './components/ButtonBox'
import Button from './components/Button'
import CalcProvider from "./contast/CalcContext";

const btnValues = [
  ["C", "+-", "%", "/"],
  [7, 8, 9, "x"],
  [4, 5, 6, "-"],
  [1, 2, 3, "+"],
  [0, ".", "="],
];




function App() {
  const [notes, setNotes] = useState([]);

  function addNote() {
    setNotes([
      ...notes,
      {
        id: Date.now(),
      },
    ]);
  }

  function removeNote(noteId) {
    setNotes(notes.filter((item) => item.id !== noteId));
  }

  return (
    <GlobalProvider>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <AddTransaction />
      </div>

      <div className="App">
        <button className="sticky-btn" onClick={addNote}>
          Create Note +
        </button>
        {notes.map((item) => (
          <StickyNote key={item.id} onClose={() => removeNote(item.id)} />
        ))}
      </div>

      <CalcProvider>
      <Wrapper>
        <Screen />
        <ButtonBox>
          {btnValues.flat().map((btn, i) => (
            <Button
              value={btn}
              key={i}
            />
          ))}
        </ButtonBox>
      </Wrapper>
    </CalcProvider>
    
    </GlobalProvider>
  );
}

export default App;
