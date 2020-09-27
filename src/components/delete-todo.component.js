import React, { useState, useEffect } from 'react';
import { Form, FormGroup, Label, Input, Col, Button } from 'reactstrap';

import axios from 'axios';

const DeleteStudent = (props) => {
    const [data, setData] = useState({
        todo_description: '',
            todo_responsible: '',
            todo_task:[],
           
    });

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(
                `http://localhost:4000/todos/${props.match.params.id}`
            );
            setData({ ...result.data });
        };
        fetchData();
    }, []);

    const onDeleteStudentData = (e) => {
        e.preventDefault();
        axios.delete(`http://localhost:4000/todos/delete/${props.match.params.id}`, data).then(res => console.log(res.data));
        props.history.push('/');
    }

    return (
        <div style={{ marginTop: 10 }}>
            <h3>Delete Student</h3>
            <Form onSubmit={onDeleteStudentData}>
                
                    <div className="form-group">
                        <label>Description: </label>
                        <input type="text" 
                                readOnly
                                className="form-control"
                                value={data.todo_description}
                        />
                    </div>
                    <div className="form-group">
                       <label>Batch-Responsible:</label> 
                        <Input
                            readOnly
                            type="text"
                           
                            className="form-control"
                            value={data.todo_responsible} />
                            </div>
                            <div className="form-group">
                            <label>Task:</label> 
                             <input
                             readOnly
                                 type="text"
                                
                                 className="form-control"
                                 value={data.todo_task}
                                  />
                                 </div>
                  
                
               
               
                <Button color="danger"> Delete Data</Button>
            </Form>
        </div>
    );
}

export default DeleteStudent;