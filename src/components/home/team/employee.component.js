import React, { useState } from "react"
import { Style } from "./team.styles"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import ArrowSrc from "../../../assets/img/icons/arrow-down.svg"
import {
  getTitle,
  getTags,
  getBio,
  getBio2,
  getTel,
  getEmail,
} from "./team.utils"
import { fadeRightVariants } from "../../../assets/animations/animations"
import { motion, useAnimation } from "framer-motion"
const Employee = ({ employee }) => {
  const [isOpen, setIsOpen] = useState(false)
  const controls = useAnimation()

  const toggleCollapsible = async () => {
    setIsOpen(!isOpen)

    // Use Framer Motion to animate the opening/closing of the collapsible content
    await controls.start({ height: isOpen ? 0 : "auto" })
  }

  return (
    <Style
      className="pb-5 mb-5"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeRightVariants}
      transition={{ duration: 0.75, delay: 1 }}
    >
      <div className="mx-3 ">
        <div className="bg-blue my-3 d-flex align-items-center">
          <GatsbyImage
            image={getImage(employee.featuredImage.node)}
            className={`w-100 ${
              employee?.featured_media !== 0
                ? "employee-picture"
                : "px-5 mx-xxl-4"
            }`}
            alt={employee.slug}
          />
        </div>

        <button
          type="button"
          className="w-100 equipe-collapsible px-0"
          onClick={toggleCollapsible}
        >
          <div className="d-flex justify-content-between align-items-start">
            <div>
              <h4
                dangerouslySetInnerHTML={{
                  __html: employee.title,
                }}
                className="text-black mb-1"
              ></h4>
              <p
                className="mb-1 text-black title"
                dangerouslySetInnerHTML={{
                  __html: getTitle(employee),
                }}
              ></p>
              <p
                className="mb-0 text-black"
                dangerouslySetInnerHTML={{
                  __html: getTags(employee),
                }}
              ></p>
            </div>
            <div className={!isOpen ? "" : "flipped"}>
              <img className="arrow my-2" src={ArrowSrc} alt="arrow" />
            </div>
          </div>
        </button>
        <motion.div
          initial={{ height: 0 }}
          animate={controls}
          transition={{ duration: 0.5 }}
          style={{
            overflow: "hidden",
          }}
        >
          <p
            className="pt-3 pb-1 small top-line"
            dangerouslySetInnerHTML={{
              __html: getBio(employee),
            }}
          ></p>
          <p
            className="pt-1 pb-1 small"
            dangerouslySetInnerHTML={{
              __html: getBio2(employee),
            }}
          ></p>
          <a
            href={`tel:${getTel(employee)}`}
            aria-label="tel"
            className="contact m-0 d-block"
            dangerouslySetInnerHTML={{
              __html: getTel(employee),
            }}
          ></a>
          <a
            href={`mailto:${getEmail(employee)}`}
            aria-label="email"
            className="contact m-0 d-block"
            dangerouslySetInnerHTML={{
              __html: getEmail(employee),
            }}
          ></a>
        </motion.div>
      </div>
    </Style>
  )
}

export default Employee
