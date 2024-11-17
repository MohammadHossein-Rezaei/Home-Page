import { useState } from "react";
import "./styles.css";
type Props = {};

export default function HeaderLayout({}: Props) {
  const [isMobile] = useState<boolean>(window.innerWidth <= 675);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <img className="logo" src="/public/images/logo.svg" alt="logo" />
      {isMobile ? (
        <>
          <img
            className="menu-mobile"
            src="/public/images/icon-menu.svg"
            alt="menu"
            onClick={toggleMenu}
          />

          {isMenuOpen && (
            <div className="header-moblie-list-container">
              <img
                onClick={toggleMenu}
                className="delete"
                src="/public/images/icon-menu-close.svg"
                alt="delete"
              />
              <ul className="header-moblie-list">
                <li className="header-mobile-list-item">Home</li>
                <li className="header-mobile-list-item">New</li>
                <li className="header-mobile-list-item">Popular</li>
                <li className="header-mobile-list-item">Trending</li>
                <li className="header-mobile-list-item">Categories</li>
              </ul>
            </div>
          )}
        </>
      ) : (
        <ul className="header-list">
          <li className="header-list-item">Home</li>
          <li className="header-list-item">New</li>
          <li className="header-list-item">Popular</li>
          <li className="header-list-item">Trending</li>
          <li className="header-list-item">Categories</li>
        </ul>
      )}
    </header>
  );
}
