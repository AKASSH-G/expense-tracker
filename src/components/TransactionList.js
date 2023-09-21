import React, { useContext } from 'react';
import { Transaction } from './Transaction';
import { GlobalContext } from '../contast/GlobalState';

export const TransactionList = () => {
  const { transactions } = useContext(GlobalContext);

  return (
    <>
      <h3 style={{ color: 'grey', fontWeight: 'bold', fontSize:'20px' }}>HISTORY</h3>
      <ul id="list" className="list">
        {transactions.map(transaction => (
          <Transaction key={transaction.id} transaction={transaction} />
        ))}
      </ul>
    </>
  );
};
