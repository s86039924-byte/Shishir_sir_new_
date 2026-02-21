import React, { useMemo, useState } from "react";
import "./galery.css";

type GalleryItem = {
  id: string;
  title: string;
  description: string;
  category: "Events" | "Lectures" | "Results";
  size: "large" | "medium" | "small";
  image: string;
  video?: string;
};

const galleryItems: GalleryItem[] = [
  {
    id: "g1",
    title: "Class Celebration",
    description: "Students celebrating a milestone together.",
    category: "Events",
    size: "large",
    image: "https://drive.google.com/file/d/1qdBbTUC8xXd5ooeyu3ttf2pUOQrfnEgL/view?usp=sharing",
  },
  {
    id: "g2",
    title: "Focused Class",
    description: "Regular classroom session with faculty guidance.",
    category: "Lectures",
    size: "medium",
    image: "https://drive.google.com/file/d/1nWgn6lx2hbUveFitJz4WK7ZanFH0RNCW/view?usp=sharing",
  },
  {
    id: "g3",
    title: "Results Highlight",
    description: "Newspaper coverage of top ranks.",
    category: "Results",
    size: "small",
    image: "https://drive.google.com/file/d/1s1L4dJ3Na_6uFuEA7TUEQIRBZLwnyVwt/view?usp=sharing",
  },
  {
    id: "g4",
    title: "Results Feature",
    description: "Print media featuring IITSF achievers.",
    category: "Results",
    size: "small",
    image: "https://drive.google.com/file/d/1iFBmGEsQEtqonosiKtKHg6SCZ77lj6yi/view?usp=sharing",
  },
  {
    id: "g5",
    title: "Another Result Highlight",
    description: "Yet another newspaper headline of IITSF ranks.",
    category: "Results",
    size: "medium",
    image: "https://drive.google.com/file/d/12mh7d_dsveTQFoZfF86k32fvermuugXC/view?usp=sharing",
  },
  {
    id: "g6",
    title: "Chemistry Strategy Session",
    description: "Snippets from our mentor explaining exam frameworks.",
    category: "Lectures",
    size: "medium",
    image: "https://img.youtube.com/vi/ss1G8vNILH0/hqdefault.jpg",
    video: "https://youtu.be/ss1G8vNILH0",
  },
  {
    id: "g7",
    title: "Physics Concept Capsule",
    description: "Visual explanation to build strong fundamentals.",
    category: "Lectures",
    size: "small",
    image: "https://img.youtube.com/vi/eyvXBZAmmNw/hqdefault.jpg",
    video: "https://youtu.be/eyvXBZAmmNw",
  },
  {
    id: "g8",
    title: "Maths Marathon Snippet",
    description: "See how we drill problem solving in class.",
    category: "Lectures",
    size: "small",
    image: "https://img.youtube.com/vi/vBXQzS18B1E/hqdefault.jpg",
    video: "https://youtu.be/vBXQzS18B1E",
  },
  {
    id: "g9",
    title: "Rapid Tricks Short",
    description: "Quick doubt-solving hack from the mentors.",
    category: "Lectures",
    size: "small",
    image: "https://img.youtube.com/vi/4iSZY1TqloM/hqdefault.jpg",
    video: "https://youtube.com/shorts/4iSZY1TqloM",
  },
  {
    id: "g10",
    title: "Motivation Byte",
    description: "Short push to keep aspirants focused.",
    category: "Lectures",
    size: "small",
    image: "https://img.youtube.com/vi/iAd1XRqEJCE/hqdefault.jpg",
    video: "https://youtube.com/shorts/iAd1XRqEJCE",
  },
];

const toDriveImageUrl = (url: string): string => {
  const match = url.match(/\/d\/([^/]+)/);
  if (!match) return url;
  return `https://drive.google.com/thumbnail?id=${match[1]}&sz=w1600`;
};

const getCardClassName = (item: GalleryItem): string => {
  if (item.size === "large") return "galCard galCardBig";
  if (item.size === "medium") return "galCard galCardWide";
  return `galCard galCardSquare${item.video ? " galCardVideoSmall" : ""}`;
};

const GalleryPage: React.FC = () => {
  const [tab, setTab] = useState<"photos" | "videos">("photos");
  const visibleItems = useMemo(
    () => galleryItems.filter((item) => (tab === "photos" ? !item.video : Boolean(item.video))),
    [tab]
  );

  return (
    <div className="galPage">
      {/* Main */}
      <main className="galMain">
        {/* Top heading row */}
        <div className="galTopRow">
          <div className="galIntro">
            <h2 className="galTitle">Life at IITSF</h2>
            <p className="galSubtitle">
              Experience the vibrant campus culture, focused learning environment, and the moments
              that define our journey towards excellence at IIT Study Forum.
            </p>
          </div>

          <div className="galSwitch">
            <button
              className={`galSwitchBtn${tab === "photos" ? " galSwitchBtnActive" : ""}`}
              type="button"
              onClick={() => setTab("photos")}
            >
              Photos
              {tab === "photos" ? <span className="galSwitchUnderline" /> : null}
            </button>
            <button
              className={`galSwitchBtn${tab === "videos" ? " galSwitchBtnActive" : ""}`}
              type="button"
              onClick={() => setTab("videos")}
            >
              Videos
              {tab === "videos" ? <span className="galSwitchUnderline" /> : null}
            </button>
          </div>
        </div>

        {/* Category pills */}
        <div className="galPills">
          <button className="galPill galPillActive" type="button">
            All
          </button>
          <button className="galPill" type="button">
            Lectures
          </button>
          <button className="galPill" type="button">
            Events
          </button>
          <button className="galPill" type="button">
            Results
          </button>
        </div>

        {/* Grid */}
        <section className="galGrid">
          {visibleItems.map((item) => {
            const imageSrc = toDriveImageUrl(item.image);
            const className = getCardClassName(item);
            if (item.video) {
              return (
                <article className={className} key={item.id}>
                  <img className="galImg" alt={item.title} src={imageSrc} />
                  <div className="galVideoOverlay" />
                  <a className="galPlayWrap" href={item.video} target="_blank" rel="noreferrer">
                    <div className={`galPlayBtn${item.size === "small" ? " galPlayBtnSmall" : ""}`}>
                      <span className="material-symbols-outlined">play_arrow</span>
                    </div>
                  </a>
                  <div className={`galTime${item.size === "small" ? " galTimeSmall" : ""}`}>
                    {item.size === "small" ? "Short" : "Video"}
                  </div>
                  <div className="galBadge">{item.category}</div>
                  <div className={`${item.size === "small" ? "galSmallBottom" : "galWideBottom"}`}>
                    <p className={`${item.size === "small" ? "galSmallTitle" : "galWideTitle"}`}>
                      {item.title}
                    </p>
                    <p className={`${item.size === "small" ? "galSmallSub" : "galWideSub"}`}>
                      {item.description}
                    </p>
                  </div>
                </article>
              );
            }

            if (item.size === "large") {
              return (
                <article className={className} key={item.id}>
                  <img className="galImg" alt={item.title} src={imageSrc} />
                  <div className="galBigOverlay" />
                  <div className="galBigContent">
                    <span className="galTag galTagRed">{item.category}</span>
                    <h3 className="galBigTitle">{item.title}</h3>
                    <p className="galBigText">{item.description}</p>
                  </div>
                </article>
              );
            }

            return (
              <article className={className} key={item.id}>
                <img className="galImg" alt={item.title} src={imageSrc} />
                <div className="galHoverOverlay" />
                <div className="galHoverText">
                  <p className="galHoverTitle">{item.title}</p>
                  <p className="galHoverSub">{item.category}</p>
                </div>
              </article>
            );
          })}
        </section>

        {/* Load More */}
        <div className="galLoadMoreWrap">
          <button className="galLoadMoreBtn" type="button">
            <span>Load More</span>
            <span className="material-symbols-outlined galLoadMoreIcon">expand_more</span>
          </button>
        </div>
      </main>

    </div>
  );
};

export default GalleryPage;
