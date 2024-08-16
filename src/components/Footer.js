import React from "react";

import "../styles.css";

export default function Footer() {
  const currYear = new Date().getFullYear();
  return (
    <div>
      <footer className="footer">
        <p className="footer-text">
          ©{currYear} movieDux, All rights reserved.
        </p>
      </footer>
    </div>
  );
}
