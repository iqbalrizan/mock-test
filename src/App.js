import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AddUsers from './AddUsers';
import LoginForm from './Login';
import "./App.css"
import Todolist from './Todolist';

function App() {
  return (
    <div className="App">
    <Routes>
      <Route  path="/" element={<LoginForm />} />
      <Route path="/todo-list" element={<Todolist />} />
      <Route path="/add-user" element={<AddUsers />} />
    </Routes>
    </div>
  );
}

export default App;
