import React, { useState } from "react";
import "./faculty.css";

const getDriveId = (url: string): string | null => {
  const filePathMatch = url.match(/\/d\/([^/]+)/);
  if (filePathMatch) {
    return filePathMatch[1];
  }
  const queryMatch = url.match(/[?&]id=([^&]+)/);
  if (queryMatch) {
    return queryMatch[1];
  }
  return null;
};

const drivePrimary = (url: string): string => {
  const id = getDriveId(url);
  if (!id) return url;
  return `https://drive.google.com/uc?export=view&id=${id}`;
};

const driveFallback = (url: string): string | null => {
  const id = getDriveId(url);
  if (!id) return null;
  return `https://drive.google.com/thumbnail?id=${id}&sz=w1600`;
};

const teamMembers = [
  {
    subject: "Physics",
    name: "Er. Shishir Mohta",
    role: "Director & Senior Physics Faculty (B.Tech, IIT Delhi)",
    image: drivePrimary("https://drive.google.com/file/d/1G0HBfg16toFjvtvgfJ-KiyCmvcEoTgvc/view?usp=sharing"),
    imageFallback: driveFallback(
      "https://drive.google.com/file/d/1G0HBfg16toFjvtvgfJ-KiyCmvcEoTgvc/view?usp=sharing"
    ),
    alt: "Er. Shishir Mohta - Physics Faculty",
    highlights: [
      "27+ years of teaching experience in Physics.",
      "Mentor to AIR 22, 268, 299, 501, 529, 591, 959, 982 and many more from Saharanpur.",
      "Known for conceptual clarity, engaging teaching style and dedicated mentorship.",
    ],
  },
  {
    subject: "Mathematics",
    name: "Mr. Anuj Kumar",
    role: "Senior Mathematics Faculty (IIT Roorkee)",
    image: drivePrimary("https://drive.google.com/file/d/1WqK3IYsxXVK-iFCgB3sI3DS3X5MBdVY_/view?usp=sharing"),
    imageFallback: driveFallback(
      "https://drive.google.com/file/d/1WqK3IYsxXVK-iFCgB3sI3DS3X5MBdVY_/view?usp=sharing"
    ),
    alt: "Mr. Anuj Kumar - Mathematics Faculty",
    highlights: [
      "20+ years of rich teaching experience in Mathematics.",
      "Former faculty at Resonance, Kota; known for deep conceptual understanding and innovative, time-saving problem-solving approaches.",
      "Has helped countless aspirants master Mathematics and achieve outstanding success in the IIT-JEE.",
    ],
  },
  {
    subject: "Chemistry",
    name: "Dr. Gaurav Garg",
    role: "Senior Chemistry Faculty (BAMS, M.Sc. Chemistry)",
    image: drivePrimary("https://drive.google.com/file/d/1j5XqyjlhJ7tIZNfdhU5w7iyWSvWOdRvJ/view?usp=sharing"),
    imageFallback: driveFallback(
      "https://drive.google.com/file/d/1j5XqyjlhJ7tIZNfdhU5w7iyWSvWOdRvJ/view?usp=sharing"
    ),
    alt: "Dr. Gaurav Garg - Chemistry Faculty",
    highlights: [
      "20+ years of teaching experience mentoring IIT-JEE and NEET-UG toppers.",
      "Known for deep understanding of Chemistry and a student-centric approach that balances competition and concept-building.",
      "Inspires students to achieve their fullest potential through clarity and disciplined practice.",
    ],
  },
];

const FacultyPage: React.FC = () => {
  const [expandedMember, setExpandedMember] = useState<string | null>(null);

  return (
    <div className="facPage">
      <main className="facMain">
        {/* Hero */}
        <section className="facHero">
          <div className="facHeroBg" aria-hidden="true" />
          <div className="facHeroInner">
            <h1 className="facHeroTitle">
              Mentors Who Have <span className="facHeroAccent">Walked The Path</span>
            </h1>

            <p className="facHeroText">
              Learn from the masters of the craft. Our faculty consists of IITians and seasoned
              educators dedicated to transforming your potential into success.
            </p>

            <div className="facHeroBadges">
              <div className="facPill">
                <span className="material-symbols-outlined facPillIcon">school</span>
                <span className="facPillText">500+ IIT Selections</span>
              </div>

              <div className="facPill">
                <span className="material-symbols-outlined facPillIcon">group</span>
                <span className="facPillText">15+ Avg Experience</span>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Faculty */}
        <section className="facSection facSectionAlt">
          <div className="facContainer">
            <div className="featuredCard">
              <div className="featuredGrid">
                <div className="featuredContent">
                  <div className="featuredMeta">
                    <span className="featuredTag">IIT Delhi Alumnus</span>
                    <span className="featuredExp">• 20+ Years Exp</span>
                  </div>

                  <h2 className="featuredName">Shishir Mohta</h2>
                  <h3 className="featuredDeskTitle">From the Desk of Director</h3>
                  <p className="featuredDeskSub">Meeting your Expectations</p>

                  <p className="featuredQuote">
                    "Earning the absolute trust of our students is our most important goal. Our
                    commitment to relationships builds the confidence that enables us to act
                    decisively and expediently."
                  </p>

                  <p className="featuredQuote">
                    "Our experiences give our students access to an unparalleled depth of knowledge.
                    We understand that each of our engagements are unique, yet our experience enables
                    us to quickly discover and explore changing patterns of IIT JEE that mirror those
                    we have faced in the past."
                  </p>

                  <p className="featuredQuote">
                    "We place priority on results, empowering our students to act in a
                    straightforward, efficient manner. Our lecturers work collaboratively with our
                    students to unravel the complexities of each situation, peeling away the layers
                    to uncover opportunities that will lead to successful resolution."
                  </p>

                  <div className="featuredStats">
                    <div className="statBox statBoxBlue">
                      <p className="statValue statValueBlue">2000+</p>
                      <p className="statLabel">Students Mentored</p>
                    </div>

                    <div className="statBox statBoxRed">
                      <p className="statValue statValueRed">AIR 12</p>
                      <p className="statLabel">Best Rank Produced</p>
                    </div>
                  </div>

                  <button className="facBtn facBtnPrimary facBtnLarge">
                    <span>Watch Introductory Session</span>
                    <span className="material-symbols-outlined">play_circle</span>
                  </button>
                </div>

                <div className="featuredImageWrap">
                  <img
                    className="featuredImage"
                    alt="Professional headshot of Shishir Mohta, Founder of IIT Study Forum"
                    src="/logo/hod.png"
                  />
                  <div className="featuredLabel">Founder &amp; HOD Physics</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Team Grid */}
        <section className="facSection">
          <div className="facContainer">
            <div className="teamHeader">
              <div>
                <h3 className="teamTitle">Meet Our Team</h3>
                <p className="teamSub">Experts across Physics, Chemistry, and Mathematics</p>
              </div>
            </div>

            <div className="teamGrid">
              {teamMembers.map((member) => (
                <article className="teamCard" key={member.name}>
                  <div className="teamPhotoWrap">
                    <img
                      className="teamPhoto"
                      alt={member.alt}
                      src={member.image}
                      loading="lazy"
                      onError={(e) => {
                        const fallback = member.imageFallback;
                        if (fallback && e.currentTarget.src !== fallback) {
                          e.currentTarget.src = fallback;
                        }
                      }}
                    />
                    <div className="teamSubject">{member.subject}</div>
                  </div>
                  <div className="teamBody">
                    <div className="teamHead">
                      <h4 className="teamName">{member.name}</h4>
                      <p className="teamQual">{member.role}</p>
                    </div>

                    {expandedMember === member.name && (
                      <ul className="teamHighlights">
                        {member.highlights.map((highlight) => (
                          <li key={highlight}>{highlight}</li>
                        ))}
                      </ul>
                    )}

                    <button
                      className="facBtn facBtnOutline teamKnowMoreBtn"
                      type="button"
                      onClick={() =>
                        setExpandedMember((prev) => (prev === member.name ? null : member.name))
                      }
                    >
                      {expandedMember === member.name ? "Show Less" : "Know More"}
                    </button>
                  </div>
                </article>
              ))}
            </div>

            {/* CTA */}
            <div className="bottomCta">
              <h3 className="bottomCtaTitle">Ready to learn from the best?</h3>
              <p className="bottomCtaText">
                Join our upcoming batch and start your journey towards your dream engineering
                college.
              </p>
              <div className="bottomCtaActions">
                <button className="facBtn facBtnSecondary facBtnLarge">
                  Contact for Career Counseling
                </button>
                <button className="facBtn facBtnOutlineStrong facBtnLarge">View Full Schedule</button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default FacultyPage;
