import { Col } from "react-bootstrap";
import { useState, useEffect } from "react";


const ProjectCard = ({ title, description, imgUrl, githubLink }) => {
  
const [isMobile, setIsMobile] = useState(false);
useEffect(() => {
  const handleResize = () => {
    setIsMobile(window.innerWidth < 992);
  };

  handleResize(); // Check the initial screen width on component mount

  window.addEventListener("resize", handleResize); // Add event listener to track screen width changes

  return () => {
    window.removeEventListener("resize", handleResize); // Clean up the event listener on component unmount
  };
}, []);
  return (
    <Col sm={6} md={4}>
      <div className="proj-imgbx">
        <img className="proj-img" src={imgUrl} alt="" />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          <br /> <br />
          {githubLink ? (
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="proj-github"
            >
              View on github
            </a>
          ) : (
            ""
          )}
        </div>
      </div>
      {isMobile ? (
        <a
          href={githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="proj-github"
        >
          View on github
        </a>
      ) : (
        ""
      )}
    </Col>
  );
};

export default ProjectCard;
