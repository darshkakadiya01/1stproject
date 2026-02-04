import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import "./App.css";

function Enroll() {
  const location = useLocation();

  const courseName = location.state?.course || "Weight Loss Course";
  const coursePrice = location.state?.price || "Not Mentioned";

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    mobile: "",
    weight: "",
    email: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const message = `
 *New Course Inquiry - YOGI WELLNESS*

 *Course:* ${courseName}
 *Course Fees:* ${coursePrice}

 *Name:* ${formData.firstName} ${formData.lastName}
 *Mobile:* ${formData.mobile}
 *Current Weight:* ${formData.weight} kg
 *Email:* ${formData.email}
`;

    const whatsappNumber = "919662956478"; 
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappURL, "_blank");
  };

  return (
    <div className="enroll-container">
      <h1>Enroll Now</h1>

      <p className="course-name">
        {courseName} — <strong>{coursePrice}</strong>
      </p>

      <p className="whatsapp-info">
       After you submit this form and send a message on WhatsApp, we will contact you.
      </p>

      <form className="enroll-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          required
          onChange={handleChange}
        />

        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          required
          onChange={handleChange}
        />

        <input
          type="tel"
          name="mobile"
          placeholder="Mobile Number"
          required
          onChange={handleChange}
        />

        <input
          type="number"
          name="weight"
          placeholder="Current Weight (kg)"
          onChange={handleChange}
        />

        <input
          type="email"
          name="email"
          placeholder="Email Address"
          required
          onChange={handleChange}
        />

        <button type="submit">
          Send Details on WhatsApp
        </button>
      </form>
    </div>
  );
}

export default Enroll;
