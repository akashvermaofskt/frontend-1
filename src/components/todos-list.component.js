import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { UserProvider } from './UserContext'
import { Row, Col } from 'reactstrap'
const _ = require('lodash');

const Todo = props => {

    const rows = props.todo.todo_tasks.map((task, index) => <Row key={index}>{(index + 1) + ". " + task + "\n"}</Row>)
    return (
        <tr>
            <td className={props.todo.todo_completed ? 'completed' : ''}>{props.todo.todo_description}</td>
            <td className={props.todo.todo_completed ? 'completed' : ''}>{props.todo.todo_responsible}</td>
            <td className={props.todo.todo_completed ? 'completed' : ''}><Col>{rows}</Col></td>
            <td>
                <Link to={"/edit/" + props.todo._id}>Edit</Link>
            </td>
            <td><Link to={"/delete/" + props.todo._id}>Delete</Link></td>
        </tr>
    );
}

const CompareTodos = (todos1, todos2) => {
    if (todos1.length !== todos2.length) {
        return false;
    }
    return true;
}
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
        axios.get('https://todo-backend-akash.herokuapp.com/todos')
            .then(res => {
                console.log(res)
                this.setState({
                    todos: res.data
                })
            })
            .catch(err => console.log(err));
    }

    componentDidUpdate() {
        axios.get('https://todo-backend-akash.herokuapp.com/todos')
            .then(res => {
                if (JSON.stringify(this.state.todos) !== JSON.stringify(res.data)) {
                    this.setState({
                        todos: res.data
                    })
                }
            })
            .catch(err => console.log(err));
    }

    componentWillUnmount() {
        this._isMounted = false;
    }


    todoList = () => this.state.todos.map(
        (todo, index) => <Todo todo={todo} key={index} />
    )


    render() {
        console.log("Todos-> ", this.state.todos)
        return (
            <div>
                <h3>Todos List</h3>
                <table className="table table-striped" style={{ marginTop: 20 }}>
                    <thead>
                        <tr>
                            <th>Description</th>
                            <th>Batch-Responsibility</th>
                            <th>Task</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.todoList()}
                    </tbody>
                </table>
            </div>
        )
    }
}