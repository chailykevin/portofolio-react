import "./Home.css";
import fotoKevin from "/fotoKevin.jpeg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

export default function Home() {
  return (
    <article id="home">
      <section>
        <h2>Hi there, I'm</h2>
        <h1>Kevin Chaily</h1>
        <h2>Aspiring Web Developer</h2>
        <p>
          I'm passionate about web development and currently learning into the
          world of web development. My dream is to be a skilled web developer!
        </p>
        <p>Let's connect! You can find me on these social medias.</p>
        <div id="social-medias">
          <div id="instragram" className="icon">
            <a
              href="https://www.instagram.com/kefinchai_/"
              target="_blank"
              className="social-media"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </div>
          <div id="linkedin" className="icon">
            <a
              href="https://www.linkedin.com/in/kevinchaily"
              target="_blank"
              className="social-media"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </div>
          <div id="github" className="icon">
            <a
              href="https://github.com/chailykevin"
              target="_blank"
              className="social-media"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </div>
        </div>
      </section>
      <aside id="photo">
        <img src={fotoKevin} alt="Foto" />
      </aside>
    </article>
  );
}
