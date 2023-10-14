import React, { useRef } from "react"
import { Style } from "./about.styles"
import BeigeSrc from "../../../assets/img/shapes/beige-2.svg"
import ArrowSrc from "../../../assets/img/icons/fleche-right.svg"
import { motion } from "framer-motion"
import { Parallax } from "react-scroll-parallax"
import {
  littleFadeUpVariants,
  fadeLeftVariants,
  veryLittleFadeUpVariants,
} from "../../../assets/animations/animations"

const About = ({
  missionTitle,
  missionSubtitle,
  missionText1,
  missionText2,
  missionText3,
  missionText4,
}) => {
  const wrapperRef = useRef(null)

  const animateIn = {
    initial: "hidden",
    whileInView: "visible",
    viewport: { once: true },
  }

  const textAnimation = {
    ...animateIn,
    variants: veryLittleFadeUpVariants,
    transition: { duration: 0.5, delay: 0.5 },
  }

  return (
    <Style>
      <span id="about"></span>
      <div className="about-wrapper mt-4 pt-5" ref={wrapperRef}>
        <div className="container my-5 py-5">
          <div className="row mt-5 pt-5">
            <div className="col-lg-6">
              <div className="p-holder">
                <motion.div
                  className="beige-2"
                  {...animateIn}
                  variants={fadeLeftVariants}
                  transition={{ duration: 0.75 }}
                >
                  <Parallax translateY={[-10, 20]}>
                    <img src={BeigeSrc} alt="Beige Shape" />
                  </Parallax>
                </motion.div>
              </div>

              <h1 className="mb-5 ps-7 text-black">
                <span className="overflow-hidden h-100 d-inline-block">
                  {missionTitle.split(" ").map((word, i) => (
                    <span
                      key={i}
                      className={`d-inline-block me-3 overflow-hidden`}
                    >
                      <motion.span
                        className={`overflow-hidden d-inline-block me-3`}
                        {...animateIn}
                        variants={littleFadeUpVariants}
                        transition={{ duration: 0.5, delay: 0.25 }}
                      >
                        {word}
                      </motion.span>
                    </span>
                  ))}
                </span>
              </h1>
            </div>
            <div className="col-lg-6">
              <motion.h2
                className="text-black w-75 "
                dangerouslySetInnerHTML={{ __html: missionSubtitle }}
                {...textAnimation}
              ></motion.h2>
              <motion.p
                className="ps-6 pt-5 me-lg-5  pb-1"
                dangerouslySetInnerHTML={{ __html: missionText1 }}
                {...textAnimation}
              ></motion.p>
              <motion.p
                className="ps-6 pt-1 me-lg-5  pb-1"
                dangerouslySetInnerHTML={{ __html: missionText2 }}
                {...textAnimation}
              ></motion.p>
              <motion.p
                className="ps-6 pt-1 me-lg-5 "
                dangerouslySetInnerHTML={{ __html: missionText3 }}
                {...textAnimation}
              ></motion.p>
              <motion.p
                className="ps-6 pt-1 me-lg-5 "
                dangerouslySetInnerHTML={{ __html: missionText4 }}
                {...textAnimation}
              ></motion.p>
              <motion.div
                className="ps-6 d-flex align-items-center pointer pt-5 btn-hover"
                {...textAnimation}
              >
                <div className="pb-3">
                  <img className=" pt-1" src={ArrowSrc} alt="" />
                </div>

                <p className="ms-3 mb-0 pb-2 small u-line position-relative">
                  Voir nos artistes
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </Style>
  )
}

export default About
