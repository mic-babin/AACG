import React, { useState } from "react"
import { Style } from "./team.styles"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import ArrowSrc from "../../../assets/img/icons/arrow-down.svg"

const Employee = ({ employee }) => {
  const [collapse, setCollapse] = useState(true)
  const toggleCollapse = () => {
    setCollapse(!collapse)
  }
  const getTitle = employee => {
    let infoArr = getInfo(employee)
    let title =
      infoArr[infoArr?.findIndex(element => element?.includes("title"))]?.split(
        "="
      )[1]
    title = title.split("</p>")[0]
    return title
  }

  const getInfo = data => {
    let info = data?.content?.slice(1, data?.content?.length - 5)
    let infoArr = info?.split("<p>")
    return infoArr
  }

  const getTags = employee => {
    let infoArr = getInfo(employee)
    let tags =
      infoArr[infoArr?.findIndex(element => element?.includes("tags"))]?.split(
        "="
      )[1]
    tags = tags?.slice(0, tags?.length - 8)
    return tags
  }

  const getBio = employee => {
    let infoArr = getInfo(employee)
    let bio =
      infoArr[
        infoArr?.findIndex(element => element?.includes("biography1"))
      ]?.split("=")[1]
    bio = bio?.slice(0, bio?.length - 8)
    return bio
  }

  const getBio2 = employee => {
    let infoArr = getInfo(employee)
    let bio =
      infoArr[
        infoArr?.findIndex(element => element?.includes("biography2"))
      ]?.split("=")[1]
    bio = bio?.slice(0, bio?.length - 8)
    return bio
  }

  const getEmail = employee => {
    let infoArr = getInfo(employee)
    let email =
      infoArr[infoArr?.findIndex(element => element?.includes("email"))]?.split(
        "="
      )[1]
    email = email?.slice(0, email?.length - 8)
    return email
  }

  const getTel = employee => {
    let infoArr = getInfo(employee)
    let tel =
      infoArr[
        infoArr?.findIndex(element => element?.includes("telephone"))
      ]?.split("=")[1]
    return tel
  }

  return (
    <Style className="pb-5 mb-5">
      <div className="mx-3 ">
        <div className="bg-blue my-3 d-flex align-items-center">
          <GatsbyImage
            image={getImage(employee.featuredImage.node)}
            className={`w-100 ${
              employee?.featured_media !== 0
                ? "employee-picture"
                : "px-5 mx-xxl-4"
            }`}
            alt={employee.slug}
          />
        </div>

        <button
          type="button"
          className="w-100 equipe-collapsible px-0"
          onClick={() => toggleCollapse()}
        >
          <div className="d-flex justify-content-between align-items-start">
            <div>
              <h4
                dangerouslySetInnerHTML={{
                  __html: employee.title,
                }}
                className="text-black mb-1"
              ></h4>
              <p
                className="mb-1 text-black title"
                dangerouslySetInnerHTML={{
                  __html: getTitle(employee),
                }}
              ></p>
              <p
                className="mb-0 text-black"
                dangerouslySetInnerHTML={{
                  __html: getTags(employee),
                }}
              ></p>
            </div>
            <div className={collapse ? "" : "flipped"}>
              <img className="arrow my-2" src={ArrowSrc} alt="arrow" />
            </div>
          </div>
        </button>
        <div className={`collapse ${collapse ? "" : "show"}`}>
          <p
            className="pt-3 pb-1 small top-line"
            dangerouslySetInnerHTML={{
              __html: getBio(employee),
            }}
          ></p>
          <p
            className="pt-1 pb-1 small"
            dangerouslySetInnerHTML={{
              __html: getBio2(employee),
            }}
          ></p>
          <a
            href={`tel:${getTel(employee)}`}
            aria-label="tel"
            className="contact m-0 d-block"
            dangerouslySetInnerHTML={{
              __html: getTel(employee),
            }}
          ></a>
          <a
            href={`mailto:${getEmail(employee)}`}
            aria-label="email"
            className="contact m-0 d-block"
            dangerouslySetInnerHTML={{
              __html: getEmail(employee),
            }}
          ></a>
        </div>
      </div>
    </Style>
  )
}

export default Employee
