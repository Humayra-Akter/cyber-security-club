import React from "react";

const Footer = () => {
  return (
    <footer class="footer footer-center p-4 bg-gradient-to-r from-secondary to-primary text-base-content">
      <div>
        <p>
          Copyright ©{new Date().getFullYear()}- All right reserved by ACME
          Industries Ltd
        </p>
      </div>
    </footer>
  );
};

export default Footer;
