import React from "react";
import { Button, Table } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { taskSwitch } from "./taskAction";
import { setItemToDelete } from "./taskSlice";

export const Tasklists = ({}) => {
  const dispatch = useDispatch();
  const { taskLists, itemToDelete } = useSelector((state) => state.task);

  return (
    <>
      <h2>Task List</h2>
      <Table striped bordered hover variant="dark" size="sm">
        <thead>
          <tr>
            <th>Task</th>
            <th>Hours</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {taskLists?.map((row, i) => (
            <tr key={row._id}>
              <td>
                <input
                  type="checkbox"
                  defaultValue={row._id}
                  onChange={(e) => dispatch(setItemToDelete(e.target))}
                  checked={itemToDelete.includes(row._id)}
                />{" "}
                <label htmlFor="">{row?.title}</label>
              </td>
              <td>{row?.hr}</td>
              <td>
                <Button
                  onClick={() =>
                    dispatch(taskSwitch({ _id: row._id, todo: false }))
                  }
                >
                  Mark as not to do
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};
