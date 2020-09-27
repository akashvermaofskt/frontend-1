import React , { Component } from 'react';
import axios from 'axios';

export default class CreateTodo extends Component {

    constructor(props) {
        super(props);

        this.state = {
            todo_description: '',
            todo_responsible: '',
            todo_task:[],
            
        }
    }

    onChangeTodoDescription = e => {
        this.setState({ todo_description: e.target.value });
    }

    onChangeTodoResponsible = e => {
        this.setState({ todo_responsible: e.target.value });
    }

    onChangeTodoTask = (e) => {
      
        this.setState({
            todo_task:e.target.value
        });
    }
 
    
     
      

    onSubmit = e => {
        e.preventDefault();

        // SUBMIT LOGIC NEED TO BE IMPLEMENTED HERE
        console.log('Form submitteed:');
        console.log(`Todo Description: ${this.state.todo_description}`);
        console.log(`Todo Responsible: ${this.state.todo_responsible}`);
        console.log(`Todo Task: ${this.state.todo_task}`);
      

        const newTodo = {
            todo_description: this.state.todo_description,
            todo_responsible: this.state.todo_responsible,
            todo_task: this.state.todo_task,
            
        }

        axios.post('http://localhost:4000/todos/add', newTodo)
            .then( res => console.log(res.data));
        
        this.setState({
            todo_description: '',
            todo_responsible: '',
            todo_task: [],
            
        })
    }

    render() {
        return (
            <div style={{marginTop: 20}}>
                <h3>Create New Todo</h3>
                <form onSubmit = {this.onSubmit}>
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
                         <label>Task</label>
                   
                     
                         <input value={this.state.todo_task} className="form-control" onChange={this.onChangeTodoTask}></input>
                         
                         
                        
                         </div>
                    <div className="form-group">
                        <input type="submit" value="Create Todo" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}