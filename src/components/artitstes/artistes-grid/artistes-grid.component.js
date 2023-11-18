import React, { useState, useEffect } from "react"
import RedSrc from "../../../assets/img/shapes/red-2.svg"
import ArtisteCard from "../artiste-card/artist-card.component"

const ArtistesGrid = ({ artists, location, selectedTags }) => {
  const [filteredArtists, setFilteredArtists] = useState(artists)

  useEffect(() => {
    setFilteredArtists(
      selectedTags.length > 0
        ? artists.filter(artist =>
            selectedTags.every(selectedTag =>
              artist.tags.nodes.map(tag => tag.name).includes(selectedTag)
            )
          )
        : artists
    )
  }, [selectedTags, location])

  return (
    <div className="container mb-5 p-header pb-5">
      <div className="p-holder">
        <div className="red-2 z-minus">
          <img src={RedSrc} alt="Forme Rouge" />
        </div>
      </div>
      {artists ? (
        <div className="row py-5 mb-5">
          {filteredArtists.length > 0 ? (
            filteredArtists.map(artist => (
              <ArtisteCard artist={artist} key={artist.id} />
            ))
          ) : (
            <div className="d-flex justify-content-center align-items-center">
              Aucun résultat ne correspond à cette recherche.
            </div>
          )}
        </div>
      ) : null}
    </div>
  )
}

export default ArtistesGrid
