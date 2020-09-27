import React from 'react';
import { FormGroup, Container, Button, Row, Col } from 'reactstrap';
import TaskRow from './task-input-row'

const updateTaskProperty = (taskIndex, tasks, updateTasks) => (updatedValue) => {
    tasks[taskIndex] = updatedValue;
    updateTasks([...tasks]);
};

const deleteTask = (taskIndex, tasks, updateTasks) => (event) => {
    event.preventDefault();
    const newTasks = tasks.filter((_, index) => index !== taskIndex);
    updateTasks([...newTasks]);
};

const addTask = (tasks, updateTasks) => (event) => {
    event.preventDefault();
    const newtasks = tasks ? tasks : [];
    newtasks.push("");
    updateTasks([...newtasks]);
};

const buildTaskRows = (tasks, updateTasks) => {
    if (!tasks) return null;
    return tasks.map((task, taskIndex) => {
        return (
            <Row className='py-4' key={taskIndex}>
                <Col xs={{ size: 1 }}>
                    {taskIndex + 1 + '.'}
                </Col>
                <Col xs={{ size: 10 }}>
                    <TaskRow
                        key={taskIndex}
                        task={task}
                        updateTaskProperty={updateTaskProperty(taskIndex, tasks, updateTasks)}
                    />
                </Col>
                <Col xs={{ size: 1 }}>
                    <Button
                        outline
                        color='danger'
                        onClick={deleteTask(taskIndex, tasks, updateTasks)}
                    >
                        X
                    </Button>
                </Col>
            </Row>
        );
    })
}

const TaskHolder = (props) => {
    const { tasks, updateTasks } = props;
    return (
        <FormGroup row className='row-input'>
            <Container>
                {buildTaskRows(tasks, updateTasks)}
                <Button outline color='info' className='float-left' onClick={addTask(tasks, updateTasks)}>
                    Add Task
                </Button>
            </Container>
        </FormGroup>
    );
}

export default TaskHolder