export const sortByDescription = images => {
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
