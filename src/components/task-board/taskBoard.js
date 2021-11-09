import "./taskBoard.scss"
import Feedback from "../feedback/feedback";

function TaskBoard(){
  return(
    <div className="taskboard">
      <Feedback />
      <Feedback />
      <Feedback />
      <Feedback />
    </div>
  );
}

export default TaskBoard;