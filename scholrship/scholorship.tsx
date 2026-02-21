import React from "react";
import "./scholorship.css";

const ScholarshipExamPage: React.FC = () => {
  const testimonialImages = ["1.jpeg", "2.jpeg", "3.jpeg", "4.jpeg", "5.jpeg", "6.jpeg"];

  const scrollToDates = () => {
    const el = document.getElementById("schImportantDates");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="schPage">
      {/* Hero */}
      <section className="schHero">
        <div className="schHeroBg" aria-hidden="true" />
        <div className="schContainer schHeroGrid">
          {/* Left */}
          <div className="schHeroLeft">
            <div className="schPill">
              <span className="material-symbols-outlined schPillIcon">school</span>
              <span className="schPillText">Scholarship Exam 2026-27</span>
            </div>

            <h1 className="schHeroTitle">
              Unlock Your Potential with{" "}
              <span className="schHeroAccent">IITSF Talent Reward Exam</span>
            </h1>

            <p className="schHeroSub">
              Benchmark your preparation against the best minds in the country. Get up to{" "}
              <span className="schHeroHighlight">100% Scholarship</span> for IIT-JEE Prep and cash
              rewards worth ₹50 Lakhs.
            </p>

            <div className="schPoints">
              <div className="schPoint">
                <span className="material-symbols-outlined schCheck">check_circle</span>
                <span>National Level Ranking</span>
              </div>
              <div className="schPoint">
                <span className="material-symbols-outlined schCheck">check_circle</span>
                <span>Detailed Analysis</span>
              </div>
              <div className="schPoint">
                <span className="material-symbols-outlined schCheck">check_circle</span>
                <span>Win Cash Prizes</span>
              </div>
            </div>

            <div className="schHeroButtons">
              <button className="schBtn schBtnPrimary" onClick={scrollToDates}>
                Register Now - Free
              </button>

              <button className="schBtn schBtnOutline" type="button">
                <span className="material-symbols-outlined schBtnIcon">download</span>
                Download Syllabus
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="schStats">
        <div className="schContainer schStatsGrid">
          <div className="schStat">
            <p className="schStatValue schPrimary">15k+</p>
            <p className="schStatLabel">Students Registered</p>
          </div>
          <div className="schStat">
            <p className="schStatValue schPrimary">₹50L</p>
            <p className="schStatLabel">Total Scholarships</p>
          </div>
          <div className="schStat">
            <p className="schStatValue schAccent">100%</p>
            <p className="schStatLabel">Fee Waiver Possible</p>
          </div>
          <div className="schStat">
            <p className="schStatValue schPrimary">50+</p>
            <p className="schStatLabel">Cities Nationwide</p>
          </div>
        </div>
      </section>

      {/* Admission & Fee Procedure */}
      <section className="schSection schSectionWhite">
        <div className="schContainer">
          <div className="schSectionHead">
            <h2 className="schSectionTitle">Procedure for Admission and Fees</h2>
            <p className="schSectionSub">Key admission and fee process details for all applicants.</p>
          </div>

          <div className="schPolicyCard">
            <h3 className="schPolicyTitle">How To Join - Requirements for Admission in Any Program</h3>
            <ul className="schPolicyList">
              <li>
                Candidates seeking admission in any IIT Study Forum program are required to fill the
                prescribed form from the center along with two passport-size photographs.
              </li>
              <li>Photocopy of the marksheet of last board exam (if applicable).</li>
              <li>
                Course fee (lumpsum / first installment) either by cash or demand draft in favour of
                IIT Study Forum payable at Saharanpur.
              </li>
              <li>
                Write your name behind photographs and your name &amp; address behind the demand draft.
              </li>
              <li>
                Identity card will be given at the time of admission and must be carried by students.
              </li>
              <li>
                Outside students may request brochure and admission form by sending an application.
              </li>
            </ul>

            <h3 className="schPolicyTitle">How to Deposit Fee</h3>
            <ul className="schPolicyList">
              <li>
                Admission form along with requisite course fee can be sent by registered post/courier
                or submitted personally at the center.
              </li>
              <li>By post: send completed admission form with crossed DD of course fee.</li>
              <li>By hand: deposit form at office and pay by cash or crossed DD.</li>
              <li>
                Lumpsum fee is payable by DD or cash only. Installment fee is payable by cash/DD as
                per schedule.
              </li>
              <li>Late fee: Rs. 500 for missed installment schedule (if accepted by center).</li>
            </ul>

            <div className="schPolicyGrid">
              <div>
                <h4 className="schPolicyMini">Office Timings</h4>
                <p className="schPolicyText">10 AM to 7 PM (Weekdays), 10 AM to 12 PM (Sunday)</p>
              </div>
              <div>
                <h4 className="schPolicyMini">Transport Facility</h4>
                <p className="schPolicyText">
                  Transport facility is available for students. Charges will be extra.
                </p>
              </div>
              <div>
                <h4 className="schPolicyMini">Hostel Facility</h4>
                <p className="schPolicyText">Hostel facility is available for outstation students.</p>
              </div>
              <div>
                <h4 className="schPolicyMini">Library Facility</h4>
                <p className="schPolicyText">
                  In-campus library facility is available for enrolled students.
                </p>
              </div>
              <div>
                <h4 className="schPolicyMini">Scholarship (Fee Concession)</h4>
                <p className="schPolicyText">Scholarship means fee concession / fee discount / waiver.</p>
              </div>
              <div>
                <h4 className="schPolicyMini">Grievances</h4>
                <p className="schPolicyText">
                  For grievances or suggestions, mail at <strong>info@iitstudyforum.com</strong>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Admission cum Scholarship Test */}
      <section className="schSection">
        <div className="schContainer">
          <div className="schSectionHead">
            <h2 className="schSectionTitle">Admission cum Scholarship Test</h2>
            <p className="schSectionSub">
              Complete details for test purpose, enrollment process, and scholarship criteria.
            </p>
          </div>

          <div className="schPolicyCard">
            <h3 className="schPolicyTitle">About the Test</h3>
            <p className="schPolicyText">
              Apart from direct admission, IIT Study Forum conducts admission cum scholarship tests to
              assess student potential through quantitative, verbal, and analytical sections.
            </p>

            <h3 className="schPolicyTitle">Purpose of Admission cum Scholarship Test</h3>
            <ul className="schPolicyList">
              <li>Assess the current level of the student and judge preparedness.</li>
              <li>Assess ability to sustain pressure and manage workload during preparation.</li>
              <li>Assess temperament, sincerity, and aptitude for studies.</li>
              <li>Help students from diverse academic backgrounds with guided entry to programs.</li>
            </ul>

            <h3 className="schPolicyTitle">How to Enroll / Register for Admission cum Scholarship Test</h3>
            <ul className="schPolicyList">
              <li>Application can be made via online form or prescribed offline form.</li>
              <li>2 passport-size photographs.</li>
              <li>Photocopy of marksheet of last board exam (if applicable).</li>
              <li>
                Registration fee: Rs. 500 either by cash or demand draft in favour of IIT Study
                Forum payable at Saharanpur.
              </li>
              <li>Write your name behind photographs and behind demand draft.</li>
              <li>Student will receive admit card at registration.</li>
              <li>Result is declared within 1 week after test.</li>
            </ul>

            <h3 className="schPolicyTitle">Scholarship Criteria (Test-based)</h3>
            <div className="schPolicyTableWrap">
              <table className="schPolicyTable">
                <thead>
                  <tr>
                    <th>Rank</th>
                    <th>Scholarship</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Rank 1-5</td>
                    <td>40%</td>
                  </tr>
                  <tr>
                    <td>Rank 6-10</td>
                    <td>30%</td>
                  </tr>
                  <tr>
                    <td>Rank 11-20</td>
                    <td>20%</td>
                  </tr>
                  <tr>
                    <td>Rank 21-30</td>
                    <td>10%</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 className="schPolicyTitle">Scholarship for Other Categories</h3>
            <div className="schPolicyTableWrap">
              <table className="schPolicyTable">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Scholarship</th>
                    <th>Criteria</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>NTSE Qualified</td>
                    <td>50%</td>
                    <td>National level NTSE exam qualified students.</td>
                  </tr>
                  <tr>
                    <td>SC / ST Category</td>
                    <td>20%</td>
                    <td>Valid category certificate required.</td>
                  </tr>
                  <tr>
                    <td>Siblings</td>
                    <td>10%</td>
                    <td>Sibling currently studying in institute.</td>
                  </tr>
                  <tr>
                    <td>Defence Personnel (Army / Airforce / Navy)</td>
                    <td>5%</td>
                    <td>Parent currently in defence services with valid proof.</td>
                  </tr>
                  <tr>
                    <td>Single Parent</td>
                    <td>10%</td>
                    <td>Student has lost either father or mother.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Brackets */}
      <section className="schSection">
        <div className="schContainer">
          <div className="schSectionHead">
            <h2 className="schSectionTitle">Scholarship Brackets</h2>
            <p className="schSectionSub">
              Scholarship is awarded as per rank bracket in the admission cum scholarship test.
            </p>
          </div>

          <div className="schBracketGrid">
            <article className="schBracket schBracketGold">
              <div className="schTier schTierGold">GOLD TIER</div>
              <div className="schMedal schMedalGold">
                <span className="material-symbols-outlined">emoji_events</span>
              </div>
              <h3 className="schBracketTitle">Rank 1 - 5</h3>
              <div className="schBracketOff">
                40% <span className="schOffSmall">OFF</span>
              </div>
              <p className="schBracketNote">Tuition Fee Waiver</p>
            </article>

            <article className="schBracket schBracketSilver">
              <div className="schTier schTierSilver">SILVER TIER</div>
              <div className="schMedal schMedalSilver">
                <span className="material-symbols-outlined">military_tech</span>
              </div>
              <h3 className="schBracketTitle">Rank 6 - 10</h3>
              <div className="schBracketOff">
                30% <span className="schOffSmall">OFF</span>
              </div>
              <p className="schBracketNote">Tuition Fee Waiver</p>
            </article>

            <article className="schBracket schBracketBronze">
              <div className="schTier schTierBronze">BRONZE TIER</div>
              <div className="schMedal schMedalBronze">
                <span className="material-symbols-outlined">workspace_premium</span>
              </div>
              <h3 className="schBracketTitle">Rank 11 - 20</h3>
              <div className="schBracketOff">
                20% <span className="schOffSmall">OFF</span>
              </div>
              <p className="schBracketNote">Tuition Fee Waiver</p>
            </article>

            <article className="schBracket schBracketBronze">
              <div className="schTier schTierBronze">BRONZE TIER</div>
              <div className="schMedal schMedalBronze">
                <span className="material-symbols-outlined">workspace_premium</span>
              </div>
              <h3 className="schBracketTitle">Rank 21 - 30</h3>
              <div className="schBracketOff">
                10% <span className="schOffSmall">OFF</span>
              </div>
              <p className="schBracketNote">Tuition Fee Waiver</p>
            </article>
          </div>

          <p className="schFootNote">
            * Scholarships applicable for 1-year and 2-year classroom programs.
          </p>
        </div>
      </section>

      {/* Dates */}
      <section className="schSection schSectionWhite" id="schImportantDates">
        <div className="schContainer">
          <h2 className="schSectionTitle schCenter">Important Dates</h2>

          <div className="schTimeline">
            <div className="schLine" aria-hidden="true" />
            <div className="schLineActive" aria-hidden="true" />

            <div className="schTimelineGrid">
              <div className="schStep schStepActive">
                <div className="schStepNum">1</div>
                <div className="schStepText">
                  <p className="schStepDate schPrimary">Oct 15, 2026-27</p>
                  <h3 className="schStepTitle">Registration Ends</h3>
                  <p className="schStepDesc">Last day to submit your online application form.</p>
                </div>
              </div>

              <div className="schStep">
                <div className="schStepNum schStepNumGray">2</div>
                <div className="schStepText">
                  <p className="schStepDate">Oct 20, 2026-27</p>
                  <h3 className="schStepTitle">Admit Card</h3>
                  <p className="schStepDesc">Download from portal using application ID.</p>
                </div>
              </div>

              <div className="schStep">
                <div className="schStepNum schStepNumGray">3</div>
                <div className="schStepText">
                  <p className="schStepDate">Oct 27, 2026-27</p>
                  <h3 className="schStepTitle">Exam Date</h3>
                  <p className="schStepDesc">Offline &amp; Online modes across 50+ cities.</p>
                </div>
              </div>

              <div className="schStep">
                <div className="schStepNum schStepNumGray">4</div>
                <div className="schStepText">
                  <p className="schStepDate">Nov 05, 2026-27</p>
                  <h3 className="schStepTitle">Results</h3>
                  <p className="schStepDesc">Check your AIR and scholarship eligibility.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hall of Fame */}
      <section className="schSection">
        <div className="schContainer">
          <h2 className="schSectionTitle schCenter">Hall of Fame</h2>

          <div className="schFameGrid">
            {testimonialImages.map((imageName, idx) => (
              <figure className="schFameImageCard" key={imageName}>
                <img
                  className="schFameImage"
                  src={`/tetimonila/${imageName}`}
                  alt={`Hall of Fame student ${idx + 1}`}
                />
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="schSection schSectionWhite">
        <div className="schContainer schFaqWrap">
          <h2 className="schSectionTitle schCenter">Frequently Asked Questions</h2>

          <div className="schFaq">
            <details className="schFaqItem">
              <summary className="schFaqQ">
                <span>What is the syllabus for the exam?</span>
                <span className="material-symbols-outlined schFaqIcon">expand_more</span>
              </summary>
              <div className="schFaqA">
                The syllabus covers Physics, Chemistry, and Mathematics/Biology based on the NCERT
                curriculum of your previous and current class. Detailed syllabus PDF can be
                downloaded after registration.
              </div>
            </details>

            <details className="schFaqItem">
              <summary className="schFaqQ">
                <span>Can I change my exam mode from Online to Offline later?</span>
                <span className="material-symbols-outlined schFaqIcon">expand_more</span>
              </summary>
              <div className="schFaqA">
                Yes, you can request a change in exam mode up to 5 days before the exam date by
                contacting our support team or logging into your student dashboard.
              </div>
            </details>

            <details className="schFaqItem">
              <summary className="schFaqQ">
                <span>Is there any negative marking in the test?</span>
                <span className="material-symbols-outlined schFaqIcon">expand_more</span>
              </summary>
              <div className="schFaqA">
                Yes, consistent with JEE/NEET patterns, there is negative marking. +4 marks for
                correct answers and -1 mark for incorrect answers.
              </div>
            </details>

            <details className="schFaqItem">
              <summary className="schFaqQ">
                <span>When will I receive the cash reward?</span>
                <span className="material-symbols-outlined schFaqIcon">expand_more</span>
              </summary>
              <div className="schFaqA">
                Cash rewards are distributed during the felicitation ceremony, usually held within
                30 days of result declaration. Winners must be present to claim the reward.
              </div>
            </details>
          </div>
        </div>
      </section>

    </div>
  );
};

export default ScholarshipExamPage;
