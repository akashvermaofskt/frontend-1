import React from 'react';
import { Input, Row, Col } from 'reactstrap'

function TaskRow(props) {
    const { task, updateTaskProperty } = props;

    return (
        <Row>
            <Col>
                <Input value={task} onChange={(e) => { updateTaskProperty(e.target.value) }}></Input>
            </Col>
        </Row>
    );
}

export default TaskRow;
