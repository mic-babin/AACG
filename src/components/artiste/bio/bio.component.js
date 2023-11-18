import React, { useEffect, useRef } from "react"
import { Section } from "./bio.styles"
import PinkSrc from "../../../assets/img/shapes/pink-2.svg"
import RedSrc from "../../../assets/img/shapes/red-2.svg"
import { getArtistTags } from "../../../utils/artist-tags"
import FbSrc from "../../../assets/img/icons/socials/Facebook.svg"
import FbBlueSrc from "../../../assets/img/icons/socials/facebook-blue.svg"
import InSrc from "../../../assets/img/icons/socials/Instagram.svg"
import InBlueSrc from "../../../assets/img/icons/socials/instagram-blue.svg"
import VimeoSrc from "../../../assets/img/icons/socials/Vimeo.svg"
import VimeoBlueSrc from "../../../assets/img/icons/socials/vimeo-blue.svg"
import BioCarousel from "../bio-carousel/bio-carousel.component"

const Bio = ({ content, title, slug, tags, bioImageArr }) => {
  const wrapperRef = useRef(null)

  let artistTags = getArtistTags(tags, title)

  const socialIcons = {
    facebook: {
      src: FbSrc,
      blueSrc: FbBlueSrc,
    },
    instagram: {
      src: InSrc,
      blueSrc: InBlueSrc,
    },
    vimeo: {
      src: VimeoSrc,
      blueSrc: VimeoBlueSrc,
    },
  }

  const taille = content
    .filter(element => element.includes("#taille"))[0]
    ?.split("=")[1]
    ?.split("</p>")[0]
  const poids = content
    .filter(element => element.includes("#poids"))[0]
    ?.split("=")[1]
    ?.split("</p>")[0]
  const cheveux = content
    .filter(element => element.includes("#cheveux"))[0]
    ?.split("=")[1]
    ?.split("</p>")[0]
  const langues = content
    .filter(element => element?.includes("#langues"))[0]
    ?.split("=")[1]
    ?.split("</p>")[0]
  const uda = content
    .filter(element => element.includes("#UDA"))[0]
    ?.split("=")[1]
    ?.split("</p>")[0]
  const sartec = content
    .filter(element => element.includes("#SARTEC"))[0]
    ?.split("=")[1]
    ?.split("</p>")[0]
  const actra = content
    .filter(element => element.includes("#ACTRA"))[0]
    ?.split("=")[1]
    ?.split("</p>")[0]
  const yeux = content
    .filter(element => element.includes("#yeux"))[0]
    ?.split("=")[1]
    ?.split("</p>")[0]
  const bio = content
    .filter(element => element.includes("#bio"))[0]
    ?.split("=")[1]
    ?.split("</p>")[0]
  const cv = content
    .filter(element => element.includes("#cv"))[0]
    ?.split("=")[1]
    ?.split("</p>")[0]
  const instagram = content
    .filter(element => element.includes("#instagram"))[0]
    ?.split("=")[1]
    ?.split("</p>")[0]
  const facebook = content
    .filter(element => element.includes("#facebook"))[0]
    ?.split("=")[1]
    ?.split("</p>")[0]
  const vimeo = content
    .filter(element => element.includes("#vimeo"))[0]
    ?.split("=")[1]
    ?.split("</p>")[0]

  useEffect(() => {
    const handleScroll = () => {
      const red = wrapperRef.current.querySelector(".red-2")
      let rateRed = window.pageYOffset * 0.33
      if (red) {
        red.style.transform = `translate3d(0, ${rateRed}px, 0)`
      }
      const pink = wrapperRef.current.querySelector(".pink-2")
      let ratePink = window.pageYOffset * 0.25
      if (pink) {
        pink.style.transform = `translate3d(0, ${ratePink}px, 0)`
      }
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const getLastNameLength = fullname => {
    return fullname?.split(" ").slice(1, 5).join(" ").length
  }

  return (
    <Section>
      <div className="bio-wrapper bg-teal z-minus-2" ref={wrapperRef}>
        <div className="container px-3 px-md-0 p-xxl-3">
          <div className="p-holder">
            <div className="pink-2 z-0">
              <img src={PinkSrc} alt="" className="" />
            </div>
          </div>
          <div className="z-2">
            <div className="p-holder z-2">
              <div className="red-2">
                <img src={RedSrc} alt="" className="" />
              </div>
              <h1
                className="ps-7 z-2"
                style={
                  getLastNameLength(title) >= 15 ? { lineHeight: "1.1" } : null
                }
              >
                <span className="overflow-hidden h-100">
                  {title.split(" ").map((word, i) => (
                    <span
                      key={i}
                      className={` ${
                        i === 0 && getLastNameLength(title) <= 15
                          ? "d-block"
                          : "d-inline-block"
                      }`}
                      style={
                        getLastNameLength(title) >= 15
                          ? { fontSize: "62px", letterSpacing: "0" }
                          : null
                      }
                    >
                      <span dangerouslySetInnerHTML={{ __html: word }} />
                    </span>
                  ))}
                </span>
              </h1>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 ps-7">
              <h2 className="p-title ms-xl-3 mt-5 ">
                {artistTags.map((tag, i) => (
                  <span
                    key={i}
                    className={`${i === 0 ? "first-letter-capital" : ""}`}
                  >
                    {i > 0 && <span>&nbsp;</span>}
                    {tag}
                    {i < artistTags.length - 2 && ", "}

                    {i === artistTags.length - 2 &&
                      tag !== artistTags[i - 1] &&
                      " et "}
                  </span>
                ))}
              </h2>
              <div className="row ps-7 my-4 pt-2 pe-xl-3 pe-xxl-5">
                {taille && taille.length > 2 && (
                  <div className="col-4 text-white b-line ">
                    <strong>Taille</strong>&nbsp;
                    <span dangerouslySetInnerHTML={{ __html: taille }} />
                  </div>
                )}
                {poids && poids.length > 2 && (
                  <div className="col-4 text-white b-line ">
                    <strong>Poids</strong>&nbsp;
                    <span dangerouslySetInnerHTML={{ __html: poids }} />
                  </div>
                )}
                {cheveux && cheveux.length > 2 && (
                  <div className="col-4 text-white b-line ">
                    <strong>Cheveux</strong>&nbsp;
                    <span dangerouslySetInnerHTML={{ __html: cheveux }} />
                  </div>
                )}
                {yeux && yeux.length > 2 && (
                  <div className="col-4 text-white b-line ">
                    <strong>Yeux</strong>&nbsp;
                    <span dangerouslySetInnerHTML={{ __html: yeux }} />
                  </div>
                )}
                {langues && langues.length > 2 && (
                  <div className="col-8 text-white b-line ">
                    <strong>Langue(s)</strong>&nbsp;
                    <span dangerouslySetInnerHTML={{ __html: langues }} />
                  </div>
                )}
                {uda && uda.length > 2 && (
                  <div
                    className={`col-4 text-white  ${
                      title === "Anaïs Favron" ? "b-line" : ""
                    }`}
                  >
                    <strong>UDA</strong>&nbsp;
                    <span dangerouslySetInnerHTML={{ __html: uda }} />
                  </div>
                )}
                {sartec && sartec.length > 2 && (
                  <div className="col-4 text-white ">
                    <strong>SARTEC</strong>&nbsp;
                    <span dangerouslySetInnerHTML={{ __html: sartec }} />
                  </div>
                )}
                {actra && actra.length > 2 && (
                  <div className="col-8 text-white ">
                    <strong>ACTRA</strong>&nbsp;
                    <span dangerouslySetInnerHTML={{ __html: actra }} />
                  </div>
                )}
              </div>
              <div className="ps-6 mt-5 pt-5">
                <a target="_blank" href={bio} download={`${slug}-bio.pdf`}>
                  <button className="me-4 mb-4 ">Ouvrir la bio</button>
                </a>
                <a target="_blank" href={cv} download={`${slug}-cv.pdf`}>
                  <button className="">Ouvrir le CV</button>
                </a>
              </div>
            </div>
            <div className="col-lg-6 p-0 p-md-2 mt-5 mt-lg-0">
              <BioCarousel imgArr={bioImageArr} />
            </div>
          </div>
          <div className="row">
            <div className="w-100">
              <div className="float-end">
                <div className="d-flex mb-5 pb-5">
                  {facebook && (
                    <a
                      href={facebook}
                      className="social-icons pe-3 envelope delay-13"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      <img
                        src={FbSrc || socialIcons["facebook"].src}
                        onMouseOver={e => {
                          e.currentTarget.src = socialIcons["facebook"].blueSrc
                        }}
                        onMouseOut={e => {
                          e.currentTarget.src = socialIcons["facebook"].src
                        }}
                        alt={"facebook"}
                      />
                    </a>
                  )}
                  {instagram && (
                    <a
                      href={instagram}
                      className="social-icons pe-3 envelope delay-14"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      <img
                        src={InSrc || socialIcons["instagram"].src}
                        onMouseOver={e => {
                          e.currentTarget.src = socialIcons["instagram"].blueSrc
                        }}
                        onMouseOut={e => {
                          e.currentTarget.src = socialIcons["instagram"].src
                        }}
                        alt={"instagram"}
                      />
                    </a>
                  )}
                  {vimeo && (
                    <a
                      href={vimeo}
                      className="social-icons pe-3 envelope delay-15"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      <img
                        src={VimeoSrc || socialIcons["vimeo"].src}
                        onMouseOver={e => {
                          e.currentTarget.src = socialIcons["vimeo"].blueSrc
                        }}
                        onMouseOut={e => {
                          e.currentTarget.src = socialIcons["vimeo"].src
                        }}
                        alt={"vimeo"}
                      />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}

export default Bio
