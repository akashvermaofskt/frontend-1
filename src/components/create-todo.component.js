import React, { Component } from 'react';
import axios from 'axios';
import TaskHolder from './task-input-holder';
import { Button } from 'reactstrap'
export default class CreateTodo extends Component {

    constructor(props) {
        super(props);

        this.state = {
            todo_description: '',
            todo_responsible: '',
            todo_tasks: [],

        }
    }

    onChangeTodoDescription = e => {
        this.setState({ todo_description: e.target.value });
    }

    onChangeTodoResponsible = e => {
        this.setState({ todo_responsible: e.target.value });
    }

    updateTasks = (tasks) => {
        this.setState({
            todo_tasks: tasks
        });
    }

    onSubmit = e => {
        e.preventDefault();

        // SUBMIT LOGIC NEED TO BE IMPLEMENTED HERE
        console.log('Form submitteed:');
        console.log(`Todo Description: ${this.state.todo_description}`);
        console.log(`Todo Responsible: ${this.state.todo_responsible}`);
        console.log("Todo Tasks:", this.state.todo_tasks);

        const newTodo = {
            todo_description: this.state.todo_description,
            todo_responsible: this.state.todo_responsible,
            todo_tasks: this.state.todo_tasks,

        }
        console.log("New Todo -> ", newTodo)
        var config = {
            headers: { 'Access-Control-Allow-Origin': '*' }
        };
        axios.post('https://todo-backend-akash.herokuapp.com/todos/add', newTodo, config)
            .then(res => console.log(res.data));

        this.setState({
            todo_description: '',
            todo_responsible: '',
            todo_tasks: [],

        })
    }

    render() {
        return (
            <div style={{ marginTop: 20 }}>
                <h3>Create New Todo</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Description: </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.todo_description}
                            onChange={this.onChangeTodoDescription}
                        />

                    </div>
                    <div className="form-group">
                        <label>Batch-Responsible: </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.todo_responsible}
                            onChange={this.onChangeTodoResponsible}
                        />

                    </div>
                    <div className="form-group">
                        <label>Tasks</label>
                        <TaskHolder tasks={this.state.todo_tasks} updateTasks={this.updateTasks} />
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Create Todo" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}