import React from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";

function About() {
  const navigate = useNavigate();

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
          content="Yogi Wellness, about weight loss,  wellness programs, FREE weight loss tips, About weight loss course, weight loss course, weight loss programs in rajkot, free weight loss trial in rajkot, Yogi Wellness weight loss programs, Lifestyle management, weight loss website, 7-day diet plan for weight loss, weight loss diet plan,   weight loss rajkot, online weight loss zoom, on-site wellness programs, weight loss programs in rajkot, natural weight loss, Lifestyle management, healthy lifestyle"
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
   
    <div className="about-page">

      <section className="about-hero">
        <div className="about-hero-content">
          <h1>About YOGI WELLNESS</h1>
          <p>
            YOGI WELLNESS helps you lose weight naturally using Lifestyle management,
            mindful living, and sustainable lifestyle changes.
          </p>

          <button className="buy-btn" onClick={() => navigate("/courses")}>
            Buy Weight Loss Course
          </button>
        </div>

        <div className="about-hero-image">
          <img
            src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b"
            alt="Lifestyle management Wellness"
          />
        </div>
      </section>

      <section className="why-new">
        <div className="why-left">
          <h2>Why Choose YOGI WELLNESS?</h2>
          <p>
            We don’t believe in shortcuts. Our programs are designed
            to transform your body and mind together — safely and naturally.
          </p>

          <p>
            Whether you are a beginner or restarting your fitness journey,
            YOGI WELLNESS supports you at every step.
          </p>

          <button className="buy-btn secondary" onClick={() => navigate("/courses")}>
            Explore Courses
          </button>
        </div>

        <div className="why-right">
          <div className="why-item">
            <span>🧘‍♂️</span>
            <div>
              <h3>Lifestyle management-Based Fat Loss</h3>
              <p>
                Special Lifestyle management flows that target belly fat, improve digestion,
                and increase metabolism.
              </p>
            </div>
          </div>

          <div className="why-item">
            <span>🥗</span>
            <div>
              <h3>Simple Indian Diet</h3>
              <p>
                No strict dieting. Easy, home-style nutrition plans
                that fit your daily routine.
              </p>
            </div>
          </div>

          <div className="why-item">
            <span>🧠</span>
            <div>
              <h3>Mind & Stress Control</h3>
              <p>
                Meditation and breathing techniques to reduce stress
                and emotional eating.
              </p>
            </div>
          </div>

          <div className="why-item">
            <span>⏱️</span>
            <div>
              <h3>Beginner Friendly</h3>
              <p>
                Short, effective sessions suitable for all age groups
                and fitness levels.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="about-cta">
        <h2>Start Your Healthy Weight Loss Journey</h2>
        <p>Try our 1-Day FREE Trial or enroll in a full program today.</p>

        <div className="cta-buttons">
          <button className="buy-btn" onClick={() => navigate("/courses")}>
            Buy Beginner Course
          </button>

          <button className="buy-btn outline" onClick={() => navigate("/courses")}>
            Try Free Trial
          </button>
        </div>
      </section>

    </div>
     </>
  );
}

export default About;
