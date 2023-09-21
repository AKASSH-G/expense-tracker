import React, { useState, useContext } from 'react'
import { GlobalContext } from '../contast/GlobalState';

export const AddTransaction = () => {
    const [text, setText] = useState('');
    const [amount, setAmount] = useState(0);

    const { addTransaction } = useContext(GlobalContext);

    const onSubmit = e => {
        e.preventDefault();

        const newTransaction = {
            id: Math.floor(Math.random() * 100000000),
            text,
            amount: +amount
        }

        addTransaction(newTransaction);
    }

    const labelStyle = {
        color: 'white',
        fontWeight: 'bold',
        fontSize: '18px' // Adjust the font size as needed
    };

    return (
        <>
            <h3 style={{ color: 'white', fontWeight: 'bold', fontSize: '24px' }}>Add new transaction</h3>
            <form onSubmit={onSubmit}>
                <div className="form-control">
                    <label htmlFor="text" style={labelStyle}>Text</label>
                    <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter text..." />
                </div>
                <div className="form-control">
                    <label htmlFor="amount" style={labelStyle}>
                        Amount<br />
                        (negative-expense, positive-income)
                    </label>
                    <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter text..." />
                </div>
                <button className="btn">Add transaction</button>
            </form>
        </>
    )
}
