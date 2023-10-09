import React, { useEffect, useRef } from "react"
import Red5Src from "../../../assets/img/shapes/red-5.svg"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Style } from "./instagram.style"
import { useStaticQuery, graphql } from "gatsby"

const Instagram = ({ followTitle, followText }) => {
  const wrapperRef = useRef(null)

  const data = useStaticQuery(graphql`
    query {
      allWpMediaItem(filter: { title: { regex: "/^suivez.*$/" } }) {
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
      const red = wrapperRef.current?.querySelector(".red-5")
      let rateRed = -window.pageYOffset * 0.25
      if (red) {
        red.style.transform = `translateY(${rateRed}px)`
      }

      images.forEach((_, i) => {
        const img = wrapperRef.current?.querySelector(`.img-${i}`)
        let rateImg =
          -window.pageYOffset * getImgRate(i) + getImgInitialOffset(i)
        if (img) {
          img.style.transform = `translateY(${rateImg}px)`
        }
      })
    }

    const getImgRate = index => {
      switch (index) {
        case 0:
          return 0.02
        case 1:
          return 0.05
        case 2:
          return 0.08
        case 3:
          return 0.03
        case 4:
          return 0.06
        case 5:
          return 0.06
        default:
          return 0
      }
    }

    const getImgInitialOffset = index => {
      switch (index) {
        case 0:
          return 60
        case 1:
          return 200
        case 2:
          return 280
        case 3:
          return 230
        case 4:
          return 270
        case 5:
          return 270
        default:
          return 0
      }
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [images])

  return (
    <Style className="bg-pink pb-5 pb-sm-0" ref={wrapperRef}>
      <div className="p-holder">
        {images.map((img, i) => (
          <div key={i} className="img-position">
            <div className="">
              <a
                href="https://www.instagram.com/agencecorinnegiguere/"
                target="_blank"
                rel="noreferrer noopener"
              >
                <GatsbyImage image={getImage(img)} className={`img img-${i}`} />
              </a>
            </div>
          </div>
        ))}
      </div>
      <div className="container py-150 mb-5 mb-sm-0">
        <div className="d-flex flex-column justify-content-center align-items-center position-relative">
          <h1 className="mt-5 pt-5 text-black z-1 ">{followTitle}</h1>
          <div className="p-holder">
            <div className="red-5">
              <img src={Red5Src} alt="" className="" />
            </div>
          </div>
          <p
            className="text-center z-1 "
            dangerouslySetInnerHTML={{ __html: followText }}
          ></p>
          <a
            href="https://www.instagram.com/agencecorinnegiguere/"
            target="_blank"
            rel="noreferrer noopener"
            style={{ zIndex: 1 }}
          >
            <button className="button-black mt-3 px-4 z-1 ">
              <div className="px-3 z-1">Nous suivre</div>
            </button>
          </a>
        </div>
      </div>
    </Style>
  )
}

export default Instagram
