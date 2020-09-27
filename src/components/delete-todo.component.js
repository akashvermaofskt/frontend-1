import React, { useState, useEffect } from 'react';
import { Form, FormGroup, Label, Input, Row, Col, Button } from 'reactstrap';
import TaskHolder from './task-input-holder';

import axios from 'axios';

const DeleteStudent = (props) => {
    const [data, setData] = useState({
        todo_description: '',
        todo_responsible: '',
        todo_tasks: [],
    });

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(
                `https://todo-backend-akash.herokuapp.com/todos/${props.match.params.id}`
            );
            setData({ ...result.data });
        };
        fetchData();
    }, []);

    const onDeleteTodoData = (e) => {
        e.preventDefault();
        axios.delete(`https://todo-backend-akash.herokuapp.com/todos/delete/${props.match.params.id}`, data).then(res => console.log(res.data));
        props.history.push('/');
    }
    const rows = data.todo_tasks.map((task, index) => <Row>{(index + 1) + ". " + task + "\n"}</Row>)

    return (
        <div style={{ marginTop: 10 }}>
            <h3>Delete Student</h3>
            <Form onSubmit={onDeleteTodoData}>

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
                    <Col>
                        {rows}
                    </Col>
                </div>




                <Button color="danger"> Delete Data</Button>
            </Form>
        </div>
    );
}

export default DeleteStudent;