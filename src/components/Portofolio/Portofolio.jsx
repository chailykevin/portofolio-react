import "./Portofolio.css";
import portofolioData from "../../data/portofolio.js";

import PortoCard from "../PortoCard/PortoCard.jsx";

export default function Portofolio() {
  return (
    <article id="portofolio">
      <h2>Here's my portofolio</h2>
      <div id="portos">
        {portofolioData.map((portofolio) => {
          return (
            <PortoCard
              key={portofolio.id}
              title={portofolio.projectTitle}
              description={portofolio.projectDescription}
              imgSrc={portofolio.projectImg}
              projectLink={portofolio.projectLink}
            />
          );
        })}
      </div>
    </article>
  );
}
