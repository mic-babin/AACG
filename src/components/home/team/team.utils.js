export const getEvenEmployee = arr => {
  let even = arr?.filter((a, i) => i % 2 === 0)
  return even
}

export const getOddEmployee = arr => {
  let odd = arr?.filter((a, i) => i % 2 === 1)
  return odd
}

export const getTitle = employee => {
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

export const getTags = employee => {
  let infoArr = getInfo(employee)
  let tags =
    infoArr[infoArr?.findIndex(element => element?.includes("tags"))]?.split(
      "="
    )[1]
  tags = tags?.slice(0, tags?.length - 8)
  return tags
}

export const getBio = employee => {
  let infoArr = getInfo(employee)
  let bio =
    infoArr[
      infoArr?.findIndex(element => element?.includes("biography1"))
    ]?.split("=")[1]
  bio = bio?.slice(0, bio?.length - 8)
  return bio
}

export const getBio2 = employee => {
  let infoArr = getInfo(employee)
  let bio =
    infoArr[
      infoArr?.findIndex(element => element?.includes("biography2"))
    ]?.split("=")[1]
  bio = bio?.slice(0, bio?.length - 8)
  return bio
}

export const getEmail = employee => {
  let infoArr = getInfo(employee)
  let email =
    infoArr[infoArr?.findIndex(element => element?.includes("email"))]?.split(
      "="
    )[1]
  email = email?.slice(0, email?.length - 8)
  return email
}

export const getTel = employee => {
  let infoArr = getInfo(employee)
  let tel =
    infoArr[
      infoArr?.findIndex(element => element?.includes("telephone"))
    ]?.split("=")[1]
  return tel
}
