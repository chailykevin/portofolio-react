import "./Contact.css";

export default function Contact() {
  function handleFormSubmit(e) {
    e.preventDefault();
    alert("This contact form feature is not implemented yet.");
  }

  return (
    <article id="contact">
      <h2>Contact Me!</h2>
      <form action="">
        <div className="inputContainer">
          <label htmlFor="">Name</label>
          <input type="text" placeholder="Your name" name="name" />
        </div>
        <div className="inputContainer">
          <label htmlFor="">Email</label>
          <input type="text" placeholder="Your email" name="email" />
        </div>
        <div className="inputContainer">
          <label htmlFor="">Message</label>
          <textarea name="message" placeholder="Your message"></textarea>
        </div>

        <button type="button" onClick={handleFormSubmit}>
          Send
        </button>
      </form>
    </article>
  );
}
