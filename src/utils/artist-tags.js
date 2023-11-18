export const getArtistTags = (tags, title) => {
  let artistTags = []
  let index = 0

  tags.forEach(tag => {
    if (isArtistsTag(tag) && !artistTags.includes(tag))
      artistTags.push(getTag(tag, tags, index, title))
    index++
  })
  // this.tagsArrayLength = (artistTags.length)
  return artistTags
}

const isArtistsTag = tag => {
  //Missing : 29, 33
  let artistTags = [
    "Animateurs et animatrices",
    "Auteurs et autrices",
    "Chroniqueurs et chroniqueuses",
    "Comédiens",
    "Comédiennes",
    "Concepteurs et conceptrices",
    "Humoristes",
    "Improvisateurs et improvisatrices",
    "Metteurs et metteures en scène",
    "Réalisateurs et réalisatrices",
    "Concepteurs et conceptrices",
  ]
  return artistTags.includes(tag)
}

export const getTagString = (tag, isWoman, title) => {
  switch (tag) {
    case "Animateurs et animatrices":
      if (isWoman) {
        return "Animatrice"
      } else {
        return "Animateur"
      }
    case "Auteurs et autrices":
      if (isWoman) {
        return "Autrice"
      } else {
        return "Auteur"
      }
    case "Comédiens":
      return "Comédien"
    case "Comédiennes":
      return "Comédienne"
    case "Humoristes":
      return "Humoriste"
    case "Metteurs et metteures en scène":
      if (isWoman) {
        return "Metteure en scène"
      } else {
        return "Metteur en scène"
      }
    case "Réalisateurs et réalisatrices":
      if (title === "Dan et Pag") {
        return "Réalisateurs"
      }
      if (isWoman) {
        return "Réalisatrice"
      } else {
        return "Réalisateur"
      }
    case "Chroniqueurs et chroniqueuses":
      if (isWoman) {
        return "Chroniqueuse"
      } else {
        return "Chroniqueur"
      }
    case "Concepteurs et conceptrices":
      if (isWoman) {
        return "Conceptrice"
      } else {
        return "Concepteur"
      }
    default:
      return ""
  }
}

export const getTag = (tag, tags, index, title) => {
  let isWoman = tags.includes("Femme")

  let newTag = getTagString(
    tags.find(t => t === tag),
    isWoman,
    title
  )

  if (newTag.length > 0) {
    if (index !== 0) {
      return newTag.toLowerCase()
    } else {
      return newTag
    }
  } else {
    return null
  }
}
