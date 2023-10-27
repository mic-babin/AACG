import React, { useEffect, useState } from "react"
import { socials2 } from "../data/socials" // Make sure to import your data appropriately
import { Style } from "./footer.styles"
import HorizontalSrc from "../../../assets/img/logo/logo-horizontal.svg"
import VerticalSrc from "../../../assets/img/logo/logo-horizontal.svg"
import FbSrc from "../../../assets/img/icons/socials/Facebook.svg"
import FbBlueSrc from "../../../assets/img/icons/socials/facebook-blue.svg"
import InSrc from "../../../assets/img/icons/socials/Instagram.svg"
import InBlueSrc from "../../../assets/img/icons/socials/instagram-blue.svg"
import VimeoSrc from "../../../assets/img/icons/socials/Vimeo.svg"
import VimeoBlueSrc from "../../../assets/img/icons/socials/vimeo-blue.svg"

const Footer = () => {
  const [year, setYear] = useState(new Date().getFullYear())

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

  useEffect(() => {
    setYear(new Date().getFullYear())
  }, [])

  return (
    <Style className="footer">
      <div className="container-lg container-fluid pt-5">
        <div className="d-flex justify-content-center d-sm-none">
          <img
            className="footer-logo mt-5"
            src={HorizontalSrc}
            alt="Agence Artistique Corinne Giguère"
          />
        </div>
        <div className="f-row py-5 mt-sm-5">
          <div className="f-col d-none d-sm-block">
            <img
              className="footer-logo"
              src={VerticalSrc}
              alt="Agence Artistique Corinne Giguère"
            />
          </div>
          <div className="f-col d-none d-lg-flex"></div>
          <div className="f-col w-100">
            <div className="d-flex flex-column align-items-center d-sm-block float-sm-end pe-xl-5">
              <h4 className="mb-3 pb-2 text-white">Visitez-nous</h4>
              <div className="smoll text-white mb-2 pb-1">
                2025A rue Masson #101-J
              </div>
              <div className="smoll text-white mb-2 pb-1">
                Montréal, Québec H2H 2P7
              </div>
            </div>
          </div>
          <div className="f-col w-100 d-none d-sm-block">
            <div className="float-sm-end ps-4 ps-lg-0 me-4 me-lg-0">
              <h4 className="mb-3 pb-2">Contactez-nous</h4>
              <a className="smoll mb-2 pb-1 d-block" href="tel:+15143791719">
                (514) 379-1719
              </a>
              <a className="smoll d-block" href="mailto:info@agencecg.com">
                info@agencecg.com
              </a>
            </div>
          </div>
          <div className="f-col w-100 d-none d-md-block">
            <div className="float-end me-4 me-lg-0">
              <h4 className="mb-3 pb-2">Suivez-nous</h4>
              <div className="d-flex mt-3">
                {socials2.map((social, index) => (
                  <a
                    key={index}
                    className="social-icons pe-3"
                    target="_blank"
                    rel="noreferrer noopener"
                    href={social?.url}
                  >
                    <img
                      src={social.source || socialIcons[social.name].src}
                      onMouseOver={e => {
                        e.currentTarget.src = socialIcons[social.name].blueSrc
                      }}
                      onMouseOut={e => {
                        e.currentTarget.src = socialIcons[social.name].src
                      }}
                      alt={social.name}
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="d-flex align-items-center flex-column d-sm-none pb-5">
            <h4 className="mb-3 pb-2">Contactez-nous</h4>
            <a className="smoll mb-2 pb-1 d-block" href="tel:+15143791719">
              (514) 379-1719
            </a>
            <a className="smoll d-block" href="mailto:info@agencecg.com">
              info@agencecg.com
            </a>
          </div>
        </div>
        <div className="row pb-5">
          <div className="w-100 pb-4">
            <div className="d-block d-sm-flex justify-content-between">
              <div className="d-flex ps-4 justify-content-center mb-5 mb-sm-0">
                {socials2.map((social, index) => (
                  <a
                    key={index}
                    className="social-icons pe-3 d-md-none"
                    target="_blank"
                    rel="noreferrer noopener"
                    href={social?.url}
                  >
                    <img
                      src={social.source || socialIcons[social.name].src}
                      onMouseOver={e => {
                        e.currentTarget.src = socialIcons[social.name].blueSrc
                      }}
                      onMouseOut={e => {
                        e.currentTarget.src = socialIcons[social.name].src
                      }}
                      alt={social.name}
                    />
                  </a>
                ))}
              </div>
              <div className="me-sm-4 me-lg-0 d-block text-center">
                <div className="d-sm-inline d-block smoll">
                  © All rights reserved {year}
                </div>
                <div className="d-sm-inline d-block smoll text-white">
                  &nbsp;Made with ❤ by{" "}
                  <a
                    className="text-white smoll"
                    href="https://www.commepasdeux.com/"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    Comme Pas Deux
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Style>
  )
}

export default Footer
