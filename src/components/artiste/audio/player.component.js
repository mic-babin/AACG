import React, { useRef, useState, useEffect } from "react"
// import AudioPlayer from "react-h5-audio-player"
// import "react-h5-audio-player/lib/styles.css"
import ArrowSrc from "../../../assets/img/icons/fleche-right.svg"
import PlaySrc from "../../../assets/img/icons/play.svg"
import PauseSrc from "../../../assets/img/icons/pause.svg"

const Player = ({ audio }) => {
  const audioPlayerRef = useRef(null)
  const [isPlaying, setIsPlaying] = useState(false)

  //   console.log(audioPlayerRef.current.audio.current)

  useEffect(() => {
    if (audioPlayerRef) {
      if (isPlaying) {
        audioPlayerRef.current.audio.current.play()
      } else {
        audioPlayerRef.current.audio.current.pause()
      }
    }

    return () => {}
  }, [isPlaying])

  const formatTime = seconds => {
    if (!isNaN(seconds)) {
      return new Date(seconds * 1000).toISOString().substr(14, 5)
    } else {
      return new Date(0 * 1000).toISOString().substr(14, 5)
    }
  }
  return (
    <div className="d-flex mt-4 mx-lg-5 px-lg-5 position-relative z-2">
      <div className="">
        <div
          onClick={() => {
            setIsPlaying(!isPlaying)
          }}
        >
          {!isPlaying ? (
            <img className="pointer" src={PlaySrc} alt="Play" />
          ) : (
            <img
              className="pointer"
              height="44px"
              width="44px"
              src={PauseSrc}
              alt="Pause"
            />
          )}
        </div>
      </div>

      <div className="flex-grow-1 px-4 mx-3 ">
        <p
          className="text-black mb-0"
          dangerouslySetInnerHTML={{
            __html: audio.caption.slice(3, audio.caption.length - 5),
          }}
        ></p>
        <p
          className="description"
          dangerouslySetInnerHTML={{
            __html: audio.description.slice(
              audio.description.indexOf("p>") + 2,
              audio.description.length - 5
            ),
          }}
        ></p>
        {/* <AudioPlayer
          ref={audioPlayerRef}
          src={audio.mediaItemUrl}
          controls={false}
          onPlay={e => console.log("onPlay")}
          showJumpControls={false}
        /> */}

        <div className="d-flex justify-content-between">
          <div>
            {formatTime(
              audioPlayerRef.current ? audioPlayerRef.current.currentTime : 0
            )}
          </div>
          <div>
            {formatTime(
              audioPlayerRef.current ? audioPlayerRef.current.duration : 0
            )}
          </div>
        </div>
      </div>

      <div className="download-btn pointer">
        <a
          href={audio.mediaItemUrl}
          target="_blank"
          download={`${audio.caption.slice(3, audio.caption.length - 5)}.mp3`}
        >
          <div className="d-lg-flex justify-content-end align-items-center d-none btn-hover underline">
            <div className="pb-2">
              <img className="download-arrow" src={ArrowSrc} alt="Fleche" />
            </div>

            <div className="text-black ms-3 pb-2 ">Télécharger l'audio</div>
          </div>
        </a>
      </div>
    </div>
  )
}

export default Player
