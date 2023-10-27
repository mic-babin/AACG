import React, { useEffect, useState } from "react"
import { Link } from "gatsby"
import LogoSrc from "../../../assets/img/logo/logo-horizontal.svg"
import { Wrapper, Logo, LinkList, Button, SearchInput } from "./main-nav.styles"
import { useIsMedium } from "../../../utils/media-query.hook"
import Burger from "../burger/burger.component"
import { menu } from "../data/menu"
import SearchSrc from "../../../assets/img/icons/search-white.svg"
import CloseSrc from "../../../assets/img/icons/close.svg"
import { veryLittleFadeUpVariants } from "../../../assets/animations/animations"
import { motion } from "framer-motion"

const MainNav = () => {
  const isMedium = useIsMedium()
  const links = menu

  const [top, setTop] = useState(true)
  const [showSearchInput, setShowSearchInput] = useState(false)
  const [searchInput, setSearchInput] = useState("")
  const [filteredArtists, setFilteredArtists] = useState([])
  const [filteredLength, setFilteredLength] = useState(0)
  const [tagsArrayLength, setTagsArrayLength] = useState(0)
  const [tags, setTags] = useState([])

  const animation = {
    initial: "hidden",
    whileInView: "visible",
    viewport: { once: true },
    variants: veryLittleFadeUpVariants,
  }

  const toggleTop = () => {
    if (window.pageYOffset > 50) {
      setTop(false)
    } else {
      setTop(true)
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", () => toggleTop())

    //   getArtists();
    //   getTags();

    return () => window.removeEventListener("scroll", () => toggleTop())
  }, [])

  const toggleSearchInput = bool => {
    setShowSearchInput(!bool)
    setSearchInput("")
  }

  // const onSearchChange = () => {
  //   const filteredArtists = loadArtists.filter((artist) =>
  //     artist.title.rendered
  //       .toLowerCase()
  //       .normalize("NFD")
  //       .replace(/[\u0300-\u036f]/g, "")
  //       .includes(searchInput.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, ""))
  //   );
  //   setFilteredArtists(filteredArtists.slice(0, 4));
  //   setFilteredLength(filteredArtists.length);
  // };

  // const getArtists = () => {
  //   // Define your logic to get artists (posts)
  //   const artists = wp.posts.map((post) => post);
  //   setArtists(artists);
  // };

  // const goToArtist = (artist) => {
  //   // Define your logic to navigate to the artist page
  //   router.navigate([`/artistes/${artist?.slug}`]);
  //   setSearchInput("");
  //   setShowSearchInput(false);
  // };

  // const getArtistTags = (tags) => {
  //   const artistTags = [];
  //   tags.forEach((tag) => {
  //     if (isArtistsTag(tag) && !artistTags.includes(tag)) {
  //       artistTags.push(tag);
  //     }
  //   });
  //   setTagsArrayLength(artistTags.length);
  //   return artistTags;
  // };

  // const isArtistsTag = (tag) => {
  //   // Define your logic to check if a tag is an artist tag
  //   return tagsService.isArtistsTag(tag);
  // };

  // const getTag = (tag, tags, index, artist) => {
  //   // Define your logic to get a tag
  //   return tagsService.getTag(tag, tags, index, artist);
  // };

  // const getTags = () => {
  //   // Define your logic to get tags
  //   const tags = wp.tags;
  //   setTags(tags);
  // };

  return (
    <Wrapper
      className={`navbar navbar-expand-lg fixed-top ${top ? "" : "diminished"}`}
    >
      <div className="container-lg container-fluid">
        <Link to="/">
          <Logo
            src={LogoSrc}
            alt="Logo"
            {...animation}
            transition={{ duration: 0.25, delay: 0.5 }}
          />
        </Link>
        <LinkList>
          {!isMedium &&
            links.map((link, index) => (
              <React.Fragment key={index}>
                {!link.cta && (
                  <Button
                    {...animation}
                    transition={{ duration: 0.25, delay: 0.5 + index / 10 }}
                  >
                    <Link to={link.link} className={`link`}>
                      {link.title}
                    </Link>
                  </Button>
                )}
              </React.Fragment>
            ))}
          {!isMedium && (
            <>
              <SearchInput className="mx-1 px-2 p-holder position-relative">
                <input
                  className={`search-input  ${showSearchInput ? "" : "hide"}`}
                  type="text"
                  value={searchInput}
                  onChange={e => setSearchInput(e.target.value)}
                  placeholder="Nom ou prénom d'artistes..."
                />
                <div className={`p-holder ${showSearchInput ? "" : "hide"}`}>
                  <img
                    src={CloseSrc}
                    alt=""
                    className="close-icon"
                    onClick={() => toggleSearchInput(showSearchInput)}
                  />
                </div>
              </SearchInput>
              {/* <div className="search-results-wrapper">
                    {searchInput !== "" && showSearchInput ? (
                      <ul>
                        {filteredArtists.map((artist, index) => (
                          <li key={index}>
                            <div onClick={() => goToArtist(artist)}>
                              <div>{artist.title.rendered}</div>
                            </div>
                            <div className="small-text">
                              {getArtistTags(artist?.tags).map((tag, i) => (
                                <span key={i}>
                                  {i === 0
                                    ? getTag(tag, tags, i, artist)
                                    : `, ${getTag(tag, tags, i, artist)}`}
                                </span>
                              ))}
                            </div>
                          </li>
                        ))}
                        {filteredLength === 0 && (
                          <li>
                            Aucun résultat ne correspond à votre recherche
                          </li>
                        )}
                      </ul>
                    ) : null}
                  </div> */}

              <div
                className="ms-2 d-flex justify-content-center "
                onClick={() => toggleSearchInput(showSearchInput)}
              >
                <motion.img
                  src={SearchSrc}
                  alt="Search Icon"
                  className="search-icon"
                  {...animation}
                  transition={{ duration: 0.25, delay: 0.9 }}
                />
              </div>
              <Button {...animation} transition={{ duration: 0.25, delay: 1 }}>
                <Link to={links[links.length - 1].link} className={`link cta`}>
                  {links[links.length - 1].title}
                </Link>
              </Button>
            </>
          )}
          {isMedium && (
            <Button>
              <Burger />
            </Button>
          )}
        </LinkList>
      </div>
    </Wrapper>
  )
}

export default MainNav
