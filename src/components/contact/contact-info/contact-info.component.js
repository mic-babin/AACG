import React, { useEffect, useRef } from "react"
import { Link } from "gatsby"
import { Section } from "./contact-info.styles"
import RedSrc from "../../../assets/img/shapes/red-1.svg"
import PinkSrc from "../../../assets/img/shapes/pink-1.svg"
import BeigeSrc from "../../../assets/img/shapes/beige-1.svg"
import InstagramSrc from "../../../assets/img/icons/socials/instagram-black.svg"
import InstagramTealSrc from "../../../assets/img/icons/socials/instagram-teal.svg"
import VimeoSrc from "../../../assets/img/icons/socials/vimeo-black.svg"
import VimeoTealSrc from "../../../assets/img/icons/socials/vimeo-teal.svg"
import FacebookSrc from "../../../assets/img/icons/socials/facebook-black.svg"
import FacebookTealSrc from "../../../assets/img/icons/socials/facebook-teal.svg"
import ContactForm from "./contact-form/contact-form.component"

const ContactInfo = ({ title, content }) => {
  const wrapper = useRef(null)
  const text = content
    .filter(element => element.includes("#texte"))[0]
    .split("=")[1]
    .split("</p>")[0]
  const text2 = content
    .filter(element => element.includes("#texte2"))[0]
    .split("=")[1]
    .split("</p>")[0]

  const adresse = content
    .filter(element => element.includes("#adresse"))[0]
    .split("=")[1]
    .split("</p>")[0]
  const ville = content
    .filter(element => element.includes("#ville"))[0]
    .split("=")[1]
    .split("</p>")[0]
  const telephone = content
    .filter(element => element.includes("#telephone"))[0]
    .split("=")[1]
    .split("</p>")[0]
  const urgence = content
    .filter(element => element.includes("#urgence"))[0]
    .split("=")[1]
    .split("</p>")[0]
  const email = content
    .filter(element => element.includes("#email"))[0]
    .split("=")[1]
    .split("</p>")[0]
  const facebook = content
    .filter(element => element.includes("#facebook"))[0]
    .split("=")[1]
    .split("</p>")[0]
  const instagram = content
    .filter(element => element.includes("#instagram"))[0]
    .split("=")[1]
    .split("</p>")[0]
  const vimeo = content
    .filter(element => element.includes("#vimeo"))[0]
    .split("=")[1]
    .split("</p>")[0]

  useEffect(() => {
    const scrollHandler = () => {
      const beige = wrapper.current.querySelector(".beige-1")
      const pink = wrapper.current.querySelector(".pink-1")
      const red = wrapper.current.querySelector(".red-1")
      let rateBeige = -window.pageYOffset * 0.15
      beige.style.transform = "translateY(" + rateBeige + "px)"
      let ratePink = -window.pageYOffset * 0.05
      pink.style.transform = "translateY(" + ratePink + "px)"
      let rateRed = -window.pageYOffset * 0.33
      red.style.transform = "translateY(" + rateRed + "px)"
    }

    window.addEventListener("scroll", scrollHandler)

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", scrollHandler)
    }
  }, [])
  return (
    <Section ref={wrapper}>
      <div className="p-nav">
        <div className="p-holder">
          <div className="red-1">
            <img src={RedSrc} alt="forme" />
          </div>
          <div className="pink-1">
            <img src={PinkSrc} alt="forme" />
          </div>
        </div>
        <div className="container-lg container-fluid">
          <div className="row mt-md-5 mt-0">
            <div className="col-md-6 pe-lg-5">
              <div className="p-holder">
                <div className="beige-1">
                  <img src={BeigeSrc} alt="forme" />
                </div>
              </div>

              <h1 className="my-5 text-black py-5">
                <span className="overflow-hidden h-100 d-inline-block">
                  {title.map((word, i) => (
                    <span
                      key={i}
                      className="d-inline-block"
                      dangerouslySetInnerHTML={{ __html: word }}
                    ></span>
                  ))}
                </span>
              </h1>

              <div className="pt-md-5 pt-0"></div>
              <div>
                <h2
                  className="text-black pt-0 "
                  dangerouslySetInnerHTML={{
                    __html: text + "</br>" + text2,
                  }}
                ></h2>
                <p
                  className="ms-sm-5 ms-3 pt-4 ps-3 p "
                  dangerouslySetInnerHTML={{
                    __html: adresse + "</br>" + ville,
                  }}
                ></p>
                <p
                  className="ms-sm-5 ms-3 ps-3 p "
                  dangerouslySetInnerHTML={{
                    __html: telephone + "</br>" + urgence + "</br>" + email,
                  }}
                ></p>
                <div className="ms-sm-5 ms-3 ps-3 d-flex mt-3">
                  <Link
                    className="social-icons pe-3"
                    target="_blank"
                    to={facebook}
                  >
                    <img
                      src={FacebookSrc}
                      onMouseOver={e => {
                        e.currentTarget.src = FacebookTealSrc
                      }}
                      onMouseOut={e => {
                        e.currentTarget.src = FacebookSrc
                      }}
                      alt="facebook"
                    />
                  </Link>
                  <Link
                    className="social-icons pe-3"
                    target="_blank"
                    to={instagram}
                  >
                    <img
                      src={InstagramSrc}
                      onMouseOver={e => {
                        e.currentTarget.src = InstagramTealSrc
                      }}
                      onMouseOut={e => {
                        e.currentTarget.src = InstagramSrc
                      }}
                      alt="instagram"
                    />
                  </Link>
                  <Link
                    className="social-icons pe-3 "
                    target="_blank"
                    to={vimeo}
                  >
                    <img
                      src={VimeoSrc}
                      onMouseOver={e => {
                        e.currentTarget.src = VimeoTealSrc
                      }}
                      onMouseOut={e => {
                        e.currentTarget.src = VimeoSrc
                      }}
                      alt="vimeo"
                    />
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-6 pt-5 mt-5">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}

export default ContactInfo
