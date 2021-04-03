import React from "react";
import { Card, Button, Table, Alert } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { taskSwitch } from "./taskAction";
import { setItemToDelete } from "./taskSlice";

export const Nottodolist = ({}) => {
  const dispatch = useDispatch();
  const { notToDoList, itemToDelete } = useSelector((state) => state.task);

  const totalSavedTime = notToDoList.reduce(
    (subTotal, row) => subTotal + row.hr,
    0
  );

  return (
    <>
      <h2>Not To Do List</h2>
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>Task</th>
            <th>Hours</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {notToDoList?.map((row, i) => (
            <tr key={i}>
              <td>
                <input
                  type="checkbox"
                  defaultValue={row._id}
                  onChange={(e) => dispatch(setItemToDelete(e.target))}
                  checked={itemToDelete.includes(row._id)}
                />
                {""}
                <label htmlFor="">{row?.title}</label>
              </td>
              <td>{row?.hr}</td>
              <td>
                <Button
                  onClick={() =>
                    dispatch(taskSwitch({ _id: row._id, todo: true }))
                  }
                >
                  Mark as To Do
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <Alert variant="success">
        <Alert.Heading>You just saved {totalSavedTime}hrs</Alert.Heading>
      </Alert>
    </>
  );
};
