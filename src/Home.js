import React from "react";
import "./App.css";

function Home() {
  return (
    <div className="home-container">

      {/* HERO SECTION */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>YOGI WELLNESS</h1>
          <h2>Transform Your Body, Mind & Life</h2>

          <p>
            YOGI WELLNESS is a holistic weight loss and wellness platform.
            We help people achieve natural, healthy, and sustainable weight
            loss through yoga, mindful living, and expert guidance.
          </p>

          {/* FREE TRIAL TEXT */}
          <p className="free-trial-text">
            🎉 <strong>Special Offer:</strong> Get a <strong>1-Day FREE Trial</strong> 
            of our weight loss program and experience the transformation yourself.
          </p>

          <button className="buy-btn">
            Buy Weight Loss Course
          </button>
        </div>

        <div className="hero-image">
          <img
            src="https://images.unsplash.com/photo-1554284126-aa88f22d8b74"
            alt="Yoga Weight Loss"
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
            Our approach combines yoga, breathing techniques, mindful eating,
            and lifestyle transformation to help you achieve long-lasting results.
          </p>

          <p>
            To help you start with confidence, we proudly offer a
            <strong> 1-day free trial </strong>
            so you can explore our yoga sessions, weight loss guidance,
            and wellness techniques before enrolling in a full course.
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
              alt="Yoga Program"
            />
            <h3>Yoga Weight Loss</h3>
            <p>
              Scientifically designed yoga routines that help burn fat,
              improve flexibility, and boost metabolism.
            </p>
          </div>

          <div className="program-card">
            <img
              src="https://images.unsplash.com/photo-1498837167922-ddd27525d352"
              alt="Healthy Diet"
            />
            <h3>Healthy Nutrition</h3>
            <p>
              Personalized and easy-to-follow nutrition guidance to support
              natural and sustainable weight loss.
            </p>
          </div>

          <div className="program-card">
            <img
              src="https://images.unsplash.com/photo-1518611012118-f0c5b61e0a31"
              alt="Meditation"
            />
            <h3>Mind & Stress Control</h3>
            <p>
              Meditation and breathing practices to reduce stress, improve sleep,
              and prevent emotional eating.
            </p>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="cta-section">
        <h2>Try YOGI WELLNESS for FREE</h2>
        <p>
          Start with our <strong>1-Day Free Trial</strong> and take the first step
          towards a healthier, happier you.
        </p>
        <button className="buy-btn">
          Start Free Trial
        </button>
      </section>

    </div>
  );
}

export default Home;
