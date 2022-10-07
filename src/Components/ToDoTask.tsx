import { Button } from "antd";
import React from "react";
import { ITask } from "../Interfaces";

interface Props {
  task: ITask;
  completeTask(taskNameToDelete: string): void;
}

const TodoTask = ({ task, completeTask }: Props) => {
  return (
    <div className="task">
      <ul></ul>
      <div className="todoList">
        <span>{task.taskName}</span>
        <span>{" - " + task.deadLine + "d   "}</span>
        <Button
          type="primary"
          danger
          size="small"
          onClick={() => {
            completeTask(task.taskName);
          }}
        >
          X
        </Button>
      </div>
    </div>
  );
};

export default TodoTask;
