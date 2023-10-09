import React from "react"
import { Style } from "./hero.styles"
import ArrowSrc from "../../../assets/img/icons/WhiteRoundArrow.png"
import HeroCarousel from "./hero-carousel/hero-carousel.component"

const HomeHero = ({ title, media }) => {
  const scrollTo = () => {
    // Implement your scroll to logic here
  }

  return (
    <Style className="custom-height home-hero-wrapper">
      <div className="h-100">
        <div className="container">
          <div className="p-holder">
            <div className="ovy">
              <h1 className="ps-7 mt-3">
                {title.split(" ").map((word, i) => (
                  <React.Fragment key={i}>
                    {" "}
                    <span
                      className={`overflow-hidden d-inline-block  me-3`}
                      dangerouslySetInnerHTML={{ __html: word }}
                    ></span>
                  </React.Fragment>
                ))}
              </h1>
              <div
                className="d-flex scroll-down align-items-center ps-7 float"
                onClick={scrollTo}
              >
                <img src={ArrowSrc} alt="" className="" />
                <h4 className="ms-3 mb-0 ">Défiler</h4>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid container-lg">
          <div className="row p-0">
            <div className="col-xl-6 offset-xl-6 col-lg-8 offset-lg-4 p-0">
              <HeroCarousel heroArr={media} />
            </div>
          </div>
        </div>
      </div>
    </Style>
  )
}

export default HomeHero
