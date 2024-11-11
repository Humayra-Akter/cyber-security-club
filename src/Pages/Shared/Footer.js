import React from "react";

const Footer = () => {
  return (
    <footer class="footer footer-center p-4 bg-gradient-to-r from-gray-900 via-[#1c6f6a] to-transparent rounded-t-xl text-white">
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
