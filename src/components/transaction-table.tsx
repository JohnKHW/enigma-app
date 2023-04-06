import * as React from "react";
import {
  TableContainer,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";

type Transaction = {
  id: number;
  date: string;
  amount: number;
  type: string;
};

type Props = {
  transactions: Transaction[];
};

export const TransactionTable: React.FC<Props> = ({ transactions }) => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>Type</TableCell>
            <TableCell align="right">Amount</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {transactions.map((transaction) => (
            <TableRow key={transaction.id}>
              <TableCell component="th" scope="row">
                {transaction.date}
              </TableCell>
              <TableCell>{transaction.type}</TableCell>
              <TableCell align="right">{transaction.amount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
