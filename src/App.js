import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import TodosList from './components/todos-list.component';
import CreateTodo from './components/create-todo.component';
import EditTodo from './components/edit-todo.component';
import DeleteTodo from './components/delete-todo.component'
import Navbar from './components/Navbar'




class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          
          <Navbar></Navbar>

          <Route path='/' exact component={TodosList} />
          <Route path='/edit/:id' component={EditTodo} /> 
          <Route path='/create' component={CreateTodo} /> 
        <Route path='/delete/:id' component={DeleteTodo}></Route>
        </div>
      </Router>
    );
  }
}

export default App;
