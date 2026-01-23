import React from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";

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
    <div className="courses-page">

      {/* HERO */}
      <section className="courses-hero">
        <h1>YOGI WELLNESS Weight Loss Courses</h1>
        <p>
          Yoga-based weight loss programs designed for real people,
          real bodies, and real results.
        </p>

        <p className="info-line">
          After you submit the form and send a WhatsApp message, we will contact you.
        </p>
      </section>

      {/* FREE TRIAL */}
      <section className="free-trial">
        <div className="free-trial-content">
          <h2>🎉 1-Day FREE Weight Loss Trial</h2>

          <p className="trial-intro">
            Not sure which program is right for you? Start with our
            <strong> 1-Day FREE Weight Loss Trial</strong> and experience
            the YOGI WELLNESS approach without any commitment.
          </p>

          <p>
            This trial is specially designed for beginners to understand
            how yoga, breathing techniques, and mindful lifestyle habits
            work together to support natural weight loss.
          </p>

          <ul className="trial-points">
            <li>🧘‍♂️ Live or guided yoga session (beginner-friendly)</li>
            <li>🌿 Breathing techniques for fat burn & digestion</li>
            <li>🧠 Simple meditation for stress & emotional eating</li>
            <li>🥗 Basic daily diet & lifestyle tips</li>
            <li>💬 WhatsApp guidance for the trial day</li>
          </ul>

          <p className="trial-note">
            ✔️ No payment required • ❌ No credit card needed • 💯 No obligation
          </p>

          <button
            className="buy-btn"
            onClick={() =>
              enrollCourse("1-Day Free Trial Weight Loss Course", "FREE")
            }
          >
            Try Free Trial (1 Day)
          </button>
        </div>

        <div className="free-trial-image">
          <img
            src="https://images.unsplash.com/photo-1506126613408-eca07ce68773"
            alt="Free Yoga Trial"
          />
        </div>
      </section>


      {/* COURSES */}
      <section className="courses-section">

        {/* COURSE 1 */}
        <div className="course-box">
          <img
            src="https://images.unsplash.com/photo-1549576490-b0b4831ef60a"
            alt="Beginner Yoga"
          />

          <div className="course-info">
            <h2>Beginner Weight Loss Program</h2>
            <p className="course-desc">
              Perfect for beginners and people restarting their fitness journey.
              Learn basic yoga postures, breathing exercises, and daily routines
              to start losing weight safely.
            </p>

            <ul>
              <li>✔ Easy yoga sessions (20–30 min)</li>
              <li>✔ Fat loss & digestion improvement</li>
              <li>✔ Beginner-friendly guidance</li>
              <li>✔ WhatsApp support</li>
            </ul>

            <div className="course-footer">
              <span className="price">₹1,999</span>
              <button
                onClick={() =>
                  enrollCourse("Beginner Weight Loss Program", "₹1,999")
                }
              >
                Buy Course
              </button>
            </div>
          </div>
        </div>

        {/* COURSE 2 */}
        <div className="course-box highlight">
          <img
            src="https://images.unsplash.com/photo-1554284126-aa88f22d8b74"
            alt="Advanced Yoga"
          />

          <div className="course-info">
            <span className="badge">Most Popular</span>
            <h2>Advanced Weight Loss Program</h2>
            <p className="course-desc">
              Designed for faster fat loss using advanced yoga flows,
              metabolism-boosting routines, meditation, and nutrition tips.
            </p>

            <ul>
              <li>✔ Advanced fat-burning yoga</li>
              <li>✔ Belly & thigh fat focus</li>
              <li>✔ Stress & emotional eating control</li>
              <li>✔ Diet & lifestyle guidance</li>
            </ul>

            <div className="course-footer">
              <span className="price">₹3,999</span>
              <button
                onClick={() =>
                  enrollCourse("Advanced Weight Loss Program", "₹3,999")
                }
              >
                Buy Course
              </button>
            </div>
          </div>
        </div>

        {/* COURSE 3 */}
        <div className="course-box">
          <img
            src="https://images.unsplash.com/photo-1594737625785-c1b5d4a04e14"
            alt="Wellness Program"
          />

          <div className="course-info">
            <h2>Premium Wellness Transformation</h2>
            <p className="course-desc">
              A complete body & mind transformation program with
              personalized guidance, stress management, and long-term support.
            </p>

            <ul>
              <li>✔ Complete wellness plan</li>
              <li>✔ Personalized guidance</li>
              <li>✔ Meditation & mindfulness</li>
              <li>✔ Lifetime access</li>
            </ul>

            <div className="course-footer">
              <span className="price">₹6,999</span>
              <button
                onClick={() =>
                  enrollCourse("Premium Wellness Program", "₹6,999")
                }
              >
                Buy Course
              </button>
            </div>
          </div>
        </div>

      </section>

    </div>
  );
}

export default Courses;
