import "./contact.scss";

const Contact = () => {
  return (
    <div className="contact">
      <div className="textContainer">
        <h1>Let's work together</h1>
        <div className="item">
          <h2>Mail</h2>
          <span>dario.bi@vp.pl</span>
        </div>
        <div className="item">
          <h2>Address</h2>
          <span>Strzelce Opolskie</span>
        </div>
        <div className="item">
          <h2>Phone</h2>
          <span>668 398 712</span>
        </div>
      </div>
      <div className="formContainer">
        <form>
          <input type="text" required placeholder="Name" />
          <input type="email" required placeholder="Email" />
          <textarea rows={8} placeholder="Message" />
        </form>
      </div>
    </div>
  );
};

export default Contact;
