import "./PortoCard.css";
import questionMark from "/questionmark.png";

export default function PortoCard({
  title,
  description,
  imgSrc = "",
  projectLink,
}) {
  function handleClick(projectLink) {
    if (projectLink === "") {
      alert("The portofolio isn't available online.");
    } else {
      window.open(projectLink, "_blank");
    }
  }

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
          <a onClick={() => handleClick(projectLink)}>View Project</a>
        </div>
      </div>
    </>
  );
}
