// Navbar.jsx
import React, { useState, useEffect } from "react";
import "./Navbar.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
useEffect(() => {
  const handleClickOutside = (e) => {
    if (
      isOpen &&
      !e.target.closest(".menu") &&
      !e.target.closest(".hamburger")
    ) {
      setIsOpen(false);
    }
  };

  document.addEventListener("click", handleClickOutside);

  return () => {
    document.removeEventListener("click", handleClickOutside);
  };
}, [isOpen]);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleAnchorClick = (e, id) => {
    e.preventDefault();
    setIsOpen(false); // mobilde menüyü kapat (isteğe bağlı)

    const el = document.getElementById(id);
    if (!el) return;

    // navbar yüksekliğini al (bulamazsa 120 kullan)
    const nav = document.querySelector(".navbar");
    const navHeight = nav ? nav.getBoundingClientRect().height : 120;

    const elementTop = el.getBoundingClientRect().top + window.pageYOffset;
    const offset = 10; // navbar ile içerik arasında ekstra boşluk
    window.scrollTo({
      top: elementTop - navHeight - offset,
      behavior: "smooth",
    });
  };

  return (
    <nav className="navbar">
      {/* Logo resmi */}
      <div className="logo">
    <img src="/logo2.png" alt="Logo" />
      </div>

      <div className={`menu ${isOpen ? "open" : ""}`}>
        <a href="#hakkimda" onClick={(e) => handleAnchorClick(e, "hakkimda")}>Hakkımda</a>
        <a href="#hizmetler" onClick={(e) => handleAnchorClick(e, "hizmetler")}>Hizmetler</a>
        <a href="#sikca-sorular" onClick={(e) => handleAnchorClick(e, "sikca-sorular")}>Sıkça Sorular</a>
        <a href="#iletisim" onClick={(e) => handleAnchorClick(e, "iletisim")}>İletişim</a>
      </div>

      <div className="hamburger" onClick={toggleMenu}>
        &#9776;
      </div>
    </nav>
  );
}

export default Navbar;
