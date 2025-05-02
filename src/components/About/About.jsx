import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCss3Alt,
  faHtml5,
  faJs,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import "./About.css";

export default function About() {
  return (
    <article id="about">
      <h2>Want to know more about me?</h2>
      <section id="information">
        <section id="about-me">
          <p>
            I'm currently a semester 6 student at Widya Dharma Pontianak
            University, majoring in Informatics. So far, my journey about diving
            into programming has been exciting, and I'm excited to continue
            growing my skills and knowledge.
          </p>
          <p>
            I have a strong interest in web development and have been improving
            my skills in HTML, CSS, JavaScript, and React JS. I enjoy the
            creative and problem-solving aspects of building websites.
          </p>
        </section>
        <section id="expertise">
          <h3>My Expertise</h3>
          <ul>
            <li>
              <div id="html" className="icon">
                <FontAwesomeIcon icon={faHtml5} />
              </div>
            </li>
            <li>
              <div id="css" className="icon">
                <FontAwesomeIcon icon={faCss3Alt} />
              </div>
            </li>
            <li>
              <div id="javascript" className="icon">
                <FontAwesomeIcon icon={faJs} />
              </div>
            </li>
            <li>
              <div id="react" className="icon">
                <FontAwesomeIcon icon={faReact} />
              </div>
            </li>
          </ul>
        </section>
      </section>
    </article>
  );
}
