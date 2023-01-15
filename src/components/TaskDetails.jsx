import React from "react";
import { useParams } from "react-router-dom";

import Button from "./Button";

import "./TaskDetails.css";

const TaskDetails = () => {
  const params = useParams();

  return (
    <div>
      <div className="back-button-container">
        <Button>Voltar</Button>
      </div>
      <div className="task-details-container">
        <h2>{params.taskTitle}</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
          soluta voluptates enim, harum sed deleniti.
        </p>
      </div>
    </div>
  );
};

export default TaskDetails;
