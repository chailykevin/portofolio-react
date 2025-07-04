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
          <ul id="expertises">
            <div className="skill">JAVASCRIPT</div>
            <div className="skill">REACT</div>
            <div className="skill">TAILWIND CSS</div>
          </ul>
        </section>
      </section>
    </article>
  );
}
