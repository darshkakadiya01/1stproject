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
          content="YOGI WELLNESS offers natural weight loss through lifestyle management, mindful living, nutrition guidance, and stress management. Try our 1-Day FREE weight loss trial today."
        />

        <meta
          name="keywords"
          content="Yogi Wellness, Lifestyle management, Lifestyle management weight loss, weight loss, Weight loss rajkot price, Best weight loss rajkot, Female weight loss rajkot, Bariatric surgery rajkot, Weight loss rajkot reviews, Weight loss doctor in Rajkot, weight loss tips, weight loss rajkot, weight loss gujarat, lifestyle management, natural weight loss, healthy lifestyle, mindful living, stress management, weight loss program India"
        />

        <meta name="robots" content="index, follow" />

        <meta property="og:title" content="YOGI WELLNESS | Natural Weight Loss Programs" />
        <meta
          property="og:description"
          content="Transform your body, mind, and life with YOGI WELLNESS. Join our YOGI WELLNESS and lifestyle-based weight loss programs."
        />
        <meta property="og:type" content="website" />
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

    <div className="home-container">
      <section className="hero-section">
        <div className="hero-content">
          <h1>YOGI WELLNESS</h1>
          <h2>Transform Your Body, Mind & Life</h2>

          <p>
            YOGI WELLNESS is a holistic weight loss and wellness platform.
            We help people achieve natural, healthy, and sustainable weight
            loss through Lifestyle management, mindful living, and expert guidance.
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
            Our approach combines, mindful eating, and lifestyle
            transformation to help you achieve long-lasting results.
          </p>

          <p>
            Start confidently with our <strong>1-day free trial</strong> before
            enrolling in a complete weight loss course.
          </p>
        </div>
      </section>

      <section className="programs-section">
        <h2>Our Weight Loss Programs</h2>

        <div className="programs">
          <div className="program-card">
            <img
              src="https://images.unsplash.com/photo-1552196563-55cd4e45efb3"
              alt="Lifestyle management Program"
            />
            <h3>Weight Loss</h3>
            <p>
              Weight Loss routines designed to burn fat and improve metabolism.
            </p>
          </div>

          <div className="program-card">
            <img
              src="https://images.unsplash.com/photo-1498837167922-ddd27525d352"
              alt="Nutrition"
            />
            <h3>Healthy Nutrition</h3>
            <p>
              Simple nutrition guidance for sustainable weight loss.
            </p>
          </div>

          <div className="program-card">
            <img
              src="https://images.unsplash.com/photo-1518611012118-f0c5b61e0a31"
              alt="Meditation"
            />
            <h3>Stress Management</h3>
            <p>
              Meditation techniques to reduce stress and emotional eating.
            </p>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <h2>Start Your Weight Loss Journey Today</h2>
        <p>
          Try our <strong>1-Day FREE Trial</strong> or enroll in the full course now.
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
