import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="footer py-5 text-center bg-night-blue text-white">
      <p className="text-sm">
        &copy; {currentYear} Copyright. Made by{" "}
        <a href="/" className="text-sand-tan font-medium underline mx-2">
          Suganya anbazhagan.
        </a>
      </p>
    </footer>
  );
};

export default Footer;
