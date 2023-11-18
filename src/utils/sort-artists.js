export const sortArtists = arr => {
  arr.forEach(artist => {
    artist.lastName = artist.title.split(" ").splice(1, 5).join(" ")
  })

  arr.sort(function (a, b) {
    if (a.lastName === "et Pag") {
      a.lastName = "Dan"
    }
    if (b.lastName === "et Pag") {
      b.lastName = "Dan"
    }
    if (a.lastName === "Nyrva Aladin") {
      a.lastName = "Aladin"
    }
    if (b.lastName === "Nyrva Aladin") {
      b.lastName = "Aladin"
    }
    if (a.lastName === "Mia Earle") {
      a.lastName = "Earle"
    }
    if (b.lastName === "Mia Earle") {
      b.lastName = "Earle"
    }
    if (a.lastName === "Donabelle Kaze") {
      a.lastName = "Kaze"
    }
    if (b.lastName === "Donabelle Kaze") {
      b.lastName = "Kaze"
    }

    if (a.lastName < b.lastName) {
      return -1
    }
    if (a.lastName > b.lastName) {
      return 1
    }
    return 0
  })

  return arr
}
