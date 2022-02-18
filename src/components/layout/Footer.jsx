import React from "react";

const Footer = () => {
  const footerYear = new Date().getFullYear();
  return (
    <footer className="footer p-18 bg-gray-700 p-4 text-primary-content footer-center">
      <p className="text-blue-100">Copyright &copy; {footerYear} All rights reserved</p>
    </footer>
  );
};

export default Footer;
