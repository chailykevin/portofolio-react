import "./PortoCard.css";
import questionMark from "../../assets/questionmark.png";

export default function PortoCard({ title, description, imgSrc = "" }) {
  function handleClick() {
    alert("The portofolio isn't available online.");
  }

  console.log(imgSrc);

  return (
    <>
      <div className="porto">
        <div className="porto-image">
          <img src={imgSrc === "" ? questionMark : imgSrc} alt="" />
        </div>
        <div className="portoInformation">
          <h4>{title === "" ? "Future project title" : title}</h4>
          <p className="description">
            {description === "" ? "Future project description" : description}
          </p>
          <a onClick={handleClick}>View Project</a>
        </div>
      </div>
    </>
  );
}
