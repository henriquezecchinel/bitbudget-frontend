import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TextField} from '@mui/material';

function TransactionsPage() {
    const [transactions, setTransactions] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await axios('http://localhost:8080/transactions');
                setTransactions(result.data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, []);

    const handleEdit = async (transaction, field, value) => {
        if (field === 'description') {
            transaction.description = value;
        }

        try {
            await axios.put(`http://localhost:8080/transactions/${transaction.id}`, transaction);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Description</TableCell>
                        <TableCell>Purchase Date</TableCell>
                        <TableCell>Usage Date</TableCell>
                        <TableCell>Amount</TableCell>
                        <TableCell>Currency</TableCell>
                        <TableCell>Installments</TableCell>
                        <TableCell>Months Duration</TableCell>
                        <TableCell>Main Category</TableCell>
                        <TableCell>Sub Category</TableCell>
                        <TableCell>Owner</TableCell>
                        <TableCell>Country</TableCell>
                        <TableCell>Tag</TableCell>
                        <TableCell>Payment Method</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {transactions.map((transaction, index) => {
                        const purchaseDate = new Date(transaction.purchaseDate).toISOString().split('T')[0];
                        const usageDate = new Date(transaction.usageDate).toISOString().split('T')[0];

                        return (
                            <TableRow key={index}>
                                <TableCell>
                                    <TextField
                                        defaultValue={transaction.description}
                                        onBlur={(e) => handleEdit(transaction, 'description', e.target.value)}
                                    />
                                </TableCell>
                                <TableCell>{purchaseDate}</TableCell>
                                <TableCell>{usageDate}</TableCell>
                                <TableCell>{transaction.amount}</TableCell>
                                <TableCell>{transaction.currency.description}</TableCell>
                                <TableCell>{transaction.installments}</TableCell>
                                <TableCell>{transaction.monthsDuration}</TableCell>
                                <TableCell>{transaction.subCategory.mainCategory.description}</TableCell>
                                <TableCell>{transaction.subCategory.description}</TableCell>
                                <TableCell>{transaction.owner.description}</TableCell>
                                <TableCell>{transaction.country.description}</TableCell>
                                <TableCell>{transaction.tag.description}</TableCell>
                                <TableCell>{transaction.paymentMethod.description}</TableCell>
                            </TableRow>
                        );
                    })}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default TransactionsPage;