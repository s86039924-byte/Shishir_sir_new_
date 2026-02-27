import React, { useMemo, useState } from "react";
import "./testimonila.css";

const hallResults = [
  {
    name: "Srishti Aggarwal",
    label: "Percentile",
    value: "99.13",
    img: "/testimonila_image/Shristi.png",
  },
  {
    name: "Aditya Kadanga",
    label: "Percentile",
    value: "96.74",
    img: "/testimonila_image/Aditya.png",
  },
  {
    name: "Dhruv Maheshwari",
    label: "Percentile",
    value: "96.79",
    img: "/testimonila_image/Dhruv.png",
  },
  {
    name: "Anmol yadav",
    label: "Percentile",
    value: "99.65",
    img: "/testimonila_image/Anmol_yadav.png",
  },
  {
    name: "Mukul Saini",
    label: "Percentile",
    value: "99.6",
    img: "/testimonila_image/Mukul_saini.png",
  },
  {
    name: "Ansh Goyal",
    label: "Percentile",
    value: "99.23",
    img: "/testimonila_image/Ansh_goyal.png",
  },
  {
    name: "Nitin",
    label: "AIR",
    value: "1198",
    img: "/testimonila_image/Nitin.png",
  },
  {
    name: "Prakhar Aggarwal",
    label: "Percentile",
    value: "99.85",
    img: "/testimonila_image/Prakhar_Agrwall.png",
  },
  {
    name: "Ajay Sharma",
    label: "AIR",
    value: "982",
    img: "/testimonila_image/Ajay_Shanrma.png",
  },
  {
    name: "Anuj Arora",
    label: "AIR",
    value: "501",
    img: "/testimonila_image/Anuj Arora.png",
  },
  {
    name: "Ankit Aggarwal",
    label: "AIR",
    value: "22",
    img: "/testimonila_image/Ankit Aggarwal.png",
  },
  {
    name: "Arjun Chauhan",
    label: "AIR",
    value: "591",
    img: "/testimonila_image/Arjun Chauhan.png",
  },
  {
    name: "Chirag Jain",
    label: "AIR",
    value: "529",
    img: "/testimonila_image/chirag_jain.png",
  },
  {
    name: "Prakhar Aggarwal",
    label: "AIR",
    value: "959",
    img: "/testimonila_image/Prakhar_Agrwall.png",
  },
];

const fullResultImages = [
  "/testimonila_image/full_image_1.jpeg",
  "/testimonila_image/full_image_2.jpeg",
];

const SuccessStoriesPage: React.FC = () => {
  const [showAllHall, setShowAllHall] = useState(false);
  const visibleHallResults = useMemo(
    () => (showAllHall ? hallResults : hallResults.slice(0, 6)),
    [showAllHall]
  );

  return (
    <div className="ssPage">
      <main className="ssMain">
        {/* Hero */}
        <section className="ssHero">
          <div className="ssHeroBg">
            <div className="ssHeroOverlay" />
            <div
              className="ssHeroImage"
              data-alt="University campus students studying outdoors"
              style={{
                backgroundImage:
                  "url('https://lh3.googleusercontent.com/aida-public/AB6AXuC9LnD7wLdSQHJgGoP1_JpA-sgKnKCUmiCJp1uczZalEI7rtbu2YMNXWCh0M2ORtpTZXoNueTN2YSQJdFlYKp19TWlcR0XVa865Liya5dNL2jJrMDuB7UhiREv5Q8aUyaJgbtJdIF1RPp0IOYkooVOUdLVz-778OwK_Meb46acFjSrYNHD0KBhYEDgjUIY1Oah2rtkQRgzrwIc8HmECIBnfOGIaAOPR62NoqNjuomnnDaH7yrwvDChvSSbqbjiYYimf68Q5hMVl6Zo')",
              }}
            />
          </div>

          <div className="ssContainer ssHeroContent">
            <div className="ssHeroBox">
              <span className="ssPill">
                <span className="ssPillSparkle">✨</span>
                500+ Selections in JEE Advanced 2026-27
              </span>

              <h1 className="ssHeroTitle">
                Celebrating Excellence:
                <br />
                <span className="ssHeroTitleAccent">Stories of Success</span>
              </h1>

              <p className="ssHeroSub">
                Meet the brilliant minds who turned their dreams into reality with determination,
                hard work, and the right guidance at IIT Study Forum.
              </p>

              <div className="ssHeroBtns">
                <button className="ssBtn ssBtnPrimaryBig" type="button">
                  View Top Rankers
                </button>
                <button className="ssBtn ssBtnGlassBig" type="button">
                  Download Brochure
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="ssStatsBar">
          <div className="ssContainer">
            <dl className="ssStatsGrid">
              <div className="ssStat">
                <dt className="ssStatLabel">Total Selections</dt>
                <dd className="ssStatValue">1,250+</dd>
              </div>
              <div className="ssStat">
                <dt className="ssStatLabel">Under AIR 100</dt>
                <dd className="ssStatValue">42</dd>
              </div>
              <div className="ssStat">
                <dt className="ssStatLabel">Years of Legacy</dt>
                <dd className="ssStatValue">15+</dd>
              </div>
              <div className="ssStat">
                <dt className="ssStatLabel">Average Percentile</dt>
                <dd className="ssStatValue">98.5</dd>
              </div>
            </dl>
          </div>
        </section>

        {/* Hall of Fame */}
        <section className="ssSection">
          <div className="ssContainer">
            <div className="ssSectionHead">
              <h2 className="ssSectionTitle">Hall of Fame</h2>
              <p className="ssSectionSub">Our top performers who set new benchmarks.</p>
            </div>

            <div className="ssHallGrid ssResultGrid">
              {visibleHallResults.map((result) => (
                <article className="ssHallCard ssResultCard" key={result.name}>
                  <div className="ssResultImageWrap">
                    <img
                      className="ssResultImage"
                      src={result.img}
                      alt={`${result.name} result`}
                    />
                  </div>
                  <div className="ssResultBody">
                    <h3 className="ssResultName">{result.name}</h3>
                    <p className="ssResultMetric">
                      <span>{result.label}</span>
                      <strong>{result.value}</strong>
                    </p>
                  </div>
                </article>
              ))}
            </div>
            {hallResults.length > 6 && (
              <div className="ssHallToggleWrap">
                <button
                  type="button"
                  className="ssHallToggleBtn"
                  onClick={() => setShowAllHall((prev) => !prev)}
                >
                  <span>{showAllHall ? "Show Less" : "See More"}</span>
                  <span className="material-symbols-outlined">
                    {showAllHall ? "expand_less" : "expand_more"}
                  </span>
                </button>
              </div>
            )}
          </div>
        </section>

        {/* Full Results */}
        <section className="ssSection ssSectionPadTopSm">
          <div className="ssContainer">
            <div className="ssSectionHead">
              <h2 className="ssSectionTitle">Full Results</h2>
              <p className="ssSectionSub">Complete newspaper-style result highlights.</p>
            </div>

            <div className="ssFullResultGrid">
              {fullResultImages.map((img, index) => (
                <article className="ssFullResultCard" key={img}>
                  <img className="ssFullResultImage" src={img} alt={`Full result ${index + 1}`} />
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Masonry stories */}
        <section className="ssSection ssSectionPadTopSm">
          <div className="ssContainer">
            <div className="ssMasonry">
              {/* Story 1 */}
              <article className="ssStoryCard">
                <div className="ssStoryHead">
                  <img
                    className="ssAvatar"
                    alt="Portrait of smiling female student"
                    data-alt="Portrait of smiling female student"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuD1CYDBd4ctbke1oYKZ7OsHUwo9on0gmx-YTiXSNQdLiX1tc8LC4uOJD_9lTdsGaBrS8eiD6ci0kaB45uCBvwhLvFBnNMf8WuJ9TgwYP2BcdAYyG1CQ7B8ZAvT0FGKM3O98Lk12MS2eAoD9xKaqnbHuJfq37eGHnPHC2y1YWPH_ofLrfW1VF5N2wLRqIg8Y-pevnbmp1ENxgJ94R0a3rau_B01DRExlQ9GAr_YeMzAmXJ8zVcEjKuoljHsZ5v0mpfGI1qv5Lk2Ozyo"
                  />
                  <div className="ssStoryHeadText">
                    <h3 className="ssStoryName">Riya Sharma</h3>
                    <div className="ssStoryMetaRow">
                      <span className="ssPillSmall ssPillRed">AIR 89</span>
                      <span className="ssStoryYear">JEE Adv 2026-27</span>
                    </div>
                  </div>
                </div>

                <p className="ssStoryText">
                  "The faculty at IITSF is simply the best. They focus on building problem-solving
                  skills rather than rote learning. The test series was very close to the actual
                  exam."
                </p>
              </article>

              {/* Story 2 */}
              <article className="ssStoryCard">
                <div className="ssStoryHead">
                  <img
                    className="ssAvatar"
                    alt="Portrait of male student in glasses"
                    data-alt="Portrait of male student in glasses"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuA_RsCQGMRDj0VN0IAFZ7Rhu3Y1BDJg-bnBof7X_nWeEty7pR7aP23tKsnEm7fZ-RkSnTC1AqTF9h0pzbd_Z_Qsn0oej_uw7myNlwsW-Mj57WhCVgcmVXtdbDbj1UX5LZh-ChcrU7EbYiiReePmU1NBjHuP0Ec1qtSOmnYSa4T6l1fIZMHeC3v_QJtigLyVAUICbt6jz5vrkz_h2HyiR_IL946m9ahWZxJFhPkQTR2LRwPIocmU5Sbm5xDF16HnuzGW61yqUYhVK_k"
                  />
                  <div className="ssStoryHeadText">
                    <h3 className="ssStoryName">Arjun Mehta</h3>
                    <div className="ssStoryMetaRow">
                      <span className="ssPillSmall ssPillRed">AIR 104</span>
                      <span className="ssStoryYear">JEE Adv 2026-27</span>
                    </div>
                  </div>
                </div>

                <p className="ssStoryText">
                  "I was weak in Chemistry, but the personalized attention I received helped me
                  turn it into my strength. The study material is exhaustive and covers everything
                  needed."
                </p>
              </article>

              {/* Story 3 (image card) */}
              <article className="ssStoryMediaCard">
                <div
                  className="ssMediaCover"
                  data-alt="Group of students discussing outdoors"
                  style={{
                    backgroundImage:
                      "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAyWk2t5cM3jtW_xM1ukIQqYeaY8KGb0Z4lyI4rQNWZJLEA-vue_wL_CIVF2A_zxEyClndwvFmKLa5A3eS_mFRxwtS51rFUwVCjJongb39BVHXu8neCkTdBdV_oqxOKdXXV8-K0Ykj937Ml9U5fDBFx0IM9bH_rpx2HBkV4MrOdTkZxNsYRbhd5foS-88Qqz8N-fmQiH8Rv8eTr1dX5ymtqeH3fPYOxdcQI4n8loc_3y-2z0rU61ajNpL_wvXj8zid-45CoU3vqVa0')",
                  }}
                />
                <div className="ssMediaBody">
                  <div className="ssMediaTop">
                    <h3 className="ssStoryName">The 'Super 30' Batch</h3>
                    <span className="ssMediaTag">Batch of 2026-27</span>
                  </div>

                  <p className="ssStoryText ssStoryTextMb">
                    "The peer group at IITSF is incredible. Being surrounded by motivated students
                    pushed me to do better every single day."
                  </p>

                  <div className="ssMediaAuthor">
                    <img
                      className="ssTinyAvatar"
                      data-alt="Thumbnail user"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuBYmLtFS43bGdkUI5GV1ZAoVtd_mBoCej_YUpZD_Z9h6bzYWWakcEKXBkAHAalhKul_q_PVjhCOrlcARqOWUKLxqC1v4R0iHyPRm8CkaYMqiC7DEsMytd8YsuydnA4Gi5Lx9f4XV7n0aGSTooDX2fTmTpjCtRoiaqLW6PtSzQde3Wesz130QGMwoG8XEzC6ePKfeHnMpU8VClpGX-FNEgkQY0N5L6le60JGuT7QaiaFx4Mj6e570xCfbwepVvxm4lH1s188nESWltA"
                    />
                    <span className="ssMediaAuthorText">
                      Rohan Das, <span className="ssRedText">AIR 215</span>
                    </span>
                  </div>
                </div>
              </article>

              {/* Story 4 */}
              <article className="ssStoryCard">
                <div className="ssStoryHead">
                  <img
                    className="ssAvatar"
                    alt="Portrait of female student looking confident"
                    data-alt="Portrait of female student looking confident"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDJGTfrohcUmE2gs-3h7Ugp13zqUPM16M2tDWhe66J6ZIFhRusgUj5X-CDWIFSFmSymge1aY09gETwbdWYIIa0NI1Ha5BbFQ3mvuU88_42gEoiPb6zwW1M6S7S1si8k3-5rjQGUszjMsVoh9pXNqnuzmbATJdbOdJAoLCq08v2G3VoiAoFcwQiTzAtQEz41gJ0DUDk51QwARVqmoxmJsiYVRxgmG3YeaI4MFIBCyOoeX8LAyP6UAoKxJ4Ijc0Pvbwm2xOcBRhRcVmk"
                  />
                  <div className="ssStoryHeadText">
                    <h3 className="ssStoryName">Sneha Gupta</h3>
                    <div className="ssStoryMetaRow">
                      <span className="ssPillSmall ssPillRed">AIR 340</span>
                      <span className="ssStoryYear">JEE Main 2026-27</span>
                    </div>
                  </div>
                </div>

                <p className="ssStoryText">
                  "Coming from a small town, I was overwhelmed. The counselors at IITSF guided me
                  through the stress and helped me focus on my goal."
                </p>
              </article>

              {/* CTA tile */}
              <article className="ssBlueTile">
                <div className="ssBlueTileInner">
                  <span className="material-symbols-outlined ssBlueTileIcon">workspace_premium</span>
                  <h3 className="ssBlueTileTitle">Inspired?</h3>
                  <p className="ssBlueTileSub">
                    Join the league of toppers and start your journey today.
                  </p>
                  <button className="ssBlueTileBtn" type="button">
                    Apply for Scholarship Test
                  </button>
                </div>
              </article>

              {/* Story 5 */}
              <article className="ssStoryCard">
                <div className="ssStoryHead">
                  <img
                    className="ssAvatar"
                    alt="Portrait of male student smiling"
                    data-alt="Portrait of male student smiling"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAivvQcEGBxfq-QiblTMAC-0MrVdAtToxzFJQE0dKzmAREKFoabfzZ9_qsn0-cVeOulbBtqQB1FML6-Vp0bUR3pcmLR3d2j9Ym_A00jjg8pKc6_NzXpdVULRDnwoiOWYZOrawIcQceHWW-ChprjxOccD8BiPnTLTHYoL5Sk4Wd5oM5f3z-xUjCyW6TVB3dgQrp5_xuubny_CtjVYzQXNZNF9PLrRG0Zny8FXv-ic6cdRoJBh-g9ZA2MPfd1yqun_oUjH2E409AZc4M"
                  />
                  <div className="ssStoryHeadText">
                    <h3 className="ssStoryName">Vikram Singh</h3>
                    <div className="ssStoryMetaRow">
                      <span className="ssPillSmall ssPillRed">AIR 412</span>
                      <span className="ssStoryYear">JEE Adv 2026-27</span>
                    </div>
                  </div>
                </div>

                <p className="ssStoryText">
                  "The 24/7 library facility was a boon. I could study whenever I felt productive.
                  Thank you IITSF!"
                </p>
              </article>

              {/* Story 6 */}
              <article className="ssStoryCard">
                <div className="ssStoryHead">
                  <img
                    className="ssAvatar"
                    alt="Portrait of female student serious"
                    data-alt="Portrait of female student serious"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBNg43jvlYMdQam4y3JFk_1llAliP8Z0s0RRjQiZsoRiqZh1Cp26Xq2C0Dz9LHTD1EpLm0Dq60rpjtOPCiB2U6U2ROk9qIbpEOWCAkflthyFiZJ998CFS_SNMDvoF1B4FOVcvk4AekMYumc4kfIXreCIY6ihNXNNHUx3wUmmvaet8zerW2FOrh6QAcPY_UiUOALKXann1f3YZa5bHfxZPH_dFohbR0X_RA9LRV2Dnudj5OQv2b_qrMu1Olm0tmbQvk5YLgOXmaURLQ"
                  />
                  <div className="ssStoryHeadText">
                    <h3 className="ssStoryName">Kavya Reddy</h3>
                    <div className="ssStoryMetaRow">
                      <span className="ssPillSmall ssPillRed">AIR 56</span>
                      <span className="ssStoryYear">NEET 2026-27</span>
                    </div>
                  </div>
                </div>

                <p className="ssStoryText">
                  "For medical aspirants, biology is key, but physics is the rank decider. The
                  physics faculty here made the subject so interesting that I scored 170/180 in
                  physics."
                </p>
              </article>
            </div>

            <div className="ssLoadMore">
              <button className="ssLoadBtn" type="button">
                Load More Stories{" "}
                <span className="material-symbols-outlined ssLoadIcon">expand_more</span>
              </button>
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="ssBigCta">
          <div className="ssBigCtaBg" aria-hidden="true">
            <div className="ssGlow ssGlowTop" />
            <div className="ssGlow ssGlowBottom" />
          </div>

          <div className="ssContainer">
            <div className="ssBigCtaInner">
              <h2 className="ssBigCtaTitle">Ready to write your own success story?</h2>
              <p className="ssBigCtaSub">
                Join the next batch at IIT Study Forum and get the guidance you deserve. Admissions
                open for JEE 2026-27.
              </p>

              <div className="ssBigCtaBtns">
                <a className="ssCtaLinkPrimary" href="#">
                  Enroll Now
                </a>
                <a className="ssCtaLinkSecondary" href="#">
                  Talk to a counselor{" "}
                  <span className="material-symbols-outlined ssCtaArrow">arrow_right_alt</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default SuccessStoriesPage;
