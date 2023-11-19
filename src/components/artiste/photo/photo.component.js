import React, { useEffect, useRef } from "react"
import { sortByDescription } from "../../../utils/sort-by-description"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Section } from "./photo.styles"

const Photo = ({ photoArr }) => {
  photoArr = sortByDescription(photoArr)

  const wrapperRef = useRef(null)

  useEffect(() => {
    const handleLoad = () => {
      const pink = wrapperRef.current.querySelector(".pink-3")

      let ratePink = -window.pageYOffset * 0.1
      if (pink) {
        pink.style.transform = `translate3d(0, ${ratePink}px, 0)`
      }
    }

    window.addEventListener("load", handleLoad)

    return () => {
      window.removeEventListener("load", handleLoad)
    }
  }, [])

  const getCaptionString = image => {
    if (image.caption.slice(3, image?.caption?.length - 5).length > 4) {
      return image.caption.slice(3, image?.caption?.length - 5)
    } else {
      return " "
    }
  }

  return (
    <Section className="wrapper" ref={wrapperRef}>
      <div className="p-holder">
        <div className="pink-3 z-0">
          <img
            src="../../../../assets/img/shapes/pink-3.svg"
            alt=""
            className="fade-up"
          />
        </div>
      </div>
      <div className="container mb-5 pb-5">
        <div className="row">
          {photoArr.map((image, index) => (
            <div key={index} className="col-lg-4 px-3 px-lg-4 mb-5 mb-lg-0">
              <GatsbyImage
                image={getImage(image.gatsbyImage)}
                alt={image.caption}
                className="img-fluid w-100"
              />
              <div className="caption">
                <span
                  dangerouslySetInnerHTML={{ __html: getCaptionString(image) }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}

export default Photo
