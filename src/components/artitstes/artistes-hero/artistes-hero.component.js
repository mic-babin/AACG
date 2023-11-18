import React, { useEffect, useState } from "react"
import ArrowDownSrc from "../../../assets/img/icons/small-white-arrow-down.svg"
import ArrowUpSrc from "../../../assets/img/icons/small-white-arrow-up.svg"
import { motion, AnimatePresence } from "framer-motion"

const ArtistesHero = ({ location, tags, selectedTags, setSelectedTags }) => {
  const [isCollapsed, setIsCollapsed] = useState(false)
  const [filterTags, setFilterTags] = useState([])
  const [kicker, setKicker] = useState("")

  const toggleTag = tag => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter(t => t !== tag))
    } else {
      let tagsArr = [selectedTags, tag]
      setSelectedTags(tagsArr.flat())
    }
  }

  useEffect(() => {
    if (location.includes("artistes")) {
      setFilterTags(tags.filter(tag => tag.description.includes("artistes")))
      setKicker(
        "Nous choisissons chaque collaboration avec soin. Notre agence représente des artistes œuvrant à la télévision, au cinéma et sur scène, que ce soit comme auteurs, comédiens, animateurs, humoristes, metteurs en scène ou réalisateurs."
      )
    } else {
      setFilterTags(tags.filter(tag => tag.description.includes("voix")))
      setKicker(
        "Que ce soit pour de la voix publicitaire, de la narration, du doublage ou de la surimpression vocale, vous trouverez ici de nombreux talents pouvant répondre à vos besoins."
      )
    }
  }, [kicker, location])

  return (
    <div>
      {" "}
      <div className="bg-teal pb-5 position-relative z-2">
        <div className="container p-nav mb-4">
          <div className="p-holder">
            <div className="blue-2 z-minus">
              <img src="../../../../assets/img/shapes/blue-2.svg" alt="" />
            </div>
            <div className="beige-4 z-0">
              <img src="../../../../assets/img/shapes/beige-4.svg" alt="" />
            </div>
          </div>
          <div className="row p-header ps-7">
            <div className="col-12">
              <h1 className="mb-5">
                <span className="overflow-hidden h-100 d-inline-block">
                  <span className="d-block  me-3">Nos</span>
                  <span className="d-block  me-3">artistes</span>
                </span>
              </h1>
            </div>
            <div className="col-lg-6">
              <p className="ps-lg-5 ms-lg-3 pe-5 me-xl-5 text-white fw-normal">
                {kicker}
              </p>
            </div>
            <div className="col-lg-6 d-flex justify-content-center">
              <div className="w-100">
                <div className="line"></div>
                <button
                  type="button"
                  className="w-100 btn-filter"
                  onClick={() => setIsCollapsed(!isCollapsed)}
                >
                  <div className="d-flex justify-content-between align-items-center">
                    <h2 className="fw-normal">Filtres</h2>
                    <img
                      className="arrow pe-1"
                      src={isCollapsed ? ArrowDownSrc : ArrowUpSrc}
                      alt=""
                    />
                  </div>
                </button>
                <AnimatePresence>
                  {!isCollapsed && (
                    <motion.div
                      className="overflow-hidden"
                      initial={{ height: 0 }}
                      animate={{ height: "auto" }}
                      exit={{ height: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ul style={{ marginBottom: "10.5px" }}>
                        {filterTags
                          .filter(tag => !tag.name.includes("English"))
                          .map(tag => (
                            <li
                              key={tag.id}
                              style={{
                                fontWeight: selectedTags.includes(tag.name)
                                  ? "bold"
                                  : "normal",
                                paddingBottom: "7px",
                              }}
                              onClick={() => toggleTag(tag.name)}
                            >
                              {selectedTags.includes(tag.name) && "- "}
                              {tag.name}
                            </li>
                          ))}
                        {filterTags
                          .filter(tag => tag.name.includes("English"))
                          .map(tag => (
                            <li
                              key={tag.id}
                              style={{
                                fontWeight: selectedTags.includes(tag.name)
                                  ? "bold"
                                  : "normal",
                                paddingBottom: "0px",
                              }}
                              onClick={() => toggleTag(tag.name)}
                            >
                              {selectedTags.includes(tag.name) && "- "}
                              {tag.name.toUpperCase()}
                            </li>
                          ))}{" "}
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>
                <div className="line"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="p-holder">
        <div className="pink-5 z-minus">
          <img
            src="../../../../assets/img/shapes/pink-5.svg"
            alt=""
            className="fade-up"
          />
        </div>
      </div>
    </div>
  )
}

export default ArtistesHero
