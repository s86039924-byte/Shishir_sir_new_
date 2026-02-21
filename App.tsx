import React, { useEffect, useMemo, useState } from "react";
import IitsfHome from "./home/home";
import CoursesPage from "./course/coursePage";
import ScholarshipExamPage from "./scholrship/scholorship";
import FacultyPage from "./faculty/faculty";
import SuccessStoriesPage from "./tetimonila/testimonila";
import GalleryPage from "./galery/galery";
import TermsPage from "./terms/terms";
import Havbar from "./havbar/Havbar";
import DostPage from "./dost/page";
import WhyUsPage from "./whyus/whyUs";
import "./App/app-shell.css";

type PageKey =
  | "home"
  | "courses"
  | "scholarship"
  | "faculty"
  | "testimonials"
  | "gallery"
  | "terms"
  | "dost"
  | "whyus";

type NavItem = { key: PageKey; label: string };

const pageFromHash = (hash: string): PageKey => {
  const key = hash.replace(/^#\/?/, "").toLowerCase();
  if (
    key === "home" ||
    key === "courses" ||
    key === "scholarship" ||
    key === "faculty" ||
    key === "testimonials" ||
    key === "gallery" ||
    key === "terms" ||
    key === "dost" ||
    key === "whyus"
  ) {
    return key;
  }
  return "home";
};

const App: React.FC = () => {
  const [page, setPage] = useState<PageKey>(pageFromHash(window.location.hash));

  useEffect(() => {
    const onHashChange = () => setPage(pageFromHash(window.location.hash));
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [page]);

  const CurrentPage = useMemo(() => {
    switch (page) {
      case "courses":
        return CoursesPage;
      case "scholarship":
        return ScholarshipExamPage;
      case "faculty":
        return FacultyPage;
      case "testimonials":
        return SuccessStoriesPage;
      case "gallery":
        return GalleryPage;
      case "terms":
        return TermsPage;
      case "dost":
        return DostPage;
      case "whyus":
        return WhyUsPage;
      case "home":
      default:
        return IitsfHome;
    }
  }, [page]);

  const navItems: NavItem[] = [
    { key: "home", label: "Home" },
    { key: "whyus", label: "Why Us" },
    { key: "courses", label: "Courses" },
    { key: "scholarship", label: "Scholarship" },
    { key: "faculty", label: "Faculty" },
    { key: "testimonials", label: "Testimonials" },
    { key: "gallery", label: "Gallery" },
    { key: "dost", label: "Dost" },
  ];

  return (
    <div className="shell">
      {page !== "dost" && <Havbar navItems={navItems} activePage={page} />}

      <main className="appContent">
        <CurrentPage />
      </main>

      {page !== "dost" && (
        <footer className="shellFooter">
          <div className="shellFooterInner">
            <div className="shellFooterGrid">
              <div className="shellFooterBrandCol">
                <img
                  className="shellFooterLogo"
                  src="/logo/IIT_study_forum.jpg"
                  alt="IIT Study Forum logo"
                />
                <p className="shellFooterDesc">
                  Premier coaching institute for IIT-JEE, NEET, Olympiad, and foundation programs.
                </p>
                <h3 className="shellFooterTitle">Contact Info</h3>
                <div className="shellFooterContact">
                  <a href="mailto:info@iitstudyforum.com">info@iitstudyforum.com</a>
                  <a href="tel:+919719275052">+91 97192 75052</a>
                  <a
                    href="https://www.facebook.com/iit.studyforum/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Facebook
                  </a>
                  <p>Address: Opposite, Jain College Rd, Pradyuman Nagar, Saharanpur, Uttar Pradesh 247001</p>
                </div>
              </div>

              <div className="shellFooterCol">
                <h3 className="shellFooterTitle">Quick Links</h3>
                <div className="shellFooterLinks">
                  <a href="#/courses">Courses</a>
                  <a href="#/testimonials">Results</a>
                  <a href="#/scholarship">Scholarship</a>
                  <a href="#/faculty">Faculty</a>
                  <a href="#/gallery">Gallery</a>
                </div>
              </div>

              <div className="shellFooterCol">
                <h3 className="shellFooterTitle">Courses</h3>
                <div className="shellFooterLinks">
                  <a href="#/courses">Foundation</a>
                  <a href="#/courses">Olympiad</a>
                  <a href="#/courses">NEET</a>
                  <a href="#/courses">IIT-JEE</a>
                </div>
              </div>

              <div className="shellFooterCol">
                <h3 className="shellFooterTitle">Legal</h3>
                <div className="shellFooterLinks">
                  <a href="#/terms">Terms &amp; Conditions</a>
                </div>
              </div>
            </div>
            <div className="shellFooterBottom">
              <p>© 2026 IIT Study Forum. All rights reserved.</p>
            </div>
          </div>
        </footer>
      )}
    </div>
  );
};

export default App;
