import "./feedback.scss";
import TaskVote from "../task-vote/taskVote";

function Feedback(){
  return(
    <div className="feedback">
      <div className="feedback__holder">
        <TaskVote />

      <div className="feedback-holder__wrapper">
        <h4 className="feedback__title">
           Add tags for solutions
        </h4>

        <p className="feedback__desc">
        It would help people with light sensitivities and who prefer dark mode.
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi, dolor.
        </p>

        <span className="feedback__feature">Enhancement</span>
      </div>
      
      </div>

      <div className="feedback__comment">
        <span className="feedback-comment__number">3</span>
      </div>
    </div>
  );
}

export default Feedback;