import "./Contact.css";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

function Contact() {
  return (
    <section className="contact" id="contact">

      <div className="contact-left">

        <span>CONTACT ME</span>

        <h1>Get In Touch</h1>

        <p>
          Have a project in mind or want to work together?
          Feel free to send me a message.
        </p>

        <div className="contact-info">

          <div className="contact-item">
            <FaEnvelope />
            <p>raniarji@gmail.com</p>
          </div>

          <div className="contact-item">
            <FaPhoneAlt />
            <p>+91 9908642697</p>
          </div>

          <div className="contact-item">
            <FaMapMarkerAlt />
            <p>India</p>
          </div>

        </div>

      </div>

      <div className="contact-right">

        <form className="contact-form">

          <div className="input-row">
            <input type="text" placeholder="Your Name" />
            <input type="email" placeholder="Your Email" />
          </div>

          <input type="text" placeholder="Subject" />

          <textarea placeholder="Your Message"></textarea>

          <button type="submit">Send Message</button>

        </form>

      </div>

    </section>
  );
}

export default Contact;