import React, { useEffect, useRef } from "react"
import { Style } from "./about.styles"
import BeigeSrc from "../../../assets/img/shapes/beige-2.svg"
import ArrowSrc from "../../../assets/img/icons/fleche-right.svg"

const About = ({
  missionTitle,
  missionSubtitle,
  missionText1,
  missionText2,
  missionText3,
  missionText4,
}) => {
  const wrapperRef = useRef(null)
  return (
    <Style>
      <span id="about"></span>
      <div className="about-wrapper mt-4 pt-5" ref={wrapperRef}>
        <div className="container my-5 py-5">
          <div className="row mt-5 pt-5">
            <div className="col-lg-6">
              <div className="p-holder">
                <div className="beige-2">
                  <img src={BeigeSrc} className="" alt="" />
                </div>
              </div>

              <h1 className="mb-5 ps-7 text-black">
                <span className="overflow-hidden h-100 d-inline-block">
                  {missionTitle.split(" ").map((word, i) => (
                    <span key={i} className={`d-inline-block  me-3 `}>
                      {word}
                    </span>
                  ))}
                </span>
              </h1>
            </div>
            <div className="col-lg-6">
              <h2
                className="text-black w-75 "
                dangerouslySetInnerHTML={{ __html: missionSubtitle }}
              ></h2>
              <p
                className="ps-6 pt-5 me-lg-5  pb-1"
                dangerouslySetInnerHTML={{ __html: missionText1 }}
              ></p>
              <p
                className="ps-6 pt-1 me-lg-5  pb-1"
                dangerouslySetInnerHTML={{ __html: missionText2 }}
              ></p>
              <p
                className="ps-6 pt-1 me-lg-5 "
                dangerouslySetInnerHTML={{ __html: missionText3 }}
              ></p>
              <p
                className="ps-6 pt-1 me-lg-5 "
                dangerouslySetInnerHTML={{ __html: missionText4 }}
              ></p>
              <div className="ps-6 d-flex align-items-center pointer pt-5 btn-hover">
                <div className="pb-3">
                  <img className=" pt-1" src={ArrowSrc} alt="" />
                </div>

                <p className="ms-3 mb-0 pb-2 small ">Voir nos artistes</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Style>
  )
}

export default About
