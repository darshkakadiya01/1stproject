import React from "react";
import "./App.css";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const goToCourses = () => {
    navigate("/courses");
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
          content="Yogi Wellness, Lifestyle management, weight loss rajkot, online weight loss zoom, on-site wellness programs, natural weight loss, healthy lifestyle"
        />

        <meta name="robots" content="index, follow" />
      </head>

      <div className="home-container">
        {/* HERO SECTION */}
        <section className="hero-section">
          <div className="hero-content">
            <h1>YOGI WELLNESS</h1>
            <h2>Transform Your Body, Mind & Life</h2>

            <p>
              YOGI WELLNESS is a holistic weight loss and wellness platform.
              We help people achieve natural, healthy, and sustainable weight
              loss through lifestyle management, mindful living, and expert guidance.
            </p>

            {/* 🔹 NEW IMPORTANT LINE */}
            <p className="service-info">
              <strong>Note:</strong> Our wellness courses and sessions are conducted
              <strong> on-site only</strong>, while weight loss guidance, follow-ups,
              and expert consultations are provided through
              <strong> online Zoom meetings</strong>.
            </p>

            <p className="free-trial-text">
              <strong>1-Day FREE Trial Available</strong> for our weight loss program.
            </p>

            <button className="buy-btn" onClick={goToCourses}>
              Buy Weight Loss Course
            </button>
          </div>

          <div className="hero-image">
            <img
              src="https://images.unsplash.com/photo-1554284126-aa88f22d8b74"
              alt="Lifestyle management Weight Loss"
            />
          </div>
        </section>

        {/* ABOUT SECTION */}
        <section className="about-section">
          <div className="about-image">
            <img
              src="https://images.unsplash.com/photo-1599447421416-3414500d18a5"
              alt="Healthy Lifestyle"
            />
          </div>

          <div className="about-content">
            <h2>About YOGI WELLNESS</h2>

            <p>
              At YOGI WELLNESS, we believe true weight loss comes from balance.
              Our approach focuses on lifestyle transformation, mindful eating,
              and sustainable daily habits.
            </p>

            {/* 🔹 NEW LINE */}
            <p>
              All wellness activities and practical sessions are conducted
              <strong> on-site</strong>, ensuring personalized attention,
              while weight loss education, progress tracking, and expert support
              are delivered conveniently through
              <strong> online Zoom meetings</strong>.
            </p>

            <p>
              Start confidently with our <strong>1-day free trial</strong> before
              enrolling in a complete weight loss course.
            </p>
          </div>
        </section>

        {/* PROGRAMS SECTION */}
        <section className="programs-section">
          <h2>Our Weight Loss Programs</h2>

          <div className="programs">
            <div className="program-card">
              <img
                src="https://images.unsplash.com/photo-1552196563-55cd4e45efb3"
                alt="Weight Loss Program"
              />
              <h3>Weight Loss</h3>
              <p>
                Structured weight loss programs with
                <strong> on-site sessions</strong> and
                <strong> online Zoom-based guidance</strong>.
              </p>
            </div>

            <div className="program-card">
              <img
                src="https://images.unsplash.com/photo-1498837167922-ddd27525d352"
                alt="Nutrition"
              />
              <h3>Healthy Nutrition</h3>
              <p>
                Practical nutrition planning taught on-site,
                with online consultations for continuous support.
              </p>
            </div>

            <div className="program-card">
              <img
                src="https://images.unsplash.com/photo-1518611012118-f0c5b61e0a31"
                alt="Stress Management"
              />
              <h3>Stress Management</h3>
              <p>
                Stress reduction techniques practiced on-site,
                supported by online Zoom guidance.
              </p>
            </div>
          </div>
        </section>

        {/* CTA SECTION */}
        <section className="cta-section">
          <h2>Start Your Weight Loss Journey Today</h2>
          <p>
            Join our <strong>on-site wellness programs</strong> and receive
            expert <strong>online Zoom-based weight loss guidance</strong>.
          </p>

          <button className="buy-btn" onClick={goToCourses}>
            Buy Weight Loss Course
          </button>
        </section>
      </div>
    </>
  );
}

export default Home;
