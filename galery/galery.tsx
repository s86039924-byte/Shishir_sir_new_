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
    image: "/testimonila_image/galery_1.png",
  },
  {
    id: "g2",
    title: "Focused Class",
    description: "Regular classroom session with faculty guidance.",
    category: "Lectures",
    size: "medium",
    image: "/testimonila_image/galery2.png",
  },
  {
    id: "g3",
    title: "Results Highlight",
    description: "Newspaper coverage of top ranks.",
    category: "Results",
    size: "small",
    image: "/testimonila_image/galery_3.jpg",
  },
  {
    id: "g4",
    title: "Results Feature",
    description: "Print media featuring IITSF achievers.",
    category: "Results",
    size: "small",
    image: "/testimonila_image/galery_4.jpg",
  },
  {
    id: "g5",
    title: "Another Result Highlight",
    description: "Yet another newspaper headline of IITSF ranks.",
    category: "Results",
    size: "medium",
    image: "/testimonila_image/galery_5.jpg",
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

const toYouTubeEmbedUrl = (url: string): string | null => {
  try {
    const parsed = new URL(url);
    const host = parsed.hostname.replace(/^www\./, "");

    if (host === "youtu.be") {
      const id = parsed.pathname.slice(1);
      return id ? `https://www.youtube.com/embed/${id}?rel=0` : null;
    }

    if (host === "youtube.com" || host === "m.youtube.com") {
      const videoId = parsed.searchParams.get("v");
      if (videoId) {
        return `https://www.youtube.com/embed/${videoId}?rel=0`;
      }

      const parts = parsed.pathname.split("/").filter(Boolean);
      if (parts[0] === "shorts" && parts[1]) {
        return `https://www.youtube.com/embed/${parts[1]}?rel=0`;
      }
      if (parts[0] === "embed" && parts[1]) {
        return `https://www.youtube.com/embed/${parts[1]}?rel=0`;
      }
    }
  } catch {
    return null;
  }

  return null;
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
            const imageSrc = item.image;
            const className = getCardClassName(item);
            if (item.video) {
              const embedUrl = toYouTubeEmbedUrl(item.video);
              return (
                <article className={className} key={item.id}>
                  {embedUrl ? (
                    <iframe
                      className="galVideoFrame"
                      src={embedUrl}
                      title={item.title}
                      loading="lazy"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                    />
                  ) : (
                    <a className="galVideoLinkFallback" href={item.video} target="_blank" rel="noreferrer">
                      <img className="galImg" alt={item.title} src={imageSrc} />
                    </a>
                  )}
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
