import React from "react";

const Footer = () => {
  return (
    <footer class="footer footer-center p-4 bg-gradient-to-br from-gray-800 to-green-700 rounded-lg text-white">
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
