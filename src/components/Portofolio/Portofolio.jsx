import "./Portofolio.css";

import PortoCard from "../PortoCard/PortoCard.jsx";

export default function Portofolio() {
  return (
    <article id="portofolio">
      <h2>Here's my portofolio</h2>
      <div id="portos">
        <PortoCard />
        <PortoCard />
        <PortoCard />
      </div>
    </article>
  );
}
