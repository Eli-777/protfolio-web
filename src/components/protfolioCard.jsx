import React, { useState } from 'react';

function ProtfolioCard({ pic1, pic2, pic3, pic4, pic5, project }) {

  const [isShow, setIsShow] = useState(false)
  function handleClick() {
    setIsShow(!isShow)
  }

  return (
    <div className="col-md-6">
      <div className="work-box">
        <a href={pic1} data-lightbox="gallery-vmarine">
          <div className="work-img">
            <img src={pic1} alt="" className="img-fluid" />
          </div>
        </a>
        <div className="work-content">
          <div className="row">
            <div className="col-sm-8">
              <h2 className="w-title">{project.title}</h2>
              <div className="w-link">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="ion-social-github w-outLink"></i>
                </a>
                <p className="ml-2 mr-2 w-outLink">/</p>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <p className='w-demoLink w-outLink'>Demo</p>
                </a>
              </div>
              <div className="w-more">
                {
                  project.skills.map(skill => (
                    <span className="w-tag">{skill}</span>
                  ))
                }

              </div>
            </div>
            <div className="col-sm-4">
              <div className={`w-like ${isShow && 'click'}`}>
                <span className="ion-ios-plus-outline" onClick={handleClick}></span>
              </div>
            </div>
          </div>

          <div className={`row w-detail-container ${isShow && 'w-detail-animation'}`}>
            <div className="w-detail col-12">
              <p className="w-detail-title">{project.detailTitle}</p>
              <p className="w-detail-content">{project.detailContent}</p>

            </div>
          </div>


        </div>

        <a
          href={pic2}
          data-lightbox="gallery-vmarine"
          style={{ display: "none" }}
        >
          jsx-a11y/anchor-has-content warning
                </a>
        <a
          href={pic3}
          data-lightbox="gallery-vmarine"
          style={{ display: "none" }}
        >
          jsx-a11y/anchor-has-content warning
                </a>
        <a
          href={pic4}
          data-lightbox="gallery-vmarine"
          style={{ display: "none" }}
        >
          jsx-a11y/anchor-has-content warning
                </a>
        <a
          href={pic5}
          data-lightbox="gallery-vmarine"
          style={{ display: "none" }}
        >
          jsx-a11y/anchor-has-content warning
                </a>
      </div>
    </div>
  );
}

export default ProtfolioCard;