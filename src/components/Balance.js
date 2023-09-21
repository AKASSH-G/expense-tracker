import React, { useContext } from 'react';
import { GlobalContext } from '../contast/GlobalState';

export const Balance = () => {
  const { transactions }=useContext(GlobalContext);

  const amounts=transactions.map(transaction=>transaction.amount);


  const total=amounts.reduce((acc, item)=>(acc+=item),0).toFixed(2);


  const BalanceStyle = {
    color: 'grey',
    fontSize: '18px', // Adjust the desired font size
    fontWeight: 'bold', 
    
  };

  return (
    <>
    <h4 style={BalanceStyle}>your Balance</h4>
    <h1>${total}</h1>
    </>
  )
}

