import React from "react"
import { Style } from "./hero.styles"
import ArrowSrc from "../../../assets/img/icons/WhiteRoundArrow.png"
import HeroCarousel from "./hero-carousel/hero-carousel.component"
import { motion } from "framer-motion"
import {
  veryLittleFadeUpVariants,
  littleFadeUpVariants,
} from "../../../assets/animations/animations"

const HomeHero = ({ title, media }) => {
  const scrollTo = () => {
    document.getElementById("about").scrollIntoView({ behavior: "smooth" })
  }

  return (
    <Style className="custom-height home-hero-wrapper">
      <div className="h-100">
        <div className="container">
          <div className="p-holder">
            <div className="ovy">
              <h1 className="ps-7 mt-3">
                {title.split(" ").map((word, i) => (
                  <span className="overflow-hidden d-inline-block me-3">
                    <motion.span
                      key={i}
                      className={`overflow-hidden d-inline-block me-3`}
                      dangerouslySetInnerHTML={{ __html: word }}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      variants={littleFadeUpVariants}
                      transition={{ duration: 0.5, delay: 1.5 + i / 10 }}
                    ></motion.span>
                  </span>
                ))}
              </h1>
              <div
                className="d-flex scroll-down align-items-center ps-7 float"
                onClick={scrollTo}
              >
                <motion.img
                  src={ArrowSrc}
                  alt="Arrow Down"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={veryLittleFadeUpVariants}
                  transition={{ duration: 0.5, delay: 2 }}
                />
                <motion.h4
                  className="ms-3 mb-0"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={veryLittleFadeUpVariants}
                  transition={{ duration: 0.5, delay: 2 }}
                >
                  Défiler
                </motion.h4>
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
