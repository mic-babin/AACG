import React from "react"

export const customOptions = {
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

export const CustomDot = ({ onClick, ...rest }) => {
  const { active } = rest

  return (
    <button
      className={active ? "active dots" : "inactive dots"}
      onClick={() => onClick()}
    ></button>
  )
}

export const getCaptionString = image => {
  if (image?.caption?.slice(3, image?.caption?.length - 5).length > 4) {
    return image?.caption?.slice(3, image?.caption?.length - 5)
  } else {
    return " "
  }
}

export const pickRandomItems = (array, count) => {
  if (
    window.location.href.includes("artistes") ||
    window.location.href.includes("voix")
  )
    return
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
