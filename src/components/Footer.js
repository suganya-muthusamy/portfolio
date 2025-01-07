import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="footer py-5 text-center bg-gray-700 text-white">
      <p className="text-sm">
        &copy; {currentYear} Copyright. Made by{" "}
        <a href="/" className="text-lighter-green font-medium underline mx-2">
          Suganya Anbazhagan.
        </a>
      </p>
    </footer>
  );
};

export default Footer;
