import React from "react";
import "./App.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        {/* ABOUT SECTION */}
        <div className="footer-box">
          <h2>YOGI WELLNESS</h2>
          <p>
            YOGI WELLNESS is a holistic weight loss and wellness platform
            dedicated to helping people achieve a healthy body and peaceful
            mind. Our programs focus on natural weight loss through yoga,
            mindful living, balanced nutrition, and sustainable lifestyle
            habits for long-term results.
          </p>
        </div>

        {/* CONTACT SECTION */}
        <div className="footer-box">
          <h3>Contact Us</h3>
          <p><strong>Email:</strong> yogiwellness@gmail.com</p>
          <p><strong>Phone:</strong> +91 90333 05019</p>
          <p><strong>Phone:</strong> +91 96629 56478</p>
          <p>
            <strong>Address:</strong>
            <br />
            YOGI WELLNESS  
            <br />
            gel park, street no-2, behind bilipatra prime, aalap royal pam road, bapa sitaram chowk, movdi, Rajkot, 
            Gujarat, India.
          </p>
        </div>

        {/* QUICK LINKS */}
        <div className="footer-box">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/courses">Courses</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact Us</a></li>
          </ul>
        </div>

      </div>

      {/* FOOTER BOTTOM */}
      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} YOGI WELLNESS. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
  