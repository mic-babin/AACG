import React, { useState } from "react"
import { Section } from "./video.styles"
import ArrowSrc from "../../../assets/img/icons/arrow-down.svg"
import { motion, useAnimation } from "framer-motion"

const Video = ({ videoArr }) => {
  videoArr = videoArr.map(item => item.split("==")[1].split("</p>")[0])

  const [isCollapsed, setIsCollapsed] = useState(false)
  const controls = useAnimation()

  const toggleCollapse = async () => {
    setIsCollapsed(!isCollapsed)
    // Use Framer Motion to animate the opening/closing of the collapsible content
    await controls.start({ height: !isCollapsed ? 0 : "auto" })
  }

  return (
    <Section className="container">
      <div className="col-12 my-5">
        <div className="col-12 my-5 px-0">
          <div className="d-flex justify-content-center">
            <button
              type="button"
              className={`w-100 artist-collapsible px-0 `}
              onClick={toggleCollapse}
              aria-expanded={!isCollapsed}
              aria-controls="collapseExample"
            >
              <div className="d-flex justify-content-between align-items-center">
                <h2 className="fw-normal text-black">Vidéo</h2>
                <div className={isCollapsed ? "" : "flipped"}>
                  <img className="arrow" src={ArrowSrc} alt="Flèche" />
                </div>
              </div>
            </button>
          </div>

          <motion.div
            initial={controls}
            animate={controls}
            transition={{ duration: 0.5 }}
            style={{
              overflow: "hidden",
            }}
          >
            <div className="row">
              {videoArr.map((source, index) => {
                return (
                  <div key={index} className="col-lg-6 pb-5 mb-4">
                    <div>
                      <div className="video-thumb">
                        <iframe
                          title={index}
                          width="100%"
                          height="100%"
                          src={source}
                          allowFullScreen
                          frameBorder="0"
                          allow="autoplay; fullscreen"
                        ></iframe>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </Section>
  )
}

export default Video
