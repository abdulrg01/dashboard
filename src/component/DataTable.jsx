import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number,
) {
  return {  };
}

const rows = [
  createData(),
  createData(),
  createData(),
];


const DataTable = () => {
  return (
    <div className=''>
    <TableContainer component={Paper}>
    <Table sx={{ background: 'lightgray' }}  aria-label="caption table">
      <TableHead>
        <TableRow>
          <TableCell>REF</TableCell>
          <TableCell align="right">METHODE</TableCell>
          <TableCell align="right">GETWAY</TableCell>
          <TableCell align="right">DATE</TableCell>
          <TableCell align="right">AMOUNT</TableCell>
          <TableCell align="right">STATUS</TableCell>
        </TableRow>
      </TableHead>
    </Table>
  </TableContainer>
    </div>
  )
}

export default DataTable