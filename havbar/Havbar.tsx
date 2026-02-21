import React, { useState } from "react";
import "./havbar.css";

type NavItem = { key: string; label: string };

type HavbarProps = {
  navItems: NavItem[];
  activePage: string;
};

const Havbar: React.FC<HavbarProps> = ({ navItems, activePage }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="shellNav">
      <div className="shellNavInner">
        <a className="shellBrand" href="#/home" aria-label="IIT Study Forum Home">
          <span className="shellBrandLogoFrame">
            <img className="shellBrandLogo" src="/logo/IIT_study_forum.jpg" alt="IIT Study Forum logo" />
          </span>
          <span className="shellBrandText">IIT Study Forum</span>
        </a>

        <button
          type="button"
          className={`shellMenuBtn${menuOpen ? " shellMenuBtnOpen" : ""}`}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          <span />
          <span />
          <span />
        </button>

        <a className="shellDostQuick" href="#/dost">
          Dost
        </a>

        <nav className="shellLinks">
          {navItems.map((item) => (
            <a
              key={item.key}
              href={`#/${item.key}`}
              className={`shellLink${item.key === "dost" ? " shellLinkDost" : ""}${
                activePage === item.key ? " shellLinkActive" : ""
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>

      <div
        className={`shellDrawerBackdrop${menuOpen ? " shellDrawerBackdropOpen" : ""}`}
        onClick={() => setMenuOpen(false)}
      />

      <aside className={`shellDrawer${menuOpen ? " shellDrawerOpen" : ""}`} aria-hidden={!menuOpen}>
        <div className="shellDrawerHead">
          <span>Menu</span>
          <button type="button" className="shellDrawerClose" onClick={() => setMenuOpen(false)}>
            ✕
          </button>
        </div>
        <nav className="shellDrawerLinks">
          {navItems.map((item) => (
            <a
              key={item.key}
              href={`#/${item.key}`}
              className={`shellDrawerLink${item.key === "dost" ? " shellDrawerLinkDost" : ""}${
                activePage === item.key ? " shellDrawerLinkActive" : ""
              }`}
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </aside>
    </header>
  );
};

export default Havbar;
