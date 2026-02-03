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
    <>
    <head>
        <title>YOGI WELLNESS | Natural Weight Loss & Lifestyle Management</title>

        <meta
          name="description"
          content="YOGI WELLNESS offers natural weight loss through lifestyle management, mindful living, nutrition guidance, and stress management. On-site wellness services and online Zoom-based weight loss guidance available."
        />

        <meta
          name="keywords"
          content="Yogi Wellness, weight loss programs in rajkot, Courses, Weight loss course online free, weight loss course, weight loss website, 7-day diet plan for weight loss, weight loss diet plan, Online weight loss Classes near me, Best online weight loss course, free weight loss trial in rajkot, Weight loss course india, Weight loss course near me, Lifestyle management, FREE weight loss tips, Online weight loss classes India, Weight loss classes for women, Weight management courses for health professionals, Yogi Wellness Courses, wellness programs Courses, wellness programs in rajkot, Yogi Wellness weight loss programs, Lifestyle management, weight loss rajkot, online weight loss zoom, on-site wellness programs, natural weight loss, healthy lifestyle"
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
      

    <div className="courses-page">

      <section className="courses-hero">
        <h1>YOGI WELLNESS Weight Loss Courses</h1>
        <p>
          Lifestyle management-based weight loss programs designed for real people,
          real bodies, and real results.
        </p>

        <p className="info-line">
          After you submit the form and send a WhatsApp message, we will contact you.
        </p>
      </section>

      <section className="free-trial">
        <div className="free-trial-content">
          <h2> 1-Day FREE Weight Loss Trial</h2>

          <p className="trial-intro">
            Not sure which program is right for you? Start with our
            <strong> 1-Day FREE Weight Loss Trial</strong> and experience
            the YOGI WELLNESS approach without any commitment.
          </p>

          <p>
            This trial is specially designed for beginners to understand
            how Lifestyle management, breathing techniques, and mindful lifestyle habits
            work together to support natural weight loss.
          </p>

          <ul className="trial-points">
            <li> Breathing techniques for fat burn & digestion</li>
            <li> Simple meditation for stress & emotional eating</li>
            <li> Basic daily diet & lifestyle tips</li>
            <li> WhatsApp guidance for the trial day</li>
          </ul>

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
            alt="Free Lifestyle management Trial"
          />
        </div>
      </section>

      <section className="courses-section">

        {/* COURSE 1 */}
        <div className="course-box">
          <img
            src="https://images.unsplash.com/photo-1549576490-b0b4831ef60a"
            alt="Beginner Lifestyle management"
          />

          <div className="course-info">
            <h2>Beginner Weight Loss Program</h2>
            <p className="course-desc">
              Perfect for beginners and people restarting their fitness journey.
              Learn basic Lifestyle management postures, breathing exercises, and daily routines
              to start losing weight safely.
            </p>

            <ul>
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
            alt="Advanced Lifestyle management"
          />

          <div className="course-info">
            <span className="badge">Most Popular</span>
            <h2>Advanced Weight Loss Program</h2>
            <p className="course-desc">
              Designed for faster fat loss using advanced Lifestyle management flows,
              metabolism-boosting routines, meditation, and nutrition tips.
            </p>

            <ul>
              <li>✔ Advanced fat-burning </li>
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
            src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b"
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
    </>
  );
}

export default Courses;
