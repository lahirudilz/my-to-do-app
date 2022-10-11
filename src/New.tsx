import { Button, Input, Layout } from "antd";
import { Header, Content, Footer } from "antd/lib/layout/layout";
import React, { FC, useState, ChangeEvent } from "react";
import TodoTask from "./Components/ToDoTask";
import { ITask } from "./Interfaces";

const New: React.FC = () => {
  const [task, setTask] = useState<string>("");
  const [deadLine, setDeadLine] = useState<number>(0);
  const [todo, setTodo] = useState<ITask[]>([]);

  <div className="App"></div>;

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.name === "task") {
      setTask(event.target.value);
    } else {
      setDeadLine(Number(event.target.value));
    }
  };

  const addTask = () => {
    const newTask = {
      taskName: task,
      deadLine: deadLine,
    };
    setTodo([...todo, newTask]);
    setTask("");
    setDeadLine(0);
  };

  const completeTask = (taskNameToDelete: string) => {
    setTodo(
      todo.filter((task) => {
        return task.taskName != taskNameToDelete;
      })
    );
  };

  return (
    <Layout>
      <Header
        style={{ fontFamily: "sans-serif", fontSize: "30px", color: "white" }}
      >
        TO-DO APP
      </Header>
      <Content>
        <div className="App">
          <div className="header">
            <div className="inputContainer">
              <div>
                <Input
                  style={{ width: 500, margin: "10px" }}
                  type="text"
                  name="task"
                  placeholder="Add a task"
                  value={task}
                  onChange={handleChange}
                />
              </div>
              <Input
                style={{ width: 500, marginBottom: "5px" }}
                type="Number"
                name="deadline"
                placeholder="Set a deadline(in days)"
                value={deadLine}
                onChange={handleChange}
              />
            </div>
            <Button type="primary" onClick={addTask}>
              Add
            </Button>
          </div>
          <div className="todoList">
            {todo.map((task: ITask, key: number) => {
              return (
                <TodoTask task={task} key={key} completeTask={completeTask} />
              );
            })}
          </div>
        </div>
      </Content>
    </Layout>
  );
};

export default New;
