import React, { Fragment, useState } from "react";
import Card from "../components/Card";
import Button from "../components/Button";
import { talkData } from "../data/talk";
import "../style/styles.css";

export default function Home() {
  const [taskData, setTaskData] = useState(talkData);

  const [taskList, setTaskList] = useState([]);
  const [taskTitleInput, setTaskTitleInput] = useState("");
  const [taskListInput, setTaskListInput] = useState("");
  return (
    <div className="home">
      {/* <h1 className="title">Make Your Task Now !</h1> */}
      <aside className="new-task" style={{ position: "relative" }}>
        <h1>Make Your New Task</h1>
        <input
          type="text"
          placeholder="input your title here"
          onChange={e => setTaskTitleInput(e.target.value)}
          value={taskTitleInput}
        ></input>
        <input
          id="task-input"
          type="text"
          placeholder="input your task here"
          onChange={e => {
            if (e.target.style.borderColor === "red") {
              e.target.style.border = "solid 1px #aaa";
            }
            setTaskListInput(e.target.value);
          }}
          value={taskListInput}
        ></input>
        <Button
          onClick={() => {
            if (taskListInput === "") {
              const taskInput = document.getElementById("task-input");
              taskInput.style.border = "1px solid red";
              taskInput.style.borderRadius = "3px";
              taskInput.style.padding = "7.5px";
            } else {
              setTaskList([...taskList, taskListInput]);
              return setTaskListInput("");
            }
          }}
        >
          +
        </Button>
        {taskList.length > 0 && (
          <ol className="new-list-container">
            {taskList.map((task, i) => (
              <li className="new-list" key={i}>
                {task}
              </li>
            ))}
          </ol>
        )}
        <Button
          onClick={() => {
            setTaskData([
              {
                taskId: taskData.length + 1,
                title: taskTitleInput,
                task: taskList
              },
              ...taskData
            ]);

            setTaskTitleInput("");
            setTaskList([]);
            setTaskListInput("");
          }}
          style={{ position: "absolute", bottom: 10, left: 20 }}
          disabled={!taskList.length > 0 || !taskTitleInput.length > 0}
        >
          Add New Task
        </Button>
      </aside>
      <main className="task-container">
        {taskData.map(
          (
            { img, title, fullname, time, mainTalk, comment, retweet, like },
            i
          ) => (
            <Card
              title={title}
              fullname={fullname}
              time={time}
              mainTalk={mainTalk}
              comment={comment}
              retweet={retweet}
              like={like}
            />
          )
        )}
      </main>
    </div>
  );
}
