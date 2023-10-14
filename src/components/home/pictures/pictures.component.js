import React, { useEffect, useRef } from "react"
import RedSrc from "../../../assets/img/shapes/red-1.svg"
import { Style } from "./pictures.styles"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { sortByDescription } from "../../../utils/sort-by-description"
import { motion } from "framer-motion"
import { Parallax } from "react-scroll-parallax"
import { fadeUpVariants } from "../../../assets/animations/animations"

const Pictures = () => {
  const wrapperRef = useRef(null)
  const animateIn = {
    initial: "hidden",
    whileInView: "visible",
    viewport: { once: true },
  }

  const data = useStaticQuery(graphql`
    query {
      allWpMediaItem(filter: { title: { regex: "/^about.*$/" } }) {
        nodes {
          description
          title
          caption
          gatsbyImage(width: 1000, placeholder: BLURRED)
        }
      }
    }
  `)

  const imagesArr = data.allWpMediaItem.nodes
  const images = sortByDescription(imagesArr)

  return (
    <Style>
      <div className="row p-0" ref={wrapperRef}>
        <div className="col-lg-6 p-0">
          <motion.div
            {...animateIn}
            variants={fadeUpVariants}
            transition={{ duration: 0.5 }}
          >
            <GatsbyImage
              image={getImage(images[0])}
              alt={images[0]?.caption.slice(3)}
              className="w-100 img-1"
            />

            <div
              className="caption"
              dangerouslySetInnerHTML={{
                __html: images[0]?.caption.slice(3),
              }}
            ></div>
          </motion.div>
        </div>
        <div className="col-lg-6 px-5 move-down d-none d-lg-block">
          <div className="p-holder">
            <motion.div
              className="red-1"
              {...animateIn}
              variants={fadeUpVariants}
              transition={{ duration: 0.5 }}
            >
              <Parallax translateY={[-80, 50]}>
                <img src={RedSrc} alt="Red Shape" />
              </Parallax>
            </motion.div>
          </div>
          <motion.div
            className="px-3"
            {...animateIn}
            variants={fadeUpVariants}
            transition={{ duration: 0.5 }}
          >
            <GatsbyImage
              image={getImage(images[1])}
              alt={images[1]?.caption.slice(3)}
              className="w-100 mx-xl-5 px-4 px-xl-5 img-2"
            />
            <div
              className="caption w-100 mx-xl-5 px-4 px-xl-5 caption-2"
              dangerouslySetInnerHTML={{
                __html: images[1]?.caption.slice(3),
              }}
            ></div>
          </motion.div>
        </div>
      </div>
    </Style>
  )
}

export default Pictures
