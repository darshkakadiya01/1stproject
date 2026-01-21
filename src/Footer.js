import React from "react";
import "./App.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        <div className="footer-box">
          <h2>OM AGRO FOOD</h2>
          <p>
            OM AGRO FOOD is committed to delivering fresh, high-quality mangoes
            and agro products directly from farms, ensuring purity, taste, and
            trust.
          </p>
        </div>

        <div className="footer-box">
          <h3>Contact Us</h3>
          <p><strong>Email:</strong> omagrofood@gmail.com</p>
          <p><strong>Phone:</strong> +91 94090 59003</p>
          <p><strong>Phone:</strong> +91 78638 83934</p>
          <p>
            <strong>Address:</strong>  
            <br />
            OM AGRO FOOD,  
            Rampara, Gir, Gir Somnath,  
            Gujarat, India
          </p>
        </div>

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

      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} OM AGRO FOOD. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
