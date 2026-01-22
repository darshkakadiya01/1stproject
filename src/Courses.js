import React from "react";
import "./App.css";
import { useNavigate } from "react-router-dom";

function Courses() {
  const navigate = useNavigate();

  const enrollCourse = (courseName, price) => {
    navigate("/enroll", {
      state: {
        course: courseName,
        price: price,
      },
    });
  };

  return (
    <div className="courses-container">

      {/* HEADER */}
      <section className="courses-header">
        <h1>Our Weight Loss Courses</h1>

        <p>
          Choose the right weight loss program from YOGI WELLNESS
          and start your healthy lifestyle today.
        </p>

        {/* GREEN INFO LINE */}
        <p style={{ color: "green", fontWeight: "bold", marginTop: "10px" }}>
          After you submit this form and send a message on WhatsApp, we will contact you.
        </p>
      </section>

      {/* FREE TRIAL SECTION */}
      <section style={{ textAlign: "center", marginBottom: "40px" }}>
        <h2 style={{ color: "#157402" }}>
          🎉 Try 1 Day Free Trial Weight Loss Course
        </h2>
        <p>
          Experience our yoga-based weight loss program for <strong>FREE</strong>
          before joining a full course.
        </p>

        <button
          style={{
            backgroundColor: "#157402",
            color: "white",
            padding: "12px 30px",
            fontSize: "16px",
            border: "none",
            borderRadius: "25px",
            cursor: "pointer",
            marginTop: "10px",
          }}
          onClick={() =>
            enrollCourse("1 Day Free Trial Weight Loss Course", "FREE")
          }
        >
          Try Free Trial (1 Day)
        </button>
      </section>

      {/* COURSES LIST */}
      <section className="courses-list">

        {/* COURSE 1 */}
        <div className="course-card">
          <h2>Beginner Weight Loss Program</h2>
          <p className="course-desc">
            Ideal for beginners. Basic yoga, breathing exercises,
            and simple routines to start weight loss safely.
          </p>
          <p className="course-price">₹1,999</p>
          <button
            onClick={() =>
              enrollCourse("Beginner Weight Loss Program", "₹1,999")
            }
          >
            Buy Course
          </button>
        </div>

        {/* COURSE 2 */}
        <div className="course-card popular">
          <span className="badge">Most Popular</span>
          <h2>Advanced Weight Loss Program</h2>
          <p className="course-desc">
            Advanced yoga, fat-burning workouts, meditation,
            and nutrition guidance for fast results.
          </p>
          <p className="course-price">₹3,999</p>
          <button
            onClick={() =>
              enrollCourse("Advanced Weight Loss Program", "₹3,999")
            }
          >
            Buy Course
          </button>
        </div>

        {/* COURSE 3 */}
        <div className="course-card">
          <h2>Premium Wellness Program</h2>
          <p className="course-desc">
            Complete transformation with personal guidance,
            stress control, nutrition planning, and lifetime access.
          </p>
          <p className="course-price">₹6,999</p>
          <button
            onClick={() =>
              enrollCourse("Premium Wellness Program", "₹6,999")
            }
          >
            Buy Course
          </button>
        </div>

      </section>

    </div>
  );
}

export default Courses;
