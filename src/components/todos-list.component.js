import React , { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import {UserProvider} from './UserContext'


const Todo = props => (
   
    <tr>
        <td className = { props.todo.todo_completed ? 'completed' : ''}>{props.todo.todo_description}</td>
        <td className = { props.todo.todo_completed ? 'completed' : ''}>{props.todo.todo_responsible}</td>
        <td className = { props.todo.todo_completed ? 'completed' : ''}>{props.todo.todo_task}</td>
        <td>
            <Link to={"/edit/" + props.todo._id}>Edit</Link>
            
        </td>
        <td><Link to={"/delete/"+ props.todo._id}>Delete
        </Link></td>
    </tr>
)


export default class TodosList extends Component {
    _isMounted = false;
    constructor(props) {
        super(props);
        this.state = {
            todos: []
        };
    }

    componentDidMount() {
        this._isMounted = true;

        axios.get('http://localhost:4000/todos')
            .then( res => {
                console.log(res)
                this.setState({
                    todos: res.data
                })
            })
            .catch( err => console.log(err));
    }

    componentDidUpdate() {
        axios.get('http://localhost:4000/todos')
            .then( res => {
                this.setState({
                    todos: res.data
                })
            })
            .catch( err => console.log(err));
    }
    componentWillUnmount() {
        this._isMounted = false;
      }

    todoList = () => this.state.todos.map(
        (todo, index) => <Todo todo={todo} key={index} />
    )
    

    render() {
        return (
       
       
            <div>
                <h3>Todos List</h3>
                <table className="table table-striped" style={{ marginTop: 20}}>
                    <thead>
                        <tr>
                            <th>Description</th>
                            <th>Batch-Responsibility</th>
                            <th>Task</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.todoList() }
                    </tbody>
                </table>
                
                
            </div>
          
           
        )
    }
}