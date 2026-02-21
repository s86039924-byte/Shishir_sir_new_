import React from "react";
import "./coursesPage.css";

const CoursesPage: React.FC = () => {
  return (
    <div className="coursePage page">
      <main className="main">
        {/* Hero */}
        <section className="hero">
          <div className="heroBg" aria-hidden="true" />
          <div className="heroOverlay" aria-hidden="true" />

          <div className="heroContent">
            <span className="heroPill">Admissions Open 2026-27</span>

            <h1 className="heroTitle">
              Expertly Crafted Programs for{" "}
              <span className="heroTitleHighlight">IIT-JEE Success</span>
            </h1>

            <p className="heroText">
              From Foundation to Advanced, find the path that leads to your dream engineering college
              with our structured curriculum.
            </p>

            <div className="heroActions">
              <button className="btn btnSecondary btnHero">Download Brochure</button>
              <button className="btn btnGhost btnHero">Scholarship Test</button>
            </div>
          </div>
        </section>

        {/* Body Container */}
        <section className="section">
          <div className="container">
            {/* Filter */}
            <div className="filterWrap">
              <h2 className="sectionTitle">Our Courses</h2>

              <div className="filterBar">
                <label className="filterItem">
                  <input defaultChecked className="filterInput" type="radio" name="course_filter" />
                  <span className="filterBtn">All Courses</span>
                </label>

                <label className="filterItem">
                  <input className="filterInput" type="radio" name="course_filter" />
                  <span className="filterBtn">Class 11 &amp; 12</span>
                </label>

                <label className="filterItem">
                  <input className="filterInput" type="radio" name="course_filter" />
                  <span className="filterBtn">Repeaters</span>
                </label>

                <label className="filterItem">
                  <input className="filterInput" type="radio" name="course_filter" />
                  <span className="filterBtn">Foundation (9-10)</span>
                </label>
              </div>
            </div>

            {/* Courses Grid */}
            <div className="courseGrid">
              {/* Card 1 */}
              <article className="courseCard courseCardRed">
                <div className="cardTopBar cardTopBarRed" />
                <div className="courseBody">
                  <div className="courseHead">
                    <span className="courseTag courseTagRed">Crash Course</span>
                    <span className="courseIcon courseIconRed">
                      <span className="material-symbols-outlined">bolt</span>
                    </span>
                  </div>

                  <div>
                    <h3 className="courseTitle courseTitleRed">JEE / NEET Crash Course</h3>
                    <p className="courseSub">For XII Studying / Passed Students</p>
                    <p className="courseMetaLine">JEE MAINS / ADVANCE / NEET / BITSAT / UPSEE</p>
                  </div>

                  <div className="divider" />

                  <div className="courseInfo">
                    <div className="infoBlock">
                      <span className="infoLabel">Eligibility:</span>
                      <span className="infoText">Class XII appearing and passed students</span>
                    </div>

                    <div className="infoBlock">
                      <span className="infoLabel">Schedule:</span>
                      <span className="infoText">Daily Classes</span>
                    </div>

                    <div className="infoBlock">
                      <span className="infoLabel">Key Highlights:</span>
                      <ul className="infoList">
                        <li>Entire syllabus of JEE/NEET taught via concept clearing classes.</li>
                        <li>XI &amp; XII syllabus covered in short span.</li>
                        <li>Focus on solving complete question papers within time limits.</li>
                        <li>Short-cut methods instead of lengthy calculations.</li>
                      </ul>
                    </div>

                    <div className="infoBlock">
                      <span className="infoLabel">Admission:</span>
                      <span className="infoText">Direct Admission</span>
                    </div>
                  </div>

                </div>
              </article>

              {/* Card 2 */}
              <article className="courseCard courseCardViolet">
                <div className="cardTopBar cardTopBarBlue" />
                <div className="courseBody">
                  <div className="courseHead">
                    <span className="courseTag courseTagBlue">Aspire Course</span>
                    <span className="courseIcon courseIconBlue">
                      <span className="material-symbols-outlined">psychology</span>
                    </span>
                  </div>

                  <div>
                    <h3 className="courseTitle">2-Year Foundation</h3>
                    <p className="courseSub">For XI Moving Students</p>
                    <p className="courseMetaLine">JEE MAINS / ADVANCE / NEET / BITSAT / UPSEE</p>
                  </div>

                  <div className="divider" />

                  <div className="courseInfo">
                    <div className="infoBlock">
                      <span className="infoLabel">Eligibility:</span>
                      <span className="infoText">Class X passed students</span>
                    </div>

                    <div className="infoBlock">
                      <span className="infoLabel">Schedule:</span>
                      <span className="infoText">Daily Classes</span>
                    </div>

                    <div className="infoBlock">
                      <span className="infoLabel">Key Highlights:</span>
                      <ul className="infoList">
                        <li>Headstart for students aspiring for Engineering/Medicine.</li>
                        <li>Covers full academic syllabus of class XI.</li>
                        <li>In-depth knowledge of concepts used in competitive exams.</li>
                        <li>Commences from 2nd week of April / May.</li>
                      </ul>
                    </div>

                    <div className="infoBlock">
                      <span className="infoLabel">Admission:</span>
                      <span className="infoText">Through Admission cum Scholarship Test</span>
                    </div>
                  </div>

                </div>
              </article>

              {/* Card 3 */}
              <article className="courseCard courseCardSky">
                <div className="cardTopBar cardTopBarBlue" />
                <div className="courseBody">
                  <div className="courseHead">
                    <span className="courseTag courseTagBlue">Achiever Course</span>
                    <span className="courseIcon courseIconBlue">
                      <span className="material-symbols-outlined">emoji_events</span>
                    </span>
                  </div>

                  <div>
                    <h3 className="courseTitle">1-Year Classroom</h3>
                    <p className="courseSub">For XII Moving Students</p>
                    <p className="courseMetaLine">JEE MAINS / ADVANCE / NEET / BITSAT / UPSEE</p>
                  </div>

                  <div className="divider" />

                  <div className="courseInfo">
                    <div className="infoBlock">
                      <span className="infoLabel">Eligibility:</span>
                      <span className="infoText">Class XI passed students</span>
                    </div>

                    <div className="infoBlock">
                      <span className="infoLabel">Schedule:</span>
                      <span className="infoText">Daily Classes</span>
                    </div>

                    <div className="infoBlock">
                      <span className="infoLabel">Key Highlights:</span>
                      <ul className="infoList">
                        <li>Thoroughly covers all topics of Physics, Chemistry &amp; Math for XII.</li>
                        <li>Rigorous doubt clearing sessions and classroom tests.</li>
                        <li>Revision of Class XI syllabus included.</li>
                        <li>Commences from 1st week of April/May.</li>
                      </ul>
                    </div>

                    <div className="infoBlock">
                      <span className="infoLabel">Admission:</span>
                      <span className="infoText">Through Admission cum Scholarship Test</span>
                    </div>
                  </div>

                </div>
              </article>

              {/* Card 4 */}
              <article className="courseCard courseCardGreen">
                <div className="cardTopBar cardTopBarGreen" />
                <div className="courseBody">
                  <div className="courseHead">
                    <span className="courseTag courseTagGreen">Target Course</span>
                    <span className="courseIcon courseIconGreen">
                      <span className="material-symbols-outlined">track_changes</span>
                    </span>
                  </div>

                  <div>
                    <h3 className="courseTitle courseTitleGreen">Repeater Batch</h3>
                    <p className="courseSub">For XII Passed Students</p>
                    <p className="courseMetaLine">JEE MAINS / ADVANCE / NEET / BITSAT / UPSEE</p>
                  </div>

                  <div className="divider" />

                  <div className="courseInfo">
                    <div className="infoBlock">
                      <span className="infoLabel">Eligibility:</span>
                      <span className="infoText">Class XII passed students</span>
                    </div>

                    <div className="infoBlock">
                      <span className="infoLabel">Schedule:</span>
                      <span className="infoText">Daily 6 Hours Classes</span>
                    </div>

                    <div className="infoBlock">
                      <span className="infoLabel">Key Highlights:</span>
                      <ul className="infoList">
                        <li>Topics of JEE / UPSEE / NEET are thoroughly covered.</li>
                        <li>Fundamentals of all topics made crystal clear.</li>
                        <li>Expert faculty guidance.</li>
                        <li>Regular tests and doubt clearing classes.</li>
                      </ul>
                    </div>

                    <div className="infoBlock">
                      <span className="infoLabel">Admission:</span>
                      <span className="infoText">Direct or through Admission cum Scholarship Test</span>
                    </div>
                  </div>

                </div>
              </article>
            </div>

            {/* Why Choose */}
            <div className="whySection">
              <div className="whyHead">
                <h2 className="whyTitle">Why Choose IITSF?</h2>
                <p className="whyText">
                  We don't just teach; we mentor you to achieve your highest potential through a rigorous academic ecosystem.
                </p>
              </div>

              <div className="whyGrid">
                <div className="whyCard whyCardBlue">
                  <div className="whyIcon whyIconBlue">
                    <span className="material-symbols-outlined">trophy</span>
                  </div>
                  <div>
                    <h3 className="whyCardTitle">Proven Track Record</h3>
                    <p className="whyCardText">
                      Consistent top ranks in JEE Advanced and Main for the last 10 years, with over 500+ selections.
                    </p>
                  </div>
                </div>

                <div className="whyCard whyCardRed">
                  <div className="whyIcon whyIconRed">
                    <span className="material-symbols-outlined">record_voice_over</span>
                  </div>
                  <div>
                    <h3 className="whyCardTitle">Expert Faculty</h3>
                    <p className="whyCardText">
                      Learn directly from IIT alumni and veteran educators with decades of specialized teaching experience.
                    </p>
                  </div>
                </div>

                <div className="whyCard whyCardBlue">
                  <div className="whyIcon whyIconBlue">
                    <span className="material-symbols-outlined">person_check</span>
                  </div>
                  <div>
                    <h3 className="whyCardTitle">Personalized Attention</h3>
                    <p className="whyCardText">
                      Small batch sizes ensuring every student gets their doubts resolved instantly and effectively.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
};

export default CoursesPage;
