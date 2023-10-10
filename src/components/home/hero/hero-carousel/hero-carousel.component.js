import React, { useEffect, useRef, useState } from "react"
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"
import { Style } from "./hero-carousel.styles"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import RedSrc from "../../../../assets/img/shapes/red-3.svg"

const HeroCarousel = ({ heroArr }) => {
  const wrapperRef = useRef(null)
  const [images, setImages] = useState(heroArr)

  useEffect(() => {
    const handleScroll = () => {
      const red = wrapperRef.current.querySelector(".red-3")
      let rateRed = window.pageYOffset * 0.25
      if (red) {
        red.style.transform = `translateY(${rateRed}px)`
      }
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const customOptions = {
    responsive: {
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 1,
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 1,
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
      },
    },
    infinite: true,
    arrows: false,
    showDots: true,
    autoPlay: true,
    autoPlaySpeed: 3000,
  }

  //   const CustomDot = ({ index, onClick, active }) => {
  //     return (
  //       <button
  //         onClick={e => {
  //           onClick()
  //           e.preventDefault()
  //         }}
  //         className={active ? "custom-dot--active" : "custom-dot"}
  //       >
  //         {React.Children.toArray(heroArr)[index]}
  //       </button>
  //     )
  //   }

  const getCaptionString = image => {
    if (image?.caption?.slice(3, image?.caption?.length - 5).length > 4) {
      return image?.caption?.slice(3, image?.caption?.length - 5)
    } else {
      return " "
    }
  }

  const pickRandomItems = (array, count) => {
    if (count > array.length) {
      throw new Error("Count is greater than the length of the array.")
    }

    const shuffledArray = array.slice() // Create a copy of the original array.
    const pickedItems = []

    for (let i = 0; i < count; i++) {
      const randomIndex = Math.floor(Math.random() * shuffledArray.length)
      const pickedItem = shuffledArray.splice(randomIndex, 1)[0]
      pickedItems.push(pickedItem)
    }

    return pickedItems
  }

  useEffect(() => {
    setImages(pickRandomItems(heroArr, 5))

    return () => {}
  }, [heroArr])

  return (
    <Style ref={wrapperRef}>
      <div className="p-holder">
        <div className="red-3">
          <img src={RedSrc} alt="Shape" className="" />
        </div>
      </div>
      <div id="fade-right">
        <div className="carousel-wrapper">
          {heroArr && (
            <Carousel
              responsive={customOptions.responsive}
              infinite={customOptions.infinite}
              arrows={customOptions.arrows}
              autoPlay={customOptions.autoPlay}
              autoPlaySpeed={customOptions.autoPlaySpeed}
              showDots={true}
              // customDot={<CustomDot />}
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
        </div>
      </div>
    </Style>
  )
}

export default HeroCarousel
