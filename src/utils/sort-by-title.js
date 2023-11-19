export const sortByTitle = items => {
  // Use the sort method to sort the items array
  items.sort((a, b) => {
    const titleA = a.title || ""
    const titleB = b.title || ""

    // Use localeCompare to perform a case-insensitive string comparison
    return titleA.localeCompare(titleB, undefined, {
      sensitivity: "base",
    })
  })

  // Return the sorted array
  return items
}
