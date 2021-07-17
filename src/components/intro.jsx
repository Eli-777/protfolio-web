import React from "react";
import "./stars.scss";
import Typed from "react-typed";

class Intro extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      start: new Array(100).fill(2),
      test: 'test'
    }
  }

  log() {
    console.log(this.state.start);
  }
  render() {
    return (
      // <div id="home" className="intro route bg-image " style={{backgroundImage: "url("+bigImage+")"}}>
      <div id="home" className="intro route bg-image background">
        {
          this.state.start.map((number, index) => {
            return <div className={`stars${index}`} key={number} />
          })
        }

        <div className="intro-content display-table">
          <div className="table-cell">
            <div className="container">
              <h1 className="intro-title mb-4">Hello, I am Eli</h1>
              <p className="intro-subtitle">
                <span className="text-slider-items"></span>
                <strong className="text-slider">
                  <Typed
                    strings={[
                      "Front End Developer",
                      "前端工程師",
                      "Software Engineer"
                    ]}
                    typeSpeed={80}
                    backDelay={1100}
                    backSpeed={30}
                    loop
                  />
                </strong>
              </p>
              <p className="pt-3">
                <a
                  className="btn btn-primary btn js-scroll px-4"
                  href="#work"
                  role="button"
                >
                  View My Portfolio
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Intro;
