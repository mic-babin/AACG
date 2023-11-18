import React from "react"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { getArtistTags } from "../../../utils/artist-tags"

const ArtisteCard = ({ artist }) => {
  let tags = artist.tags.nodes
  let artistTags = getArtistTags(
    tags.map(t => t.name),
    artist.title
  )
  return (
    <Link
      id={artist.slug}
      to={"/artistes/" + artist.slug}
      className="col-lg-4 col-md-6 artist-card px-4 py-3 z-2"
    >
      <GatsbyImage
        image={getImage(artist.featuredImage.node)}
        alt={artist.title}
        style={{ width: "100%" }}
        className="mb-4 pb-2"
        objectFit="cover"
      />
      <h2
        className="mb-2 text-black"
        dangerouslySetInnerHTML={{
          __html: artist.title,
        }}
      ></h2>
      <div>
        <p>
          {artistTags.map((tag, i) => (
            <span
              key={i}
              className={`text-black ${i === 0 ? "first-letter-capital" : ""}`}
            >
              {i > 0 && <span>&nbsp;</span>}
              {tag}
              {i < artistTags.length - 2 && ", "}

              {i === artistTags.length - 2 &&
                tag !== artistTags[i - 1] &&
                " et "}
            </span>
          ))}
        </p>
      </div>
    </Link>
  )
}

export default ArtisteCard
