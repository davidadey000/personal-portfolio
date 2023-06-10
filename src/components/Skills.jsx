import { Row, Col, Container } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import colorSharp from "../assets/img/color-sharp.png";

const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col>
            <div className="skill-bx">
              <h2>Skills</h2>
              <p>
                Versatile Skill Set: Driving Innovation, Transformation, and
                Success Across Web, Mobile, Desktop, and Web Scraping.
              </p>
              <br></br>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="skill-slider"
              >
                <div className="item">
                  <img src={meter1} alt="image1" />
                  <h5>Full Stack Web Development</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="image2" />
                  <h5>Android App Development</h5>
                </div>
                <div className="item">
                  <img src={meter3} alt="image3" />
                  <h5>Desktop Python Development</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="image1" />
                  <h5>Web Scraping</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="image1" />
                  <h5>Python/Django Development"</h5>
                </div>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
      <img src={colorSharp} alt="" className="background-image-left" />
    </section>
  );
};

export default Skills;
