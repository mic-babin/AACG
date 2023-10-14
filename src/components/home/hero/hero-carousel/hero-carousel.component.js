import React, { useEffect, useRef, useState } from "react"
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"
import { Style } from "./hero-carousel.styles"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import RedSrc from "../../../../assets/img/shapes/red-3.svg"
import { Parallax } from "react-scroll-parallax"
import {
  customOptions,
  pickRandomItems,
  CustomDot,
  getCaptionString,
} from "../hero.utils"
import { motion } from "framer-motion"
import {
  fadeUpVariants,
  fadeRightCarouselVariants,
} from "../../../../assets/animations/animations"

const HeroCarousel = ({ heroArr }) => {
  const wrapperRef = useRef(null)
  const [images, setImages] = useState(heroArr)

  useEffect(() => {
    setImages(pickRandomItems(heroArr, 5))

    return () => {}
  }, [heroArr])

  return (
    <Style ref={wrapperRef}>
      <div className="p-holder">
        <motion.div
          className="red-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUpVariants}
          transition={{ duration: 0.75, delay: 1.75 }}
        >
          <Parallax translateY={[-100, 100]}>
            <img src={RedSrc} alt="RedShape" />
          </Parallax>
        </motion.div>
      </div>

      <motion.div
        className="carousel-wrapper"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeRightCarouselVariants}
        transition={{ duration: 0.75, delay: 1 }}
      >
        {heroArr && (
          <Carousel
            responsive={customOptions.responsive}
            infinite={customOptions.infinite}
            arrows={customOptions.arrows}
            autoPlay={customOptions.autoPlay}
            autoPlaySpeed={customOptions.autoPlaySpeed}
            showDots={true}
            customDot={<CustomDot />}
          >
            {images.map((image, index) => (
              <div key={image.id + index} className="custom-height pb-5">
                <GatsbyImage
                  style={{
                    height: "800px",
                    width: "645px",
                    objectFit: "cover",
                  }}
                  objectFit="cover"
                  image={getImage(image)}
                  alt={getCaptionString(image)}
                  loading="eager"
                />
                <div className="caption">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: getCaptionString(image),
                    }}
                  ></span>
                </div>
              </div>
            ))}
          </Carousel>
        )}
      </motion.div>
    </Style>
  )
}

export default HeroCarousel
