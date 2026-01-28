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

    <head>
        <title>YOGI WELLNESS | Natural Weight Loss & Lifestyle Management</title>

        <meta
          name="description"
          content="YOGI WELLNESS offers natural weight loss through lifestyle management, mindful living, nutrition guidance, and stress management. On-site wellness services and online Zoom-based weight loss guidance available."
        />

        <meta
          name="keywords"
          content="Yogi Wellness, Online dietitian consultation free, Contact, Contact for weight loss, wellness programs, wellness programs in rajkot, Yogi Wellness weight loss programs, Lifestyle management, weight loss rajkot, online weight loss zoom, on-site wellness programs, natural weight loss, healthy lifestyle"
        />

        <meta name="robots" content="index, follow" />

        <meta property="og:title" content="YOGI WELLNESS | Natural Weight Loss Programs" />
        <meta
          property="og:description"
          content="Transform your body, mind, and life with YOGI WELLNESS. Join our YOGI WELLNESS and lifestyle-based weight loss programs."
        />
        <meta property="og:type" content="website" />
        <link rel="icon" type="image/png" href="%PUBLIC_URL%/favicon-yogiwellness.png" sizes="48x48" />
        <link rel="icon" type="image/png" href="%PUBLIC_URL%/favicon-yogiwellness.png" sizes="96x96" />
        <link rel="icon" type="image/png" href="%PUBLIC_URL%/favicon-yogiwellness.png" sizes="192x192" />
        <link rel="shortcut icon" type="image/png" href="%PUBLIC_URL%/favicon-yogiwellness.png" />
        <link rel="apple-touch-icon" type="image/png" href="%PUBLIC_URL%/favicon-yogiwellness.png" />
        <meta property="og:title" content="YOGI WELLNESS | Natural Weight Loss & Lifestyle Management" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yogiwellness.vercel.app/" />
        <meta
          property="og:image"
          content="https://yogiwellness.vercel.app/favicon-yogiwellness.png"
        />
        <meta property="og:url" content="https://yogiwellness.vercel.app/" />
        <meta
          property="og:image"
          content="https://images.unsplash.com/photo-1554284126-aa88f22d8b74"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="YOGI WELLNESS | Weight Loss & Wellness" />
        <meta
          name="twitter:description"
          content="Healthy and sustainable weight loss through lifestyle management and mindful living."
        />
        <meta
          name="twitter:image"
          content="https://images.unsplash.com/photo-1554284126-aa88f22d8b74"
        />
      </head>

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
