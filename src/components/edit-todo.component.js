import React , { Component } from 'react';
import axios from 'axios';

export default class EditTodo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            todo_description: '',
            todo_responsible: '',
            todo_task: [],
           
        }
    }

    componentDidMount() {
        axios.get('http://localhost:4000/todos/' + this.props.match.params.id)
            .then( res => {
                this.setState({
                    todo_description: res.data.todo_description,
                    todo_responsible: res.data.todo_responsible,
                    todo_task: res.data.todo_task,
                   
                })
            })
            .catch( err => console.log(err));
    }

    onChangeTodoDescription = (e) => {
        this.setState({
            todo_description: e.target.value
        });
    }

    onChangeTodoResponsible = (e) => {
        this.setState({
            todo_responsible: e.target.value
        });
    }

    onChangeTodoTask = (e) => {
        
        this.setState({
            todo_task:e.target.value
        });
    }

  
    onSubmit = (e) => {
        e.preventDefault();
        const obj = {
            todo_description: this.state.todo_description,
            todo_responsible: this.state.todo_responsible,
            todo_task: this.state.todo_task,
           
        };
        axios.post('http://localhost:4000/todos/update/' + this.props.match.params.id, obj)
            .then( res => console.log(res.data));

        this.props.history.push('/');
    }

    render() {
        return (
            <div>
                <h3>Update Todo</h3>
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
                        <label>Responsible: </label>
                        <input type="text" 
                                className="form-control"
                                value={this.state.todo_responsible}
                                onChange={this.onChangeTodoResponsible}
                                />
                    </div>
                    <div className="form-group">
                        <label>Task: </label>
                        <input type="text" 
                                className="form-control"
                                value={this.state.todo_task}
                                onChange={this.onChangeTodoTask}
                                />
                                
                                
                    </div>
                    
                        <div className="form-group">
                            <input type="submit" value="Update Todo" className="btn btn-primary" />
                        </div>
                </form>
            </div>
        )
    }
}