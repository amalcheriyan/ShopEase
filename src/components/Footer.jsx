import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="mb-0 text-center">
        <div className="d-flex align-items-center justify-content-center pb-2">
          <div className="col-md-6">
            <p className="mb-1 mb-md-0">
              Made with ❤️ by{" "}
              <a
                href="https://amalcheriyan.netlify.app/"
                className="text-decoration-underline text-dark fs-6"
                target="_blank"
                rel="noreferrer"
              >
                Amal Cheriyan
              </a>
            </p>
            <a
              className="text-dark fs-2"
              href="https://github.com/amalcheriyan"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa fa-github"></i>
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
