import React, { useEffect, useRef } from "react"
import Beige3Src from "../../../assets/img/shapes/beige-3.svg"
import TealSrc from "../../../assets/img/shapes/teal-1.svg"
import PinkSrc from "../../../assets/img/shapes/pink-3.svg"
import { useStaticQuery, graphql } from "gatsby"
import { Style } from "./team.styles"
import { v4 as uuidv4 } from "uuid"
import Employee from "./employee.component"
import { getOddEmployee, getEvenEmployee } from "./team.utils"
import { Parallax } from "react-scroll-parallax"
import { motion } from "framer-motion"
import {
  littleFadeUpVariants,
  fadeLeftVariants,
  veryLittleFadeUpVariants,
} from "../../../assets/animations/animations"

const Team = ({ employeeTitle, employeeText, telephone, email }) => {
  const wrapperRef = useRef(null)

  const data = useStaticQuery(graphql`
    query {
      allWpPost(
        filter: {
          categories: {
            nodes: { elemMatch: { name: { eq: "employee", regex: "" } } }
          }
        }
      ) {
        nodes {
          slug
          title
          content
          featuredImage {
            node {
              gatsbyImage(width: 300, quality: 100, placeholder: BLURRED)
            }
          }
        }
      }
    }
  `)

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

  const employees = data.allWpPost.nodes

  return (
    <Style className="bg-beige overflow-hidden" ref={wrapperRef}>
      <div className="p-holder">
        <motion.div
          className="beige-3"
          {...animateIn}
          variants={littleFadeUpVariants}
          transition={{ duration: 0.75 }}
        >
          <Parallax translateY={[1, -100]}>
            <img src={Beige3Src} alt="Beige Shape" />
          </Parallax>
        </motion.div>
        <motion.div
          className="teal-1"
          {...animateIn}
          variants={littleFadeUpVariants}
          transition={{ duration: 0.75 }}
        >
          <Parallax translateY={[1, -60]}>
            <img src={TealSrc} alt="Teal Shape" />
          </Parallax>
        </motion.div>
      </div>
      <div className="container py-5">
        <div className="row p-header mt-lg-5 pb-200">
          <div className="col-lg-5 p-nav mt-3">
            <div className="p-holder ps-7">
              <motion.div
                className="pink-3"
                {...animateIn}
                variants={littleFadeUpVariants}
                transition={{ duration: 0.75 }}
              >
                <Parallax translateY={[0, -30]}>
                  <img src={PinkSrc} alt="Pink Shape" />
                </Parallax>
              </motion.div>
            </div>
            <div className="ps-7">
              <h1 className="text-black">
                <span className="overflow-hidden h-100 d-inline-block">
                  {employeeTitle?.split(" ").map((word, i) => (
                    <span
                      key={i}
                      className={`d-inline-block me-3 overflow-hidden`}
                    >
                      <motion.span
                        className={`overflow-hidden d-inline-block me-3`}
                        {...animateIn}
                        variants={littleFadeUpVariants}
                        transition={{ duration: 0.5, delay: 0.5 + i / 10 }}
                      >
                        {word}
                      </motion.span>
                    </span>
                  ))}
                </span>
              </h1>
              <motion.p
                dangerouslySetInnerHTML={{ __html: employeeText }}
                className="pe-lg-5 mt-5 me-lg-4 "
                {...textAnimation}
              ></motion.p>
              <motion.p className="pe-lg-5 mb-1 me-lg-4" {...textAnimation}>
                <a
                  aria-label="email"
                  href={`mailto:${email}`}
                  dangerouslySetInnerHTML={{ __html: email }}
                ></a>
              </motion.p>
              <motion.p className="pe-lg-5 mb-1 me-lg-4" {...textAnimation}>
                <a
                  href={`tel:${telephone}`}
                  dangerouslySetInnerHTML={{ __html: telephone }}
                  aria-label="tel"
                ></a>
              </motion.p>
            </div>
          </div>
          <div className="col-lg-7 pt-5">
            <div className="row">
              <div className="col-md-6 px-4">
                {getEvenEmployee(employees).map((employee, i) => {
                  const uniqueId = uuidv4() // Generate a unique ID
                  return <Employee employee={employee} key={uniqueId} />
                })}
              </div>
              <div className="col-md-6 px-4">
                {getOddEmployee(employees).map((employee, i) => {
                  const uniqueId = uuidv4() // Generate a unique ID
                  return <Employee employee={employee} key={uniqueId} />
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Style>
  )
}

export default Team
