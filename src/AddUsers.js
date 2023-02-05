import React, { useState } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';
import { addUsers } from './redux/actions';



const AddUsers = () => {
  const [state, setState] = useState ({
    nama : "",
    title : ""
  })

  let navigate = useNavigate()

  const {nama, title} = state;

  const handleInputChange = (e) => {
    let {name, value} = e.target;
    setState({...state, [name]: value});
  }

  let dispatch = useDispatch()
const [error, setError] = useState("")

const handleSubmit = (e) => {
  e.preventDefault();
  if(!nama || !title) {
    setError("please input field")
  }
  else {
    dispatch(addUsers(state))
    navigate("/todo-list")
    setError("")

  }
}


  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
    <h2 style={{ margin: "20px 0" }}>ADD USER</h2>
    <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <TextField
        name="nama"
        label="Nama"
        variant="outlined"
        value={nama}
        onChange={handleInputChange}
        style={{ margin: "20px 0" }}
      />
      <TextField
        name="title"
        label="Todo"
        variant="outlined"
        value={title}
        onChange={handleInputChange}
        style={{ margin: "20px 0" }}
      />
      <Button variant="contained" type="submit" style={{ margin: "20px 0" }}>
        Submit
      </Button>
    </form>
  </div>
  )
}

export default AddUsers