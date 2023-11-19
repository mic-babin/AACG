import React, { useState } from "react"
import ArrowSrc from "../../../assets/img/icons/arrow-down.svg"
import Player from "./player.component"
import { sortByTitle } from "../../../utils/sort-by-title"
import { Section } from "./audio.styles"
import { motion, useAnimation } from "framer-motion"

const Audio = ({ audioArr }) => {
  audioArr = sortByTitle(audioArr)
  const [isCollapsed, setIsCollapsed] = useState(false)
  const controls = useAnimation()

  const toggleCollapse = async () => {
    setIsCollapsed(!isCollapsed)
    // Use Framer Motion to animate the opening/closing of the collapsible content
    await controls.start({ height: isCollapsed ? 0 : "auto" })
  }
  return (
    <Section className="container pb-3">
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
                <h2 className="fw-normal text-black">Audio</h2>
                <div className={!isCollapsed ? "" : "flipped"}>
                  <img className="arrow" src={ArrowSrc} alt="Flèche" />
                </div>
              </div>
            </button>
          </div>

          <motion.div
            initial={{ height: 0 }}
            animate={controls}
            transition={{ duration: 0.5 }}
            style={{
              overflow: "hidden",
            }}
          >
            {audioArr &&
              audioArr.map(audio => <Player key={audio.id} audio={audio} />)}
          </motion.div>
        </div>
      </div>
    </Section>
  )
}

export default Audio
