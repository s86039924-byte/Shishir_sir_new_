import React from "react";
import "./home.css";

const IitsfHome: React.FC = () => {
  const testimonialImages = ["1.jpeg", "2.jpeg", "3.jpeg", "4.jpeg", "5.jpeg", "6.jpeg"];

  return (
    <div className="homePage page">
      <main className="main">
        {/* HERO */}
        <section className="heroSection">
          <div className="heroCard">
            <div className="heroBg">
              <div className="heroOverlay" />
            </div>

            <div className="heroContent">
              <p className="heroInstitute">IIT Study Forum</p>

              <h1 className="heroTitle">
                ...Beyond the horizon{" "}
                <span className="heroTitleHighlight">Of Thoughts</span>
              </h1>

              <p className="heroDesc">
                Expert guidance for IIT-JEE Main &amp; Advanced. Join the legacy
                of excellence today with personalized mentorship.
              </p>

              <div className="heroActions">
                <button className="btn btnAccent btnLarge">
                  Enroll Now
                  <span className="material-symbols-outlined iconSm">
                    arrow_forward
                  </span>
                </button>

                <a className="btn btnGhost btnLarge" href="#/testimonials">
                  <span className="material-symbols-outlined iconSm">
                    play_circle
                  </span>
                  Watch Success Stories
                </a>
              </div>

              <div className="heroStats">
                <div className="stat">
                  <p className="statValue">12k+</p>
                  <p className="statLabel">Students Mentored</p>
                </div>

                <div className="statDivider" />

                <div className="stat">
                  <p className="statValue">450+</p>
                  <p className="statLabel">IIT Selections</p>
                </div>
              </div>
            </div>

            <div className="heroRightVisual" aria-hidden="true">
              <img className="heroRightImage" src="/logo/home_.jpg" alt="" />
            </div>
          </div>
        </section>

        {/* EXCELLENCE + WHY */}
        <section className="section">
          <div className="container">
            <div className="grid12">
              {/* Left */}
              <div className="col4">
                <div className="sectionHeadRow">
                  <div className="badgeIcon">
                    <span className="material-symbols-outlined">emoji_events</span>
                  </div>
                  <h2 className="h2">Legacy of Excellence</h2>
                </div>

                <div className="rankCard">
                  <div className="rankAvatar">
                    <img
                      alt="Result card of Ankit Aggarwal"
                      src="/testimonila_image/Ankit Aggarwal AIR 22.jpeg"
                    />
                    <div className="rankYear">2026-27</div>
                  </div>

                  <div className="rankInfo">
                    <span className="rankTag">JEE Advanced</span>
                    <h3 className="rankTitle">AIR 22</h3>
                    <p className="rankSub">Top Ranker - Ankit Aggarwal</p>
                  </div>
                </div>

                <div className="rankCard">
                  <div className="rankAvatar">
                    <img
                      alt="Result card of Arjun Chauhan"
                      src="/testimonila_image/Arjun Chauhan AIR 591.jpeg"
                    />
                    <div className="rankYear">2026-27</div>
                  </div>

                  <div className="rankInfo">
                    <span className="rankTag">JEE Advanced</span>
                    <h3 className="rankTitle">AIR 591</h3>
                    <p className="rankSub">Top Ranker - Arjun Chauhan</p>
                  </div>
                </div>

                <a className="textLink" href="#/testimonials">
                  View All Results{" "}
                  <span className="material-symbols-outlined iconXs">
                    arrow_forward
                  </span>
                </a>
              </div>

              {/* Right */}
              <div className="col8">
                <div className="whyHead">
                  <h2 className="h2lg">Why Choose IITSF?</h2>
                  <p className="muted">
                    We provide the best environment for serious JEE aspirants,
                    combining traditional teaching values with modern analytics.
                  </p>
                </div>

                <div className="whyGrid">
                  <div className="featureCard">
                    <div className="featureIcon">
                      <span className="material-symbols-outlined iconMd">
                        school
                      </span>
                    </div>
                    <div>
                      <h3 className="featureTitle">Expert Faculty</h3>
                      <p className="featureText">
                        Learn directly from Ex-IITians and industry veterans who
                        have produced top ranks consistently.
                      </p>
                    </div>
                  </div>

                  <div className="featureCard">
                    <div className="featureIcon">
                      <span className="material-symbols-outlined iconMd">
                        groups
                      </span>
                    </div>
                    <div>
                      <h3 className="featureTitle">Personal Attention</h3>
                      <p className="featureText">
                        Small batch sizes (max 30) ensure every student gets
                        their doubts cleared instantly.
                      </p>
                    </div>
                  </div>

                  <div className="featureCard">
                    <div className="featureIcon">
                      <span className="material-symbols-outlined iconMd">
                        menu_book
                      </span>
                    </div>
                    <div>
                      <h3 className="featureTitle">Proven Material</h3>
                      <p className="featureText">
                        Comprehensive study material updated annually to match
                        the changing JEE pattern.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PROGRAMS */}
        <section className="section sectionAlt">
          <div className="container">
            <div className="programHead">
              <div>
                <span className="eyebrow">Academic Programs</span>
                <h2 className="h2xl">Tailored Courses for Every Aspirant</h2>
              </div>

              <button className="linkBtn">
                View All Courses{" "}
                <span className="material-symbols-outlined iconSm">
                  arrow_forward
                </span>
              </button>
            </div>

            <div className="cards3 testimonialsGrid">
              <article className="courseCard">
                <div className="courseImgWrap">
                  <img
                    className="courseImg"
                    alt="Students discussing in a classroom"
                    src="/logo/course_1.jpg"
                  />
                  <div className="courseTag">Most Popular</div>
                </div>

                <div className="courseBody">
                  <h3 className="courseTitle">Two-Year Classroom Program</h3>
                  <p className="courseText">
                    Designed for Class 11 students aiming for JEE Main &amp;
                    Advanced 2026. Builds strong fundamentals.
                  </p>

                  <div className="courseMeta">
                    <span className="metaItem">
                      <span className="material-symbols-outlined iconXs">
                        schedule
                      </span>
                      24 Months
                    </span>
                    <a className="metaLink" href="#/courses">
                      Learn More
                    </a>
                  </div>
                </div>
              </article>

              <article className="courseCard">
                <div className="courseImgWrap">
                  <img
                    className="courseImg"
                    alt="Books and study materials on a desk"
                    src="/logo/course_2.jpg"
                  />
                </div>

                <div className="courseBody">
                  <h3 className="courseTitle">One-Year Dropper Program</h3>
                  <p className="courseText">
                    Intensive course for Class 12 passed students. Focus on
                    problem-solving and rapid revision.
                  </p>

                  <div className="courseMeta">
                    <span className="metaItem">
                      <span className="material-symbols-outlined iconXs">
                        schedule
                      </span>
                      12 Months
                    </span>
                    <a className="metaLink" href="#/courses">
                      Learn More
                    </a>
                  </div>
                </div>
              </article>

              <article className="courseCard">
                <div className="courseImgWrap">
                  <img
                    className="courseImg"
                    alt="Online learning tablet with graphs"
                    src="/logo/course_3.jpg"
                  />
                </div>

                <div className="courseBody">
                  <h3 className="courseTitle">Hybrid Foundation Course</h3>
                  <p className="courseText">
                    For Class 9 &amp; 10 students. Laying the groundwork for
                    competitive exams early on.
                  </p>

                  <div className="courseMeta">
                    <span className="metaItem">
                      <span className="material-symbols-outlined iconXs">
                        schedule
                      </span>
                      12-24 Months
                    </span>
                    <a className="metaLink" href="#/courses">
                      Learn More
                    </a>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* SCHOLARSHIP CTA */}
        <section className="section">
          <div className="container">
            <div className="cta">
              <div className="ctaDots" />
              <div className="ctaGlow" />

              <div className="ctaText">
                <h2 className="ctaTitle">IITSF Scholarship Test (IST)</h2>
                <p className="ctaDesc">
                  Get up to{" "}
                  <span className="ctaHighlight">100% Scholarship</span> on
                  tuition fees. Recognize your potential and start your journey
                  with us.
                </p>
              </div>

              <div className="ctaActions">
                <button className="btn btnWhite">Register for Free</button>
                <button className="btn btnOutlineWhite">View Syllabus</button>
              </div>
            </div>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section className="section sectionAlt">
          <div className="container">
            <div className="centerHead">
              <h2 className="h2lg">What Our Students Say</h2>
              <p className="muted">
                Join a community of achievers. Hear from those who walked the
                path and succeeded.
              </p>
            </div>

            <div className="cards3">
              {testimonialImages.map((imageName, idx) => (
                <figure className="testimonialImageCard" key={imageName}>
                  <img
                    className="testimonialImage"
                    src={`/tetimonila/${imageName}`}
                    alt={`Student testimonial ${idx + 1}`}
                  />
                </figure>
              ))}
            </div>
          </div>
        </section>

      </main>
    </div>
  );
};

export default IitsfHome;
