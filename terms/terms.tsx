import React, { useMemo, useState } from "react";
import "./terms.css";

type TocItem = { id: string; label: string; icon: string; num: string };

const TermsConditionsPage: React.FC = () => {
  const toc: TocItem[] = useMemo(
    () => [
      { id: "introduction", label: "Introduction", icon: "info", num: "1" },
      { id: "admissions", label: "Admissions Policy", icon: "assignment_ind", num: "2" },
      { id: "fees", label: "Fee Structure", icon: "payments", num: "3" },
      { id: "refund", label: "Refund Policy", icon: "currency_exchange", num: "4" },
      { id: "attendance", label: "Attendance", icon: "event_available", num: "5" },
      { id: "conduct", label: "Code of Conduct", icon: "gavel", num: "6" },
      { id: "ip", label: "Intellectual Property", icon: "copyright", num: "7" },
    ],
    []
  );

  const [jumpTo, setJumpTo] = useState(`#${toc[0].id}`);

  const handleJump = (value: string) => {
    setJumpTo(value);
    const id = value.replace("#", "");
    const el = document.getElementById(id);
    if (el) {
      const topOffset = 110;
      const top = el.getBoundingClientRect().top + window.scrollY - topOffset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <div className="tcPage">
      <main className="tcMain">
        {/* Top title bar */}
        <section className="tcTopBar">
          <div className="tcContainer tcTopInner">
            <nav className="tcBreadcrumb" aria-label="Breadcrumb">
              <ol className="tcCrumbList">
                <li className="tcCrumbItem">
                  <a className="tcCrumbLink" href="#">
                    <span className="material-symbols-outlined tcCrumbIcon">home</span>
                    Home
                  </a>
                </li>
                <li className="tcCrumbSep" aria-hidden="true">
                  <span className="material-symbols-outlined tcSepIcon">chevron_right</span>
                </li>
                <li className="tcCrumbItem tcCrumbCurrent">Terms and Conditions</li>
              </ol>
            </nav>

            <h1 className="tcTitle">Terms and Conditions</h1>
            <p className="tcSubtitle">
              Please read these terms carefully before enrolling in our courses. Last updated:
              October 24, 2026-27.
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="tcBody">
          <div className="tcContainer">
            <div className="tcLayout">
              {/* Left aside */}
              <aside className="tcAside">
                <div className="tcAsideSticky">
                  <div className="tcSearchBox">
                    <span className="material-symbols-outlined tcSearchIcon">search</span>
                    <input className="tcSearchInput" placeholder="Search terms..." type="text" />
                  </div>

                  <nav className="tcToc">
                    <h3 className="tcTocTitle">Table of Contents</h3>
                    <ul className="tcTocList">
                      {toc.map((item) => {
                        const target = `#${item.id}`;
                        const active = jumpTo === target;
                        return (
                          <li key={item.id} className="tcTocItem">
                            <button
                              type="button"
                              className={`tcTocLink ${active ? "isActive" : ""}`}
                              onClick={() => handleJump(target)}
                            >
                              <span className="material-symbols-outlined tcTocIcon">
                                {item.icon}
                              </span>
                              {item.num}. {item.label}
                            </button>
                          </li>
                        );
                      })}
                    </ul>
                  </nav>

                  <div className="tcAsideFooter">
                    <button className="tcBtn tcBtnOutline" type="button">
                      <span className="material-symbols-outlined tcBtnIcon">download</span>
                      Download PDF Version
                    </button>
                  </div>
                </div>
              </aside>

              {/* Mobile jump select */}
              <div className="tcMobileJump">
                <label className="tcJumpLabel" htmlFor="tc-jump">
                  Jump to section
                </label>
                <select
                  id="tc-jump"
                  className="tcJumpSelect"
                  value={jumpTo}
                  onChange={(e) => handleJump(e.target.value)}
                >
                  <option value="#introduction">1. Introduction</option>
                  <option value="#admissions">2. Admissions Policy</option>
                  <option value="#fees">3. Fee Structure &amp; Payments</option>
                  <option value="#refund">4. Refund Policy</option>
                  <option value="#attendance">5. Attendance &amp; Leaves</option>
                  <option value="#conduct">6. Code of Conduct</option>
                  <option value="#ip">7. Intellectual Property</option>
                </select>
              </div>

              {/* Article */}
              <article className="tcArticle">
                {/* Applicant Instructions */}
                <section className="tcSection" id="applicant-instructions">
                  <div className="tcSectionHead">
                    <span className="tcStep">0</span>
                    <h2 className="tcH2">Terms &amp; Conditions (Instructions for the Applicants)</h2>
                  </div>

                  <div className="tcProse">
                    <ul className="tcList">
                      <li>
                        All communications regarding enrollment for any program must be addressed to
                        the Counsellor, IIT Study Forum, and sent to our respective centers.
                      </li>
                      <li>
                        Guardian/Parent shall be responsible for providing correct information at
                        admission and for ensuring fee payment and regular attendance/revision.
                      </li>
                      <li>
                        Every student must attend classes regularly and punctually. Latecomers are
                        not allowed to attend classes.
                      </li>
                      <li>
                        If a student remains absent for more than two days, a leave application
                        explaining the reason, duly signed by parents, must be submitted.
                      </li>
                      <li>
                        Every student must attend classes in assigned batches only. Once allotted,
                        batch change is not possible under any circumstances.
                      </li>
                      <li>
                        Students must keep the study schedule on topmost priority and read notice
                        board announcements regularly.
                      </li>
                      <li>
                        Students must produce valid identity card while entering institute/test
                        premises. Students without ID will not be allowed in class/test.
                      </li>
                      <li>
                        A fine of Rs. 20 per day is charged for students who forget to bring the
                        ID card. Duplicate ID charges are Rs. 50 per case.
                      </li>
                      <li>
                        Students are expected to behave in a decent and orderly manner on premises.
                      </li>
                      <li>
                        No Guardian/Parent can meet a student directly in the classroom. Such
                        requests are handled at reception only.
                      </li>
                      <li>
                        Students must strictly follow fee payment schedule. Non-payment of balance
                        fee by due date (for installment cases) may lead to cancellation.
                      </li>
                      <li>
                        Any student caught adopting unfair practice (copying) during admission cum
                        scholarship test is liable for immediate removal and no fee refund.
                      </li>
                      <li>
                        Admission cum scholarship test paper and answer sheet are the property of IIT
                        Study Forum and are not returned under any circumstance.
                      </li>
                      <li>
                        The marks allotted are final and no dispute/claim will be entertained.
                      </li>
                      <li>
                        Any student who has appeared in an admission cum scholarship test at any
                        center (online/offline) in the past cannot reappear.
                      </li>
                      <li>
                        Student discipline and performance are monitored regularly. Students below
                        minimum acceptable standards may be asked to withdraw from institute.
                      </li>
                      <li>
                        No fee (part/full) will be refunded in such withdrawal/disciplinary cases.
                      </li>
                      <li>
                        Students are expected to stay sincere during periodic tests. Copying in any
                        test can lead to expulsion without exception.
                      </li>
                      <li>
                        Responsibility of forwarding entrance examination forms to examining body lies
                        with the student/guardian.
                      </li>
                    </ul>
                  </div>
                </section>

                <div className="tcDivider" />

                {/* 1 */}
                <section className="tcSection" id="introduction">
                  <div className="tcSectionHead">
                    <span className="tcStep">1</span>
                    <h2 className="tcH2">Introduction</h2>
                  </div>

                  <div className="tcProse">
                    <p>
                      Welcome to IIT Study Forum (IITSF). By enrolling in our courses, accessing our
                      website, or using our study materials, you agree to comply with and be bound
                      by the following terms and conditions. These terms govern your relationship
                      with IITSF and your use of our educational services.
                    </p>
                    <p>
                      If you do not agree with any part of these terms, please do not proceed with
                      enrollment. IITSF reserves the right to modify these terms at any time without
                      prior notice. Continued use of our services following any changes constitutes
                      acceptance of those changes.
                    </p>
                  </div>
                </section>

                <div className="tcDivider" />

                {/* 2 */}
                <section className="tcSection" id="admissions">
                  <div className="tcSectionHead">
                    <span className="tcStep">2</span>
                    <h2 className="tcH2">Admissions Policy</h2>
                  </div>

                  <div className="tcProse">
                    <p>
                      Admission to IITSF courses is granted based on merit and availability of
                      seats. We reserve the right to deny admission to any applicant at our sole
                      discretion.
                    </p>

                    <ul className="tcList">
                      <li>
                        <strong>2.1 Eligibility:</strong> Students must meet the minimum academic
                        criteria specified for each course (e.g., Class 10th marks for JEE
                        foundation batches).
                      </li>
                      <li>
                        <strong>2.2 Documentation:</strong> Valid identification (Aadhar card,
                        School ID) and recent passport-sized photographs must be submitted during
                        registration.
                      </li>
                      <li>
                        <strong>2.3 Batch Allocation:</strong> Batch timing and center allocation
                        are subject to availability. While we try to accommodate preferences, final
                        decisions rest with the administration.
                      </li>
                    </ul>
                  </div>
                </section>

                <div className="tcDivider" />

                {/* 3 */}
                <section className="tcSection" id="fees">
                  <div className="tcSectionHead">
                    <span className="tcStep">3</span>
                    <h2 className="tcH2">Fee Structure &amp; Payments</h2>
                  </div>

                  <div className="tcProse">
                    <p>
                      All fees must be paid in accordance with the payment schedule provided at the
                      time of admission. Failure to pay fees by the due date may result in
                      suspension of classes.
                    </p>

                    <div className="tcInfoBox">
                      <h3 className="tcH3 tcH3Blue">Payment Methods</h3>
                      <p className="tcSmall">
                        We accept payments via Demand Draft, Cheque, NEFT/RTGS, and Online Payment
                        Gateway.
                      </p>

                      <h3 className="tcH3 tcH3Red">Late Fees</h3>
                      <p className="tcSmall">
                        A late fee of ₹500 per week will be charged for payments made after the due
                        date. If fees remain unpaid for more than 30 days, enrollment will be
                        cancelled.
                      </p>
                    </div>
                  </div>
                </section>

                <div className="tcDivider" />

                {/* 4 */}
                <section className="tcSection" id="refund">
                  <div className="tcSectionHead">
                    <span className="tcStep">4</span>
                    <h2 className="tcH2">Refund Policy</h2>
                  </div>

                  <div className="tcProse">
                    <p className="tcLead">
                      Please read our refund policy carefully. Refunds are processed only under
                      specific conditions.
                    </p>

                    <div className="tcTableWrap">
                      <table className="tcTable">
                        <thead>
                          <tr>
                            <th>Time Frame</th>
                            <th>Refund Percentage</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>Within 7 days of batch start</td>
                            <td>100% of Tuition Fee (Reg. fee deducted)</td>
                          </tr>
                          <tr>
                            <td>8 to 15 days of batch start</td>
                            <td>50% of Tuition Fee</td>
                          </tr>
                          <tr>
                            <td>After 15 days</td>
                            <td className="tcNoRefund">No Refund</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>

                    <p className="tcNote">
                      * Registration fees and study material costs are non-refundable under any
                      circumstances.
                    </p>
                  </div>
                </section>

                <div className="tcDivider" />

                {/* 5 */}
                <section className="tcSection" id="attendance">
                  <div className="tcSectionHead">
                    <span className="tcStep">5</span>
                    <h2 className="tcH2">Attendance &amp; Leaves</h2>
                  </div>

                  <div className="tcProse">
                    <p>Consistent attendance is crucial for success in competitive exams.</p>

                    <ul className="tcList">
                      <li>
                        Students must maintain a minimum attendance of <strong>75%</strong> to be
                        eligible for the All India Test Series (AITS).
                      </li>
                      <li>
                        Leave applications must be submitted by parents via the parent portal or
                        email at least 24 hours in advance.
                      </li>
                      <li>
                        Unexplained absence for more than 3 consecutive days will lead to a call to
                        the registered parent/guardian.
                      </li>
                    </ul>
                  </div>
                </section>

                <div className="tcDivider" />

                {/* 6 */}
                <section className="tcSection" id="conduct">
                  <div className="tcSectionHead">
                    <span className="tcStep">6</span>
                    <h2 className="tcH2">Code of Conduct</h2>
                  </div>

                  <div className="tcCardGrid">
                    <div className="tcCard tcCardDanger">
                      <div className="tcCardRow">
                        <span className="material-symbols-outlined tcCardIcon tcRed">block</span>
                        <div>
                          <h4 className="tcH4">Anti-Ragging</h4>
                          <p className="tcCardText">
                            Zero tolerance policy towards ragging, bullying, or harassment.
                            Immediate expulsion will follow.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="tcCard tcCardInfo">
                      <div className="tcCardRow">
                        <span className="material-symbols-outlined tcCardIcon tcBlue">
                          smartphone
                        </span>
                        <div>
                          <h4 className="tcH4">Device Usage</h4>
                          <p className="tcCardText">
                            Mobile phones must be switched off during classes. Tablets are allowed
                            only for digital notes.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="tcCard tcCardInfo">
                      <div className="tcCardRow">
                        <span className="material-symbols-outlined tcCardIcon tcBlue">
                          menu_book
                        </span>
                        <div>
                          <h4 className="tcH4">Study Material</h4>
                          <p className="tcCardText">
                            Materials provided are for personal use only. Sharing or selling them is
                            prohibited.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="tcCard tcCardInfo">
                      <div className="tcCardRow">
                        <span className="material-symbols-outlined tcCardIcon tcBlue">
                          handshake
                        </span>
                        <div>
                          <h4 className="tcH4">Discipline</h4>
                          <p className="tcCardText">
                            Students must maintain decorum. Disrespect towards faculty or staff will
                            not be tolerated.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                <div className="tcDivider" />

                {/* 7 */}
                <section className="tcSection" id="ip">
                  <div className="tcSectionHead">
                    <span className="tcStep">7</span>
                    <h2 className="tcH2">Intellectual Property</h2>
                  </div>

                  <div className="tcProse">
                    <p>
                      All content provided by IITSF, including but not limited to study modules,
                      test papers, video lectures, and online content, is the intellectual property
                      of IIT Study Forum.
                    </p>

                    <p className="tcWarning">
                      <span className="tcWarnStrong">Warning:</span> Unauthorized recording of
                      lectures, reproduction of notes, or distribution of login credentials to
                      third parties is strictly prohibited and may lead to legal action and
                      cancellation of admission without refund.
                    </p>
                  </div>
                </section>
              </article>
            </div>
          </div>
        </section>
      </main>

    </div>
  );
};

export default TermsConditionsPage;
