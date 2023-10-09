import React, { useEffect, useRef } from "react"
import RedSrc from "../../../assets/img/shapes/red-1.svg"
import { Style } from "./pictures.styles"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const Pictures = () => {
  const wrapperRef = useRef(null)

  const data = useStaticQuery(graphql`
    query {
      allWpMediaItem(filter: { title: { regex: "/^about.*$/" } }) {
        nodes {
          description
          title
          caption
          gatsbyImage(width: 1000)
        }
      }
    }
  `)

  const sortImagesByDescription = images => {
    // Use the sort method to sort the images array
    images.sort((a, b) => {
      // Extract descriptions from the images or set them to empty strings if undefined
      const descriptionA = a.description || ""
      const descriptionB = b.description || ""

      // Use localeCompare to perform a case-insensitive string comparison
      return descriptionA.localeCompare(descriptionB, undefined, {
        sensitivity: "base",
      })
    })

    // Return the sorted array
    return images
  }

  const imagesArr = data.allWpMediaItem.nodes
  const images = sortImagesByDescription(imagesArr)

  useEffect(() => {
    const handleScroll = () => {
      const red = wrapperRef.current.querySelector(".red-1")
      let rateRed = -window.pageYOffset * 0.1
      if (red) {
        red.style.transform = `translate3d(0, ${rateRed}px, 0)`
      }
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <Style>
      <div className="row p-0" ref={wrapperRef}>
        <div className="col-lg-6 p-0">
          <div>
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
          </div>
        </div>
        <div className="col-lg-6 px-5 move-down d-none d-lg-block">
          <div className="p-holder">
            <div className="red-1">
              <img src={RedSrc} className="" alt="" />
            </div>
          </div>
          <div className="px-3">
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
          </div>
        </div>
      </div>
    </Style>
  )
}

export default Pictures
