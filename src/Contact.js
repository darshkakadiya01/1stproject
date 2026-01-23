import React, { useRef } from "react";
import emailjs from "emailjs-com";
import "./App.css";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_kyp8cjh",  
        "template_4t8r84a",  
        form.current,
        "e4cj_ZrXDDyLp2e0C"    
      )
      .then(
        (result) => {
          alert("Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          alert("Failed to send message. Try again!");
          console.log(error.text);
        }
      );
  };

  return (
    <>
    <div className="contact-page">
      <div className="contact-overlay">
        <div className="contact-container">
          <h1>Contact Us</h1>
          <p>
            Get in touch with YOGI WELLNESS for inquiries or
            support. We’d love to hear from you.
          </p>

          <form ref={form} onSubmit={sendEmail} className="contact-form">
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
              />
            </div>

            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
              />
            </div>

            <div className="form-group">
              <input
                type="text"
                name="subject"
                placeholder="Subject"
              />
            </div>

            <div className="form-group">
              <textarea
                name="message"
                placeholder="Your Message"
                rows="4"
                required
              ></textarea>
            </div>

            <button type="submit" className="contact-btn">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
    </>
  );
};

export default Contact;
