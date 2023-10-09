import React, { useEffect, useRef } from "react"
import Beige3Src from "../../../assets/img/shapes/beige-3.svg"
import TealSrc from "../../../assets/img/shapes/teal-1.svg"
import PinkSrc from "../../../assets/img/shapes/pink-3.svg"
import { useStaticQuery, graphql } from "gatsby"
import { Style } from "./team.styles"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { v4 as uuidv4 } from "uuid"
import Employee from "./employee.component"
const Team = ({ employeeTitle, employeeText, telephone, email }) => {
  const wrapperRef = useRef(null)

  const data = useStaticQuery(graphql`
    query {
      allWpPost(
        filter: {
          categories: {
            nodes: { elemMatch: { name: { eq: "employee", regex: "" } } }
          }
        }
      ) {
        nodes {
          slug
          title
          content
          featuredImage {
            node {
              gatsbyImage(width: 1000, quality: 100)
            }
          }
        }
      }
    }
  `)

  const employees = data.allWpPost.nodes

  useEffect(() => {
    const handleScroll = () => {
      const pink = wrapperRef.current?.querySelector(".pink-3")
      let ratePink = -window.pageYOffset * 0.15
      if (pink) {
        pink.style.transform = `translate3d(0, ${ratePink}px, 0)`
      }
      const beige = wrapperRef.current?.querySelector(".beige-3")
      let rateBeige = -window.pageYOffset * 0.15
      if (beige) {
        beige.style.transform = `translate3d(0, ${rateBeige}px, 0)`
      }
      const teal = wrapperRef.current?.querySelector(".teal-1")
      let rateTeal = -window.pageYOffset * 0.33
      if (teal) {
        teal.style.transform = `translate3d(0, ${rateTeal}px, 0)`
      }
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  //   const getMedia = id => {
  //     return (
  //       media?.filter(m => m.id === id)[0]?.source_url ||
  //       "../../../../assets/img/icons/no-image.svg"
  //     )
  //   }

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

  const isCollapsed = employee => {
    return employee.isCollapsed
  }

  const toggleCollapse = employee => {
    console.log(employee)
    employee.isCollapsed = !employee.isCollapsed
    return employee.isCollapsed
  }

  const getEvenEmployee = arr => {
    let even = arr?.filter((a, i) => i % 2 === 0)
    return even
  }

  const getOddEmployee = arr => {
    let odd = arr?.filter((a, i) => i % 2 === 1)
    return odd
  }

  return (
    <Style className="bg-beige" ref={wrapperRef}>
      <div className="p-holder">
        <div className="beige-3">
          <img src={Beige3Src} className="" alt="Shape" />
        </div>
        <div className="teal-1">
          <img src={TealSrc} className="" alt="" />
        </div>
      </div>
      <div className="container py-5">
        <div className="row p-header mt-lg-5 pb-200">
          <div className="col-lg-5 p-nav mt-3">
            <div className="p-holder ps-7">
              <div className="pink-3">
                <img src={PinkSrc} className="" alt="" />
              </div>
            </div>
            <div className="ps-7">
              <h1 className="text-black">
                <span className="overflow-hidden h-100 d-inline-block">
                  {employeeTitle?.split(" ").map((word, i) => (
                    <span
                      key={i}
                      className={`d-block me-3`}
                      dangerouslySetInnerHTML={{ __html: word }}
                    ></span>
                  ))}
                </span>
              </h1>
              <p
                dangerouslySetInnerHTML={{ __html: employeeText }}
                className="pe-lg-5 mt-5 me-lg-4 "
              ></p>
              <p className="pe-lg-5 mb-1 me-lg-4">
                <a
                  href={`mailto:${email}`}
                  dangerouslySetInnerHTML={{ __html: email }}
                ></a>
              </p>
              <p className="pe-lg-5 mb-1 me-lg-4">
                <a
                  href={`tel:${telephone}`}
                  dangerouslySetInnerHTML={{ __html: telephone }}
                ></a>
              </p>
            </div>
          </div>
          <div className="col-lg-7 pt-5">
            <div className="row">
              <div className="col-md-6 px-4">
                {getEvenEmployee(employees).map((employee, i) => {
                  const uniqueId = uuidv4() // Generate a unique ID
                  return <Employee employee={employee} key={uniqueId} />
                })}
              </div>
              <div className="col-md-6 px-4">
                {getOddEmployee(employees).map((employee, i) => {
                  const uniqueId = uuidv4() // Generate a unique ID
                  return <Employee employee={employee} key={uniqueId} />
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Style>
  )
}

export default Team
