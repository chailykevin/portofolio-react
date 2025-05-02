import "./PortoCard.css";
import questionMark from "../../assets/questionmark.png";

export default function PortoCard() {
  return (
    <>
      <div className="porto">
        <div className="porto-image">
          <img src={questionMark} alt="" />
        </div>
        <div className="portoInformation">
          <h3>Future project title</h3>
          <p>Project description</p>
          <a href="#">View Project</a>
        </div>
      </div>
    </>
  );
}
