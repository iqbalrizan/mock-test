import * as React from 'react';
import { useEffect } from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useDispatch, useSelector } from 'react-redux';
import { deleteUsers, loadUsers } from './redux/actions';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { useNavigate } from 'react-router';


const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 24,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}





export default function Todolist() {
  let dispatch = useDispatch()

  const {users} = useSelector(state => state.data)
useEffect (() => {
  dispatch(loadUsers());
}, [dispatch])

const handleDelete = (id) => {
  if(window.confirm("are you sure?")){
    dispatch(deleteUsers(id))
  }
}
let navigate = useNavigate()



  return (
    <>
    <br />
    <Button onClick={() => navigate("/add-user")} variant="contained">Add User</Button>
    <br />
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="left">NAMA</StyledTableCell>
            <StyledTableCell align="left">TODO</StyledTableCell>
            <StyledTableCell align="left">ACTION</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users && users.map((item) => (
            <StyledTableRow key={item.id}>
              <StyledTableCell align='left'>
                {item.nama}
              </StyledTableCell>
              <StyledTableCell align="left">{item.title}</StyledTableCell>
              <StyledTableCell align="left">
              <ButtonGroup variant="outlined" aria-label="outlined button group">
  <Button
  onClick={() => handleDelete (item.id)}
  >Hapus</Button>
 
</ButtonGroup>
              </StyledTableCell>
             
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </>
  );
}